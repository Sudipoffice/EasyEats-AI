import React from 'react'
import footerLogo from "../src/assets/images/footerLogo.png"
import {  Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col bg-red-400 h-fit  text-white'>
    <div className='flex flex-row justify-center items-start py-4 sm:py-20 p-4 sm:p-20 text-white  '>
    <div className='w-1/4 p-0 sm:p-4 '>
        <img className='w-24 sm:w-40 ' src={footerLogo} alt="" />
    </div>
    <div className='w-1/3 sm:w-2/5 flex flex-col items-center text-2xl sm:text-3xl gap-2 sm:gap-3 ' style={{fontFamily: '"Cookie", sans-serif'}}>
    <h2 className='text-2xl sm:text-5xl '>Navigate</h2>
    <span className=' w-3/4 h-[0.2px]  bg-white my-0 sm:my-8'></span>
      <Link to="/" className='hover:text-gray-300'>Home</Link>
      <Link to="/Recipes" className='hover:text-gray-300'>Recipes</Link>
      <Link to="/Ingredients" className='hover:text-gray-300'>Ingredients</Link>
      <Link to="/AIChef" className='hover:text-gray-300'>AIChef</Link>
    </div>
    <div className='w-1/3 sm:w-2/5 flex flex-col items-center gap-2 sm:gap-3 ' style={{fontFamily: '"Cookie", sans-serif'}}>
        <h1 className='text-2xl sm:text-5xl'>Connect</h1>
        <span className=' w-3/4 h-[0.2px]  bg-white my-0 sm:my-8'></span>
        <p className='text-xl sm:text-3xl text-wrap'>+91 7003071143</p>
        <p className='text-xl sm:text-3xl  w-fit'>mandalsudipoffice<br/>@gmail.com</p>
        <div className='flex justify-center items-center my-0 sm:my-8'>
        <a
            className="bi bi-linkedin transition-transform duration-300 hover:scale-110 mx-1 sm:mx-4 text-xl sm:text-2xl z-10"
            href="https://www.linkedin.com/in/sudipmandal/"
            target="_blank"
          ></a>
          <a
            className="bi bi-github transition-transform duration-300 hover:scale-110 mx-1 sm:mx-4 text-xl sm:text-2xl z-10"
            href="https://github.com/Sudipoffice"
            target="_blank"
          ></a>
          <a
            className="bi bi-envelope-fill transition-transform duration-300 hover:scale-110 mx-1 sm:mx-4 text-xl sm:text-2xl z-10"
            href="mailto:mandalsudipoffice@gmail.com"
            target="_blank"
          ></a>
          <a
            className="bi bi-whatsapp transition-transform duration-300 hover:scale-110 mx-1 sm:mx-4 text-xl sm:text-2xl z-10"
            href="https://api.whatsapp.com/send?phone=7003071143"
            target="_blank"
          ></a>
        </div>
    </div>
    </div>
    <div className='py-4  sm:py-12 flex items-center justify-center'>
        <h1 className='text-lg sm:text-2xl' style={{fontFamily: '"Cookie", sans-serif'}}>Designed & Developed by <b>Sudip Mandal</b></h1>
    </div>
    </div>
  )
}

export default Footer
