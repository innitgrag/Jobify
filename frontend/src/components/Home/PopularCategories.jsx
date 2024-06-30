import React from 'react';
import {FaReact} from "react-icons/fa"
import {MdOutlineDesignServices , MdOutlineWebhook , MdAccountBalance, MdOutlineAnimation} from "react-icons/md";
import {TbAppsFilled} from "react-icons/tb";
import {GiArtificialIntelligence} from "react-icons/gi";
import { IoGameController } from "react-icons/io5";


const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "0 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "0 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "0 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "0 Open Postions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "0 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "0 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "0 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "0 Open Positions",
      icon: <IoGameController />,
    },
  ];

  return (
    <div className='categories'>
      <h3>POPULAR CATEGORIES</h3>
      <div className='banner'>
        {
          categories.map(element=>{
            return(
              <div className='card' key={element.id}>
                <div className='icon'>{element.icon}</div>
                <div className='text'>
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
              </div>
      </div>
            );
          })}
    </div>
    </div>
  );
};

export default PopularCategories;

