import React, { useContext,useEffect, useState } from 'react'
import { GlobalState } from '../Context/GlobalState'
import Card from './Card'
import "./Today.css"

const Today = () => {
  const[hour,setHour] = useState([])
 
  const{name} = useContext(GlobalState)
  useEffect(()=>{
    let url=`https://api.weatherapi.com/v1/forecast.json?key=364cd2dcdf4849b8abc63049242703&q=${name}&days=1&aqi=no&alerts=no`;
    fetch(url).then(response => response.json()).then(data => setHour(data.forecast.forecastday[0].hour));

  },[name])

  return (<>
    
   <div className="parent container">
    {hour.map((cur,index)=>{
      
      return <Card key={index} humidity={cur.humidity} text={cur.condition.text} image={cur.condition.icon} temp={cur.temp_c} time={cur.time.slice(11,13)>=12?cur.time.slice(11)+" PM":cur.time.slice(11)+" AM"}/>
      
    })}
    </div>
    </>
  )
}

export default Today
