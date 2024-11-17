import React from 'react'
import { NavLink} from 'react-router-dom'
import navlogo from "../src/assets/images/navlogo.png"

const Navbar = () => {
    
  return (
  
    <div className='w-screen h-16 sm:h-24 px-4 sm:px-0  fixed  bg-[#ffffff65] sm:bg-orange-50 flex flex-row  justify-end sm:justify-center items-center  z-20 text-red-600'>
    <img className='w-12 sm:w-28 h-10 sm:h-24 absolute left-2 sm:left-12' src={navlogo} alt=""/>
    <nav className='flex flex-row justify-end sm:justify-center uppercase gap-2 text-xs sm:text-lg'>
       <NavLink className={({isActive}) =>` font-lexend ${isActive ? ' font-bold' : ''} mx-1 sm:mx-2 md:mx-6`}
 to="/">HOME</NavLink>
       <NavLink className={({isActive}) =>`font-lexend ${isActive ? ' font-bold' : ''} mx-1 sm:mx-2 md:mx-6`} to="/Recipes">Recipes</NavLink>
       <NavLink className={({isActive}) =>` font-lexend ${isActive ? ' font-bold' : ''} mx-1 sm:mx-2 md:mx-6`} to="/Ingredients">Ingredients</NavLink>
       <NavLink className={({isActive}) =>`font-lexend ${isActive ? ' font-bold' : ''} mx-1 sm:mx-2 md:mx-6`} to="/AIChef">AI-CHEF</NavLink>
    </nav>
    </div>

    
   
  )
}

export default Navbar
