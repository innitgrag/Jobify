// PostJob.jsx
import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

export const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorised, user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorised || (user && user.role !== "Employer")) {
      navigate("/");
    }
  }, [isAuthorised, user, navigate]);

  const handleJobPost = async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      description,
      category,
      country,
      state,
      location,
      description,
    };

    if (salaryType === "Fixed Salary") {
      jobData.fixedSalary = fixedSalary;
    } else if (salaryType === "Ranged Salary") {
      jobData.salaryFrom = salaryFrom;
      jobData.salaryTo = salaryTo;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/job/post", jobData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="job_post page">
      <div className="container">
        <h3>POST NEW JOB</h3>
        <form onSubmit={handleJobPost}>
          <div className="wrapper">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job Title"
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="Graphics & Design">Graphics & Design</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Frontend Web Development">Frontend Web Development</option>
              <option value="MERN Stack Development">MERN Stack Development</option>
              <option value="Account & Finance">Account & Finance</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Video Animation">Video Animation</option>
              <option value="MEAN Stack Development">MEAN Stack Development</option>
              <option value="MEVN Stack Development">MEVN Stack Development</option>
              <option value="Data Entry Operator">Data Entry Operator</option>
            </select>
          </div>
          <div className="wrapper">
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <div className="salary_wrapper">
            <select value={salaryType} onChange={(e) => setSalaryType(e.target.value)}>
              <option value="default">Select Salary Type</option>
              <option value="Fixed Salary">Fixed Salary</option>
              <option value="Ranged Salary">Ranged Salary</option>
            </select>
            <div>
              {salaryType === "default" ? (
                <p>Please provide Salary Type *</p>
              ) : salaryType === "Fixed Salary" ? (
                <input
                  type="number"
                  placeholder="Enter Fixed Salary"
                  value={fixedSalary}
                  onChange={(e) => setFixedSalary(e.target.value)}
                />
              ) : (
                <div className="ranged_salary">
                  <input
                    type="number"
                    placeholder="Salary from"
                    value={salaryFrom}
                    onChange={(e) => setSalaryFrom(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Salary to"
                    value={salaryTo}
                    onChange={(e) => setSalaryTo(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
            <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <button type="submit">Create Job</button>
         
        </form>
      </div>
    </div>
  );
};
