import React from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {

const[terms, setTerms] = React.useState('')
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
  navigate(`/search?q=${terms}`)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search: </label>
        <input
          id='search'
          type='text' 
          onChange={(e) =>setTerms(e.target.value)}
          value={terms}
        />
      </form>
    </div>
  )
}
