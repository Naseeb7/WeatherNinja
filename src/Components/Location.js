import React, { useEffect, useState } from 'react'

const Location = () => {
    let x = document.getElementById("x")
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    // let load = false
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                    setLat(position.coords.latitude);
                    setLong(position.coords.longitude);
            });
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    let date=document.getElementById("date")
    const d=new Date()
    let day=d.toISOString().split("T")[0]
    return (
        <div>
            <button onClick={getLocation()}>Location</button>
            <span id="x"></span>
            <span> Latitude={lat} </span>
            <span>Longitude={long}</span><br/>
            <span id="date">{day}</span>
        </div>
    )
}

export default Location
