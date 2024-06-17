import React, { useContext,useEffect, useState } from 'react'
import { GlobalState } from '../Context/GlobalState'
import Card from './Card'
import "./Today.css"

const TenDay = () => {
  const[hour2,setHour2] = useState([])
  const[hour3,setHour3] = useState([])
  const[hour4,setHour4] = useState([])
  const array=[...hour2,...hour3,...hour4];

  const{name} = useContext(GlobalState)

  useEffect(()=>{
    let url=`http://api.weatherapi.com/v1/forecast.json?key=364cd2dcdf4849b8abc63049242703&q=${name}&days=10&aqi=no&alerts=no`;
    fetch(url).then(response => response.json()).then(data => setHour2(data.forecast.forecastday[0].hour));

  },[name])

  useEffect(()=>{
    let url=`http://api.weatherapi.com/v1/forecast.json?key=364cd2dcdf4849b8abc63049242703&q=${name}&days=10&aqi=no&alerts=no`;
    fetch(url).then(response => response.json()).then(data => setHour3(data.forecast.forecastday[1].hour));

  },[name])

  useEffect(()=>{
    let url=`http://api.weatherapi.com/v1/forecast.json?key=364cd2dcdf4849b8abc63049242703&q=${name}&days=10&aqi=no&alerts=no`;
    fetch(url).then(response => response.json()).then(data => setHour4(data.forecast.forecastday[2].hour));

  },[name])

  return (
   <div className="parent container">
    {array.map((cur,index)=>{
      return <Card key={index} humidity={cur.humidity} text={cur.condition.text} image={cur.condition.icon} temp={cur.temp_c} time={cur.time.slice(11,13)>12?cur.time.slice(11)+" PM":cur.time.slice(11)+" AM"} date={cur.time.slice(0,11).split("-").reverse().join("-")}/>
    })}
    </div>
  )
}

export default TenDay