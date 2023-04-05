import React, { useContext, useEffect } from 'react'
import weatherContext from '../Contexts/weathercontext'
import "./CurrentWeather.css"

const CurrentWeather = () => {
    const context=useContext(weatherContext)
    const {location,current}=context
  return (
     location && <div className='currentWeatherContainer'>
        <div className="locationDetails">
        <i className="fa-solid fa-location-dot" style={{color: "#ffffff"}}></i>
            <span className="details">{location.name} , {location.region} , {location.country}</span>
            <span className="date">{location.localtime.split(" ")[0]}</span>
        </div>
        <h4>Last Updated on {new Date(current.last_updated).toLocaleString()}</h4>
        <div className="currentContainer">
        <div className="currentTemp">
            <img src={current.condition.icon} alt="CurrentCondition" className='weatherIcon'/>
            <h1>{current.temp_c}&#176;c</h1>
        </div>
        <div className="currentWeather">
                <h3>{current.condition.text}</h3>
                <div className="additionalDetails">
                <span>Feels-like : <br/>{current.feelslike_c}&#176;c</span>
                <span>Humidity : <br/>{current.humidity}%</span>
                <span>UV-index : <br/>{current.uv}<i className="fa-regular fa-sun" style={{color: "white"}}></i></span>
                </div>
        </div>
        </div>
    </div>
  )
}

export default CurrentWeather
