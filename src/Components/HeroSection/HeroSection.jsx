import React, { useContext,useEffect, useState } from 'react'
import "./HeroSection.css"
import { GlobalState } from '../Context/GlobalState'
import { FaHome } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const HeroSection = () => {
  const[data,setData] = useState([])
  const[time,setTime] = useState([])
  const[image,setImage] = useState([])
  const{name} = useContext(GlobalState)

  useEffect(()=>{
    let url= `https://api.weatherapi.com/v1/current.json?key=364cd2dcdf4849b8abc63049242703&q=${name}`;
    fetch(url).then(response => response.json()).then(data => setData(data.current));
  },[name])
  useEffect(()=>{
    let url= `https://api.weatherapi.com/v1/current.json?key=364cd2dcdf4849b8abc63049242703&q=${name}`;
    
    fetch(url).then(response1 => response1.json()).then(dat1 => setTime(dat1.location));
    
  },[name])
  useEffect(()=>{
    let url= `https://api.weatherapi.com/v1/current.json?key=364cd2dcdf4849b8abc63049242703&q=${name}`;
    fetch(url).then(response2 => response2.json()).then(dat2 => setImage(dat2.current.condition));
  },[name])
  return (
   
    <div className="hero-sec container">
      <div className="box">
      <h2 className="title">Current Weather</h2>
      <div className="time">
      <h4><FaHome/>{" "+time.name}{","+time.region}</h4>
      <h4><IoTime/>{" "+time.localtime}</h4>
      </div>
      <div className="weather">
        <img src={image.icon}/>
        <div className="info">
          <a className="temp">{data.temp_c+"°C"}</a>
          <a className="desc">{image.text}</a>
        </div>
      </div>
      <div className="detail-info">
      <a className="humidity">{"Humidity: "+data.humidity+"%"}</a>
      <a className="wind">{"Wind Speed: "+data.wind_kph+"Km/hr"}</a>
      <a className="Visibility">{"Visibility: "+data.vis_km+"Km"}</a>
      <a className="Feels-like">{"Feels Like: "+data.feelslike_c+"°C"}</a>
      <a className="Pressure">{"Pressure: "+data.pressure_mb+"mb"}</a>
      <a className="uv">{data.uv>7?"UV index: "+data.uv+" (High)":data.uv>3&&data.uv<7?"UV index: "+data.uv+" (Moderate)":"UV index: "+data.uv+" (Low)"}</a>
      
      </div>
      </div>
    </div>
  )
}

export default HeroSection