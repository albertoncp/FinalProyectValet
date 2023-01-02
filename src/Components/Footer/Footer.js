import React from 'react'
import "./Footer.scss"
import {FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { IconContext } from "react-icons";
const Footer = (darkMode) => {
  return (

    <IconContext.Provider value={{ color: "black", className: "global-class-name" }} >
    <footer className={darkMode ? "darkFooter" : ""}>
    <ul>
      <li>© 2022 ValetApp, Inc.</li>
      
      <li><a href="https://www.instagram.com/wemotoclothing/"><FaInstagram/></a></li>
      <a href="https://www.facebook.com/wemotoclothing"><FaFacebook/></a>
      <li><a href="https://www.instagram.com/wemotoclothing/"><FaGithub/></a></li>
    </ul>
    </footer>
    </IconContext.Provider>
  )
}

export default Footer