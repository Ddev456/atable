import React from 'react'
import { type Recipe } from '../pages/index'

type RecipeCardProps = {
  randomRecipe: Recipe | undefined
}

export const RecipeCard = ({randomRecipe}: RecipeCardProps) => {
    
  return (
    <div className="card w-96 bg-base-100">
              <figure><img src={randomRecipe?.strMealThumb} alt="thumbnail of recipe" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {randomRecipe?.strMeal}
                  <div className="badge badge-secondary">Nouveau</div>
                </h2>
                <p className='h-80 overflow-auto'>{randomRecipe?.strInstructions}</p>
                <div className="card-actions justify-end">
                <button
                          className="inline-block px-4 py-3
                          text-sm font-semibold text-center
                          text-white uppercase transition
                          duration-200 ease-in-out bg-[#67e8f9]
                          rounded-md cursor-pointer
                          hover:bg-[#0891b2] active:scale-90">
                          Télécharger
                        </button>
                  </div>
             </div>
           </div>
  )
}

