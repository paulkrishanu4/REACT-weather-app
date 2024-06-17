import React, { useState } from 'react'
import "./Card.css"

const Card = ({humidity,text,image,temp,time,date}) => {
 
  return (
    <div className="card">
      {date==undefined?"":<h3>{date}</h3>}
      <h3>{time}</h3>
      <h3>Temperature:{" "+temp+"°C"}</h3>
      <h3>Humidity:{" "+humidity+"%"}</h3>
      <img src={image}/>
      <h3>{text}</h3>
    </div>
  )
}

export default Card