import React, { useState, useContext } from 'react';
import { Context } from "../../main";
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { FaPencilAlt, FaRegUser } from 'react-icons/fa';
import {FaPhoneFlip} from "react-icons/fa6"
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from 'react-icons/ri';

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorised, setIsAuthorised } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/user/register", { name, email, password, phone, role }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(data.message);
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
      setPassword("");
      setIsAuthorised(true);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  if (isAuthorised) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="authPage">
    <div className="container">
      <div className="header">
        <img src="/logo.png" alt="logo" />
        <h3>Create a new account</h3>
      </div>
      <form>
        <div className="inputTag">
          <label>Register As</label>
          <div>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="Employer">Employer</option>
              <option value="Job Seeker">Job Seeker</option>
            </select>
            <FaRegUser />
          </div>
        </div>
        <div className="inputTag">
          <label>Name</label>
          <div>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FaPencilAlt />
          </div>
        </div>
        <div className="inputTag">
          <label>Email Address</label>
          <div>
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdOutlineMailOutline />
          </div>
        </div>
        <div className="inputTag">
          <label>Phone Number</label>
          <div>
            <input
              type="number"
              placeholder="123-456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FaPhoneFlip />
          </div>
        </div>
        <div className="inputTag">
          <label>Password</label>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <RiLock2Fill />
          </div>
        </div>
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
        <Link to={"/login"}>Login Now</Link>
      </form>
    </div>
    <div className="banner">
      <img src="/register.png" alt="login" />
    </div>
  </section>
  );
};
