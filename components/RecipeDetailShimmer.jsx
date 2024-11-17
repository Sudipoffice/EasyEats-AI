import React from 'react'

const RecipeDetailShimmer = () => {
  return (
    <div className=" pt-20 bg-orange-50 min-h-screen">
     
      {/* Main Content */}
      <div className=" flex flex-col sm:flex-row justify-center p-8 w-screen">
      {/* first column */}
        <div className="flex flex-col justify-center items-center py-8 sm:py-0 w-full sm:w-3/5">
          <span
            className="aspect-3/2 w-full sm:w-2/3 object-cover bg-red-200 "
          ></span>
          <h1 className="my-6 px-4 sm:px-2 w-full sm:w-1/4 h-6 sm:h-8 rounded-3xl font-extrabold font-lexend bg-red-200">
          </h1>
          
            <h1 className=" bg-red-200 my-4 px-6 w-4/5 sm:w-2/5  h-6 sm:h-8  rounded-3xl"></h1>
          
          {Array.from({length: 5}).map((_,i) => {
           return <span key={i} className='bg-red-200 m-2 rounded-3xl w-4/5 sm:w-2/4 h-6 sm:h-8'>
            </span>
          })}
        </div>
        {/* second column */}
        <div className="h-fit hidden sm:flex flex-col justify-center items-center  w-2/5">
        
            <p className='bg-red-200 w-2/5 h-8 rounded-3xl m-2'> </p>
            <p className='bg-red-200 w-2/5 h-8 rounded-3xl m-2'> </p>
         
          {/* diet type */}
          <div className="m-8 w-3/4 gap-2 grid grid-cols-2 justify-items-center ">
            {Array.from({length:4}).map((_,i) => {
               return <p key={i} className='w-3/5 bg-red-200 h-10 rounded-3xl'></p>
            })}
          </div>
          <div className=" text-gray-800 w-4/5 rounded-xl px-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl m-4 bg-red-200 h-8 w-3/4 rounded-3xl"></h1>
              {Array.from({length: 5}).map((_,i) => {
           return <span key={i} className='bg-red-200 my-6 rounded-3xl w-full h-8'>
            </span>
          })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetailShimmer
