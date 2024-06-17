import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer">
      <h2>CONNECT&ensp;WITH&ensp;US</h2>
      <div className="icons">
        <BsTwitterX id="ic"/>
        <FaFacebookSquare id="ic"/>
        <FaLinkedin id="ic"/>
        <IoIosMail id="ic"/>
      </div>
    </div>
  )
}

export default Footer