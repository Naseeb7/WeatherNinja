import React, { useContext, useEffect } from 'react'
import weatherContext from '../Contexts/weathercontext'

const CurrentWeather = () => {
    const context=useContext(weatherContext)
    const {weather_info,location,current,getWeather,getLocation}=context
  return (
     location && <div className='currentWeatherContainer'>
        <div className="locationDetails">
            <div className="details">{location.name},{location.region},{location.country}</div>
            <div className="date">Date : {location.localtime.split(" ")[0]}</div>
        </div>
        <div className="currentWeather">
            <img src={current.condition.icon} alt="CurrentCondition" />
            <div className="currentTemp">
                {current.temp_c}&#176;c<br/>
                {current.condition.text}<br/>
                Feels-like : {current.feelslike_c}&#176;c
                Humidity : {current.humidity}%
                UV-index : {current.uv}<i className="fa-regular fa-sun" style={{color: "#000000"}}></i>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather
