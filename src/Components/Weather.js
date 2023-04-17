import React, { useContext, useEffect } from 'react'
import weatherContext from '../Contexts/weathercontext'
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import "./Weather.css"

const Weather = () => {
    const context=useContext(weatherContext)
    const {getWeather,getLocation,setBackground,current}=context
    useEffect(()=>{
      getLocation()
      getWeather()
      // eslint-disable-next-line
    },[])
    useEffect(()=>{
      if(current){
      setBackground(current)
      }
      // eslint-disable-next-line
    },[current])
  return ( 
  <div className='weatherContainer'>
    <span id="locating"></span>
      <CurrentWeather/>
      <Forecast/>
      <span className='weatherapiIcon'>Powered by :<a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/></a></span>
      
    </div>
  )
}

export default Weather
