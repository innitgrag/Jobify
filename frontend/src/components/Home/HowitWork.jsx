import React from 'react'
import {FaUserPlus} from "react-icons/fa";
import {MdFindInPage} from "react-icons/md";
import {IoMdSend} from "react-icons/io"

export const HowitWork = ()=> {
  return (
    <>
    <div className="howitworks">
      <div className="container">
        <h3>How Jobify Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
            Creating an account with Jobify is quick and easy. 
            Simply sign up to unlock various features of Jobify ,
             and gain access to exclusive career resources tailored to your needs.
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job/Post a Job</p>
            <p>
            Job seekers can explore a vast database of opportunities tailored to their skills and preferences, 
            while employers can effortlessly post job openings to reach a qualified pool of candidates.
             Our platform ensures a seamless match between talent and job openings.
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Apply For Job/Recruit Suitable Candidates</p>
            <p>
            Job seekers can apply directly to listings that match their expertise and interests, 
            while employers can efficiently review applications and connect with suitable candidates. 
            Our tools simplify the hiring process, enabling employers to build a strong team efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
