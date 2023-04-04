import React, { useContext, useEffect } from 'react'
import weatherContext from '../Contexts/weathercontext'
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import "./Weather.css"

const Weather = () => {
    // const context=useContext(weatherContext)
    // const {getWeather,getLocation,setBackground}=context
    // useEffect(()=>{
    //   getLocation()
    //   getWeather()
    // if(current){
    //   setBackground(current)
    //   }
    // },[current])
    const context=useContext(weatherContext)
    const {current,setBackground}=context
    useEffect(()=>{
      if(current){
      setBackground(current)
      }
    },[current])
  return ( 
  <div className='weatherContainer'>
    <span id="locating"></span>
      <CurrentWeather/>
      <Forecast/>
    </div>
  )
}

export default Weather
