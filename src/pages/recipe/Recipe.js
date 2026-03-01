import React from 'react'
import './Recipe.css';
import { useParams } from 'react-router-dom';
import {useFetch}   from '../../hooks/useFetch';

export default function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' +id;
  const {data: recipe, isPending, error} = useFetch(url);
  return (
    <div>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
      {recipe && (
        <div className="recipe">
          <h2 className='page-title'>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map(ing => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p>Cooking time: {recipe.cookingTime} minutes</p>
          <br />
          <p>{recipe.method}</p>

        </div>
      )}
    </div>
  )
}
