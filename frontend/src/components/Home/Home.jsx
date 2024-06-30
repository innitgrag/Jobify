// Home.jsx
import React, { useContext } from 'react';
import {Context} from "../../main";
import { Navigate } from 'react-router-dom';
import {HeroSection} from "./HeroSection";
import {HowitWork} from "./HowitWork";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies"





export const Home = () => {
  const {isAuthorised} = useContext(Context);
  if(!isAuthorised)
    {
      return <Navigate to={"/login"}/>
    }

  return (
    <section className='homePage page'>
<HeroSection/>
<HowitWork/>
<PopularCategories/>
<PopularCompanies/>
    </section>
  );
};
