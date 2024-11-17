import React from 'react'

const RecipesShimmer = () => {
  return (
    <div className='pt-16 sm:pt-24  min-h-screen bg-orange-50' >
    <h1 className='font-lexend text-xl sm:text-3xl uppercase flex justify-center font-bold text-red-600' style={{ fontFamily: '"Cookie", sans-serif' }}> Explore Recipes...</h1>
      <div className='py-4 sm:py-8 px-2 sm:px-20 flex flex-row justify-evenly items-center w-screen'>
      {/* Search&SortBar */}
      <div className='w-1/2 '>
      <input className=' border-[0.5px] border-gray-700 w-4/6   p-1 sm:p-2 outline-none text-xs sm:text-lg ' placeholder='Search Recipes'></input> 
      <button className='text-gray-100 bg-red-600 p-1.5 sm:p-2 text-sm sm:text-lg  border-[0.5px] border-red-600'>Search</button>
      </div>
      <div className='w-1/3 sm:w-1/2 justify-end flex'>
      <select name="cuisines" id="cuisines" className='outline-none  w-3/4  sm:w-fit border-[1px] border-red-600 p-1 sm:p-[9px] '>
      <option value="select" disabled>Select Cuisines</option>
        <option value="All">All</option>
        <option value="Indian">Indian</option>
        <option value="Japanese">Japanese</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">Chinese</option>
        <option value="American">American</option>
        <option value="European">European</option>
        <option value="Korean">Korean</option>
      </select>
      </div>
      </div>
    
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-start px-1 sm:px-8 py-2 sm:py-8'>
            
      {
        Array.from({length:12}).map((_,i) => {
            return <div className='flex flex-col w-full  items-center my-1 sm:my-8'> 
            <span className='bg-orange-100 w-5/6 my-2  aspect-[3/2]'></span>
            <div className='flex flex-col items-start w-3/4'>

            <h2 className='bg-orange-100 w-3/4 h-4 sm:h-8 my-1 sm:my-2'></h2>
            <p className='bg-orange-100 w-2/5 h-3 sm:h-6 my-1 sm:my-2'></p>
            <span className='grid grid-cols-2 gap-2 justify-items-start w-3/5 sm:w-2/5 my-2'>
                {Array.from({length:2}).map((_,i) => {
                    return <div className='bg-orange-100 w-full h-4 sm:h-8 rounded-3xl'></div>
                })}
            </span>
            </div>
            </div>
            
        })
      }
      </div>
      
      
    </div>
  )
}

export default RecipesShimmer
