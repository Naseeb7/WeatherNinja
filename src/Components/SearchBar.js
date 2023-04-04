import React, { useContext } from 'react'
import weatherContext from '../Contexts/weathercontext'

const SearchBar = () => {
  const context=useContext(weatherContext)
  const {handleSearch,getWeather,getLocation}=context
  const handleCurrent=async ()=>{
    await getLocation()
     getWeather()
  }
  return (
    <div>
      <input type="text" placeholder="Search.." name="search"  id='search'/>
      <button id='searchbtn' className='btn' onClick={handleSearch}>Search</button>
      <button id="currentWeather" className='btn' onClick={handleCurrent}>Current Location</button>
    </div>
  )
}

export default SearchBar
