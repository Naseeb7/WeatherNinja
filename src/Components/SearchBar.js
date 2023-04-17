import React, { useContext } from 'react'
import weatherContext from '../Contexts/weathercontext'
import "./SearchBar.css"
import Spinner from './Spinner'

const SearchBar = () => {
  const context=useContext(weatherContext)
  const {handleSearch,getWeather,getLocation,loading}=context
  const handleCurrent=async ()=>{
    await getLocation()
     getWeather()
  }
  return (
    <>
    <div className='searchContainer'>
      <input type="text" placeholder="London,Delhi,Moscow...." name="search"  id='search'/>
      <div className="buttons">
      <button id='searchbtn' className='btn' onClick={handleSearch}>Search</button>
      <button id="currentWeather" className='btn' onClick={handleCurrent}>Current</button>
      </div>
      <Spinner loading={loading}/>
    </div>
    </>
  )
}

export default SearchBar
