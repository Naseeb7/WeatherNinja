import React, { useContext } from 'react'
import weatherContext from '../Contexts/weathercontext'
import "./Forecast.css"

const Forecast = () => {
  const context = useContext(weatherContext)
  const { forecast } = context
  const localDate = (date) => {
    let d = new Date(date)
    return d.toDateString()
  }
  return (
    forecast && <div className='forecastContainer'>
      {forecast.forecastday.map((element, i) => {
        return <div key={element.date} id={element.date_epoch} className="daycardContainer">
          <h4><span>{localDate(element.date)}</span></h4>
          <img src={element.day.condition.icon} alt={element.day.condition.text}/>
          <span><b>{element.day.condition.text}</b></span>
          <span style={{fontSize:"large"}}>Max : {element.day.maxtemp_c}&#176;c</span>
          <span>Min : {element.day.mintemp_c}&#176;c</span>
          <span>Sunrise : {element.astro.sunrise}</span>
          <span>Sunset : {element.astro.sunset}</span>
          <button className="btn" id="showForecast" onClick={() => {
            for (let j = 0; j < forecast.forecastday.length; j++) {
              if (element.date === forecast.forecastday[j].date) {
                let card = document.getElementById(element.date)
                card.classList.toggle("hourCard")
                let arrow=document.getElementById(element.date+"arrow")
                if(arrow.classList.contains("hide")){
                  arrow.classList.toggle("show")
                }
                else{
                  arrow.classList.toggle("hide")
                }
              }
              else {
                let card = document.getElementById(forecast.forecastday[j].date)
                if (card.classList.contains("hourCard")) {
                  card.classList.remove("hourCard")
                  card.classList.add("hourCardhidden")
                  let arrow=document.getElementById(forecast.forecastday[j].date+"arrow")
                  arrow.classList.toggle("show")
                }

              }
            }
          }}>Show Forecast</button>
      <span className='hide' id={element.date+'arrow'}><i className="fa-solid fa-angle-down"></i></span>
        </div>
      })}
      {forecast.forecastday.map((element) => {
        return <div className="hourCardhidden" id={element.date} key={element.date_epoch}>
          {element.hour.map((ele) => {
            return <div className="hours" key={ele.time_epoch}>
              <h4><span>{ele.time.slice(-5)}</span></h4>
              <b><span>{ele.temp_c}&#176;c</span></b>
              <img src={ele.condition.icon} alt={ele.condition.text} />
              <span style={{fontWeight:"bold"}}>{ele.condition.text}</span>
              <span>Feelslike:  {ele.feelslike_c}&#176;c</span>
            </div>
          })}
        </div>
      })}
    </div>
  )
}

export default Forecast
