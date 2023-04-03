import React, { useContext, useEffect } from 'react'
import weatherContext from '../Contexts/weathercontext'
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const Weather = () => {
    const context=useContext(weatherContext)
    const {weather_info,location,current,getWeather,getLocation}=context
    useEffect(()=>{
        getWeather()
    },[])
  return ( <div>
      <CurrentWeather/>
      <Forecast/>
    </div>
  )
}

export default Weather
