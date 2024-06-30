// Jobs.jsx
import React, { useContext, useEffect, useState } from 'react';
import {Context} from "../../main";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Job = () => {
  const[jobs ,setJobs] = useState([]);
  const {isAuthorised} =useContext(Context);
  const navigateTo = useNavigate();

  useEffect(()=>{
    try {
      axios.get("http://localhost:8080/api/v1/job/getall", {withCredentials: true}).then((res)=>{
        setJobs(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  },[]);
  if(!isAuthorised)
    {
      navigateTo("/login");
    }
  return (
    <>
        <section className='jobs page'>
          <div className='container'>
            <h1>ALL AVAILABLE JOBS</h1>
            <div className='banner'>
              {
                jobs.jobs && jobs.jobs.map((element)=>{
                  return(
                    <div className='card' key={element._id}>
                      <p>{element.title}</p>
                      <p>{element.category}</p>
                      <p>{element.country}</p>
                      <Link to={`/job/${element._id}`}>Job Details</Link>
                      </div>
                  );
                })
              }
            </div>
          </div>
        </section>
    </>
  );
};
