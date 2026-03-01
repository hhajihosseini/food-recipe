import React from 'react'
import './Home.css';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

export default function Home() {

  const {data: recipes, isPending, error} = useFetch('http://localhost:3000/recipes');  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}
