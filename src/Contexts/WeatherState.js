import React, { useState } from 'react'
import weatherContext from './weathercontext'

const WeatherState = (props) => {
    const [location, setLocation] = useState(null)
    const [current, setCurrent] = useState(null)
    const [forecast, setForecast] = useState(null)
    function error() {
        document.getElementById("locating").innerHTML = "Unable to retrieve your location";
      }
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather,error)
        } else {
            document.getElementById("locating").innerHTML="Geolocation is not supported by this browser."
        }
    }
    const getWeather = async (position) => {
        try {
            document.getElementById("locating").innerHTML=""
        const url = `https://api.weatherapi.com/v1/forecast.json?key=12e425f865dd4179ad7165926230204&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=no&alerts=no`
        const data = await fetch(url);
        const parsedData = await data.json()
        setLocation(parsedData.location);
        setCurrent(parsedData.current)
        setForecast(parsedData.forecast)
            
        } catch (error) {
            document.getElementById("locating").innerHTML=error
        }
    }
    const handleSearch=async (e)=>{
        e.preventDefault()
        let value=document.getElementById("search").value
        const url = `https://api.weatherapi.com/v1/forecast.json?key=12e425f865dd4179ad7165926230204&q=${value}&days=3&aqi=no&alerts=no`
        const data = await fetch(url);
        const parsedData = await data.json()
        setLocation(parsedData.location);
        setCurrent(parsedData.current)
        setForecast(parsedData.forecast)
    }
    const setBackground=(current)=>{
        if(current.condition.text==="Sunny"){
        document.body.style.backgroundImage=`url("https://wallpapers.com/images/hd/sunny-weather-with-cherry-blossom-fr2tn0f21evp0viw.jpg")`
        }
        else if(current.condition.text==="Mist"){
            document.body.style.backgroundImage='url("https://e0.pxfuel.com/wallpapers/978/224/desktop-wallpaper-foggy-weather-foggy.jpg")'
        }
        else if(current.condition.text==="Clear"){
            document.body.style.backgroundImage='url("https://i.gifer.com/Lx0q.gif")'
        }
        else if(current.condition.text==="Cloudy"){
            document.body.style.backgroundImage='url("https://i.gifer.com/LSzq.gif")'
        }
        else if(current.condition.text==="Heavy rain"){
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/9105781/pexels-photo-9105781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }
        else if(current.condition.text==="Light rain"){
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }
        else if(current.condition.text==="Partly cloudy"){
            document.body.style.backgroundImage='url("https://english.wafa.ps/image/NewsThumbImg/Default/d5a2271e-bc63-444a-9125-e94e6a6cbf04.jpeg")'
        }
        else{
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }
    }
    return (
        <weatherContext.Provider value={{ location, current, forecast, getWeather,getLocation,handleSearch,setBackground }}>
            {props.children}
        </weatherContext.Provider>
    )
}

export default WeatherState
