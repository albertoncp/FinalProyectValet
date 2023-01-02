import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaMap } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "./BotonMapa.scss"
const BotonMapa = () => {
    const navigate= useNavigate();
  return (
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }} >
    <div className='mapa' >
    <div className='containerMap' >
    <button className='buttonMapa'  onClick={() => navigate('/map')} >Mostrar Mapa</button>
    <FaMap/>
    </div>
    </div>
    </IconContext.Provider>
    
  )
}

export default BotonMapa