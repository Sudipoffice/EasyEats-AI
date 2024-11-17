import React, { useRef, useState } from 'react'
import Spline from '@splinetool/react-spline';
import RandomRecipes from "./RandomRecipes"



const Home = () => {
 

  return (
    <div className='flex flex-col min-h-screen bg-orange-50 '>
    <div className=" flex flex-col sm:flex-row w-screen h-fit ">

    <div className='w-4/5 sm:w-1/3 z-10 pl-4 sm:pl-20 '>
          <h1 className='text-red-400 pt-24 font-bold text-5xl sm:text-8xl font-lexend '>Make delicious <b>FOOD</b> right at the comfort of your <b>HOME</b><i className="bi bi-house-heart"></i></h1>
    </div>
            
    <div className='hidden sm:block w-3/4 h-screen z-10'>
    <Spline 
         scene="https://prod.spline.design/33fv7zZb6ixoE5Tq/scene.splinecode" style={{ width: "100%", height: "100%" }}
      />
    </div>
    <div className='block sm:hidden h-fit w-screen  z-10'>
    <Spline
        scene="https://prod.spline.design/WHq4zr09ZjBKj8EZ/scene.splinecode" style={{ width: "100%", height: "100%" }}
      />
    </div>
        


        <h1 className=" absolute bottom-80 -right-52  text-orange-50 text-[12em]  font-extrabold font-outline-2  uppercase font-lexend rotate-90 z-0">
          Recipes
        </h1> 

    </div>
    <RandomRecipes/>

    </div>
  );
};

export default Home;
