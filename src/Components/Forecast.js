import React, { useContext,useEffect } from 'react'
import weatherContext from '../Contexts/weathercontext'
import "./Forecast.css"

const Forecast = () => {
    const context=useContext(weatherContext)
    const {weather_info,getWeather,getLocation,forecast}=context
    const localDate=(date)=>{
        let d= new Date(date)
        return d.toDateString()
    }
  return (
    forecast && <div>
      {forecast.forecastday.map((element)=>{
        return <div key={element.date}><div className="cardContainer" style={{backgroundColor:"blue",margin:"5px"}}>
            {localDate(element.date)}
            <img src={element.day.condition.icon} alt={element.day.condition.text} />
            Max : {element.day.maxtemp_c}&#176;c
            Min : {element.day.mintemp_c}&#176;c
            {element.day.condition.text}
            Sunrise : {element.astro.sunrise}
            Sunset : {element.astro.sunset}
            <button className="btn" id="showForecast" onClick={()=>{
                let card=document.getElementById(element.date)
                card.classList.toggle("hourCard")
            }}>Show Forecast</button>
            </div>
                <div className="hourCardhidden" id={element.date}>
                    {element.hour.map((ele)=>{
                        return <div className="hours" key={ele.time}>
                            {ele.time.slice(-5)}, 
                            {ele.temp_c}&#176;c,
                            <img src={ele.condition.icon} alt={ele.condition.text} />
                            Feelslike : {ele.feelslike_c}&#176;c,
                            {ele.condition.text}
                        </div>
                    })}
                </div>
                </div>
      })}
    </div>
  )
}

export default Forecast
