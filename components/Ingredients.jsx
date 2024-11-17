import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const popularSearches = ["Chicken", "Pasta", "Egg", "Kale", "Cheese", "Salmon", "Spinach", "Oats", "Quinoa", "Prawns"]

const Ingredients = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchIngredient, setSearchIngredient] = useState("");
  const [trendingSearch, setTrendingSearch] = useState("")
  const apiKey5 = process.env.REACT_APP_API_KEY5;

  const [randomRecipes, setRandomRecipes] = useState([])
    const apiKey4 = process.env.REACT_APP_API_KEY4
    
    useEffect(()=>{
        const fetchRandomRecipes = async () =>{
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=15&veryPopular=true&apiKey=${apiKey4}`)
                setRandomRecipes(response.data.recipes)
            } 
            catch (error) {
                console.log("error:",error)
            }
        }
        fetchRandomRecipes()
    },[apiKey4])

  const FetchRecipes = useCallback(async () => {
    try {
      const ingredient = searchIngredient || trendingSearch;
      if (!ingredient) return;

      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=100&apiKey=${apiKey5}`);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }, [searchIngredient, trendingSearch, apiKey5]);

  useEffect(() => {
    if (trendingSearch) {
        FetchRecipes();
    }
}, [trendingSearch]);

const handleSearch = () => {
    if (searchIngredient) {
        FetchRecipes();
    }
    setSearchIngredient("")
};

  return (
     <div className='pt-16 sm:pt-40 px-0 sm:px-12 bg-orange-50 min-h-screen flex flex-col items-center text-sm sm:text-md'>
      <div className='w-5/6 sm:w-1/3 relative items-center'>
        <input 
          onChange={(e) => setSearchIngredient(e.target.value)} 
          value={searchIngredient} 
          className='border-[0.5px] border-gray-700 w-full h-12 sm:h-16 p-2 outline-none rounded-full' 
          placeholder='Search by Ingredients' 
        />
        <button 
          onClick={handleSearch} 
          className='bg-red-600 text-gray-100 p-2 sm:p-3 border-gray-700 border-[0.5px] rounded-full absolute right-2 top-1.5 sm:top-2'
        >
          Search
        </button>
      </div>
        <h2 className='p-4 text-red-500 text-4xl' style={{ fontFamily: '"Cookie", sans-serif' }}>Trending Searches: </h2>
      <div className='flex flex-row gap-2 flex-wrap items-center justify-center'>
      {
        popularSearches.map((search,i) => {
            return  <button key={i} onClick={() =>{setTrendingSearch(search)}}
            className='bg-red-300 hover:bg-red-400 py-2 px-3 w-fit mx-2 text-white h-fit rounded-3xl'>{search}</button>
        })
      }
      </div>

      <div className='grid grid-cols-2  sm:grid-cols-3 w-screen px-4 sm:px-16 py-2 sm:py-8'>
        {recipes && recipes.length>0 ? 
        recipes.map((recipe, i) => (
          recipe.image && (
            <div key={i} className='mx-4 sm:mx-12 my-2 sm:my-8 aspect-[3/2] flex flex-col justify-start items-start gap-2 sm:gap-3'>
              <img className='aspect-[3/2] w-full' src={recipe.image} alt={recipe.title} />
              <h2 className='font-lexend text-xs sm:text-xl'>{recipe.title}</h2>
              <Link to={`/recipe/${recipe.id}`}>
                <button className='text-red-700 text-xs sm:text-sm group'>
                  Check out this recipe
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-400"></span>
                </button>
              </Link>
            </div>
          )
        )) :  
        randomRecipes.map((recipe) => (
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
          ))
       }
      </div>
    </div> 
  
  );
};

export default Ingredients;
