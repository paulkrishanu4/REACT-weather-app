import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
import { GlobalState } from '../Context/GlobalState';

const Navbar = () => {
  const[location,setLocation]=useState()
  const{name, setName} = useContext(GlobalState)

  return (
    <div className="navbar">
      <input type="text" onChange={(e)=>{setLocation(e.target.value)}} placeholder="Search for location"/>
      <FaSearch onClick={()=>{setName(location)}}  style={{cursor:"pointer"}} id="search-icon"/>

    </div>
  )
}

export default Navbar