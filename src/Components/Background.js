import React, { useContext, useEffect } from 'react'
import weatherContext from '../Contexts/weathercontext'
import "./Background.css"

const Background = () => {
    // const context=useContext(weatherContext)
    // const {current,setBackground}=context
    // useEffect(()=>{
    //   if(current){
    //   setBackground(current)
    //   }
    // },[current])
  return (
    <div>
    {/* // current && <div className='background' id='background'> */}
      {/* {current.condition.text==="Sunny" && <img src='https://i.pinimg.com/originals/75/16/ea/7516ea5454d6ebb256d2ecb34b66a95c.gif' alt='Sunny'></img>}
      {current.condition.text==="Clear" && <img src='https://media.tenor.com/reA9KS4hEqsAAAAd/dandelion-nature.gif' alt='Clear'></img>}
      {current.condition.text==="Cloudy" && <img src='https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif' alt='Cloudy'></img>}
      {current.condition.text==="Partly cloudy" && <img src='https://i.gifer.com/origin/2f/2fffe86f843116eb6b5d5d6491a7ae1e.gif' alt='Partly Cloudy'></img>}
      {current.condition.text==="Heavy rain" && <img src='https://media.tenor.com/8cuueGbi6N0AAAAC/raining-rainy-weather.gif' alt='Heavy rain'></img>}
      {current.condition.text==="Light rain" && <img src='https://i.pinimg.com/originals/a7/cc/7f/a7cc7f559a427e7e36f24957d99b39e2.gif' alt='Light rain'></img>}
      {current.condition.text==="Mist" && <img src='https://i.pinimg.com/originals/2e/96/49/2e9649e51c8778ed5765190004d32504.gif' alt='Mist'></img>} */}
    </div>
  )
}

export default Background
