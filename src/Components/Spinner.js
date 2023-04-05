import React from 'react'
import loading from "./loading.gif"

const Spinner=(props)=>{
    return (
      props.loading && <div>
        <img src={loading} alt="loading" style={{height : "2rem"}}/>
      </div>
    )
}

export default Spinner
