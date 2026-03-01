import React, { useEffect } from 'react'
import './Create.css';
import { useFetch } from '../../hooks/useFetch';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const[title, setTitle] = useState('');
  const[method, setMethod] = useState('');
  const[cookingTime, setCookingTime] = useState('');
  const[newIngredient, setNewIngredient] = useState('');
  const[ingredients, setIngredients] = useState([]);

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST');
  // Initialize navigate function
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({title, ingredients, method, cookingTime: cookingTime + ' minutes'});
  }

  const handleAdd = (e) => {
    e.preventDefault();

    if(newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient]);

    }else {
      alert('Please enter a valid ingredient that is not already in the list.');
    }
    setNewIngredient('');

  }

  useEffect(() => {
    if(data) {
      navigate('/'); // Navigate to home page after successful creation
    }}, [data, navigate])

  return (
    <div className="create">
      <h2>Create a new recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Title::</span>
          <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          />
        </label>

        <label>
          <span>Ingredients:</span>
          <div className="ingredients"> 
          <input 
          type="text"
          onChange={(e) => setNewIngredient(e.target.value)}
          value={newIngredient}
           />
          <button className='btn' onClick={handleAdd}>Add</button> 
          </div>
        </label>

        <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>Method:</label>
        <textarea 
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
        />
        <label>Cooking Time (minutes):</label>
        <input 
          type="number" 
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
        />        
      <button className='btn'>Submit</button>
      </form>

     {/* Optional: Display error if it exists */}
      {error && <p className="error">Error: {error}</p>}

      {/* Optional: Display loading indicator */}
      {data && <p>Recipe Created: {data.title}</p>}
    </div>
  )
}
