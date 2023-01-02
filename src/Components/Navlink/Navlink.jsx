import React from 'react'
import { NavLink } from 'react-router-dom'


const NavlinkReutilizable = ({nav, type, texto}) => {
    return (
        <nav>
        <NavLink to={nav} activeclassname='active' className={type}>{texto}</NavLink>


        </nav>
    )
}

export default NavlinkReutilizable