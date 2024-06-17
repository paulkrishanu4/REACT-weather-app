import React, { useState } from 'react'
import "./Weather.css"
import Today from './Today'
import TenDay from './TenDay'
const Weather = () => {
  const[mark1,setMark1] = useState(true)
  const[mark2,setMark2] = useState(false)
  return (
    <div>
    <div className="weather-category">
      <h2 onClick={()=>{setMark1(true);setMark2(false)}} className={mark1?"line":""}style={{cursor:"pointer"}}>TODAY</h2>
      <h2 onClick={()=>{setMark1(false);setMark2(true)}} className={mark2?"line":""} style={{cursor:"pointer"}}>10 DAY FORECAST</h2>
    </div>
    {mark1==true? <Today/>:<TenDay></TenDay>}
    </div>
  )
}

export default Weather