import React, { useRef, useState } from 'react'
import Spline from '@splinetool/react-spline';
import RandomRecipes from "./RandomRecipes"



const Home = () => {
 

  return (
    <div className='flex flex-col min-h-screen pt-8 sm:pt-12 bg-orange-50'>
  <div className="relative flex flex-col md:flex-row w-screen h-fit overflow-hidden ">
  
    <div className='relative w-4/5 md:w-1/3 z-20 pl-2 sm:pl-20 '>
      <h1 className='text-red-400 pt-8 sm:pt-24 font-bold  text-2xl sm:text-5xl md:text-8xl font-lexend select-none'>
        Make delicious <b>FOOD</b> right at the comfort of your <b>HOME</b>
        <i className="bi bi-house-heart"></i>
      </h1>
    </div>
    
    
    <div className='aspect-2/3 md:aspect-auto  w-screen h-fit sm:h-screen relative md:absolute flex justify-start sm:justify-end  inset-0 z-10 translate-x-0 sm:translate-x-4 md:translate-x-40 overflow-hidden '>
      <Spline 
        scene="https://prod.spline.design/qJsPyuO-hFhGuLi2/scene.splinecode" 
        style={{ width: "100%", height: "100%" }}
      />
    </div>
    
    <h1 className="absolute bottom-96 sm:bottom-80 -right-52 text-orange-50 text-[12em] font-extrabold font-outline-2 uppercase font-lexend rotate-90 z-0 select-none">
      Recipes
    </h1>
  </div>
  <RandomRecipes/>
</div>

  );
};

export default Home;
