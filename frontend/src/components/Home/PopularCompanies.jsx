import React from "react";
import { FaMicrosoft, FaApple, FaGoogle } from "react-icons/fa";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      openPositions: 0,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      openPositions: 0,
      icon: <FaGoogle />,
    },
    {
      id: 3,
      title: "Apple",
      openPositions: 0,
      icon: <FaApple />,
    },
  ];
  return (
    <>
      <div className="companies">
        <div className="container">
          <h3>TOP COMPANIES</h3>
          <div className="banner">
            {companies.map((element) => {
              return (
                <div className="card" key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Positions: {element.openPositions}</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCompanies;
