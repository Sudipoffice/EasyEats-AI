import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RandomRecipes = () => {
    const [recipes, setRecipes] = useState([])
    const apiKey2 = import.meta.env.VITE_API_KEY2
    
    useEffect(()=>{
        const fetchRandomRecipes = async () =>{
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=15&veryPopular=true&apiKey=${apiKey2}`)
                setRecipes(response.data.recipes)
            } 
            catch (error) {
                console.log("error:",error)
            }
        }
        fetchRandomRecipes()
    },[apiKey2])
  return (
    !recipes.length>0?
    <div className="pt-32 sm:pt-20 font-lexend bg-orange-50 min-h-screen z-10">
        <header className="flex justify-center items-center text-xl sm:text-5xl text-red-600 font-bold uppercase" style={{fontFamily: '"Cookie", sans-serif'}}>
          {" "}
          Top Trending Recipes{" "}
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 w-screen px-4 sm:px-16 py-2 sm:py-8 ">
          <button
            className="absolute p-2 rounded-3xl text-white bg-red-600 z-10 right-2 text-lg sm:text-2xl"
            style={{ fontFamily: '"Cookie", sans-serif' }}
          >
            Most Popular !
          </button>
          {recipes.map((recipe) => (
            recipe.image?
              <div key={recipe.id} className="mx-2 sm:mx-8 my-2 sm:my-8 group">
                <div className="aspect-3/4  relative group">
                  <img
                    className="aspect-3/4 object-cover"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <Link to={`/recipe/${recipe.id}`}>
                  <button className=" absolute text-sm sm:text-lg text-gray-900 py-1 w-full bottom-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300  hover:bg-red-500 hover:text-gray-100">
                    Recipe
                  </button>
                  </Link>
                </div>
                <h2 className="font-lexend px-2 sm:px-4 text-xs sm:text-xl uppercase flex justify-center item-center group-hover:text-red-600">{recipe.title}</h2>
              </div>
              : null
          ))}
        </div>
      </div> : <div className='text-xl sm:text-5xl min-h-20 sm:min-h-40 flex justify-center items-center text-red-500 z-10' style={{fontFamily: '"Cookie", sans-serif'}}>Loading Trending recipes...</div>
  )
}

export default RandomRecipes
