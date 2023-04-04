import React, { useContext } from 'react'
import weatherContext from '../Contexts/weathercontext'
import "./SearchBar.css"

const SearchBar = () => {
  const context=useContext(weatherContext)
  const {handleSearch,getWeather,getLocation}=context
  const handleCurrent=async ()=>{
    await getLocation()
     getWeather()
  }
  return (
    <div className='searchContainer'>
      <input type="text" placeholder="London,Delhi,Moscow...." name="search"  id='search'/>
      <div className="buttons">
      <button id='searchbtn' className='btn' onClick={handleSearch}>Search Location</button>
      <button id="currentWeather" className='btn' onClick={handleCurrent}>Current Location</button>
      </div>
    </div>
  )
}

export default SearchBar
