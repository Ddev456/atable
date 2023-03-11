import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { type Recipe } from '../pages/index'

type RecipeCardProps = {
  recipes: Recipe[]
}


export const RecipeCard = ({recipes}: RecipeCardProps) => {
  const randomIndex = Math.floor(Math.random() * 24) + 1
  const [randomRecipe, setRandomRecipe] = useState(recipes[randomIndex])
  const handleClick = () => {
    const randomIndexClick = Math.floor(Math.random() * 24) + 1
    setRandomRecipe(recipes[randomIndexClick])
  }

  return (
    <div className="card w-96 bg-base-100">
              { randomRecipe && <figure><Image width={384}
        height={384} src={randomRecipe?.strMealThumb} alt="thumbnail of recipe" /></figure> }
              <div className="card-body">
                <h2 className="card-title">
                  {randomRecipe?.strMeal}
                  <div className="badge badge-secondary">Nouveau</div>
                </h2>
                <p className='h-60 overflow-auto'>{randomRecipe?.strInstructions}</p>
                <div className="card-actions justify-end">
                <button
                      onClick={handleClick}
                      className="mt-3 inline-block px-4 py-3
                      text-sm font-semibold text-center
                      text-white uppercase transition
                      duration-200 ease-in-out bg-[#67e8f9]
                      rounded-md cursor-pointer
                      hover:bg-[#0891b2] active:scale-90">
                      Une autre ?
                </button>
                  </div>
             </div>
           </div>
  )
}

