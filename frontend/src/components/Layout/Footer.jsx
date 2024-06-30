// Footer.jsx
import React, { useContext } from 'react';
import {Context} from "../../main";
import {Link} from "react-router-dom";
import {FaFacebookF,FaLinkedin} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

export const Footer = () => {
  const {isAuthorised} = useContext(Context);
  return (
    <footer className={isAuthorised? "footerShow": "footerHide"}>
     <div>&copy; All RIghts Reserved </div>
     <div>
      <Link to={'https://www.facebook.com/groups/836397511723902/'} target="_blank"><FaFacebookF/></Link>
      <Link to={'https://www.linkedin.com/in/akshiti-garg-0bb452278/'} target="_blank"><FaLinkedin/></Link>
      <Link to={'/'} target="_blank"><RiInstagramFill/></Link>
  
     </div>
    </footer>
  );
};
