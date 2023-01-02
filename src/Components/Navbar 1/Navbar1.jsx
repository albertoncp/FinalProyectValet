import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterParkings } from "../../redux/Parkings/parkings.function";
import { BiWorld } from 'react-icons/bi';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";
import "./Navbar.scss";
import Hamburger from 'hamburger-react'

const Navbar = ({ styles, darkMode }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);

    return (
        <>
            
            <div className="divNavbar">
                
                        <img
                            onClick={() => navigate("/")}
                           
                            src="../assets/valet_app_logo.png"
                            alt="Logo Valet"
                            
                            className={darkMode ? "darkImgNav" : "imgNav"}
                        />
                        
                    
                        
                        <input
                            type="text"
                            placeholder="Buscar Estacionamiento..."
                            className={styles}
                            onChange={(ev) => dispatch(filterParkings(ev.target.value))}
                        ></input>
                        <div className="searchIcon" >
                            <FiSearch/>
                        </div>
                        

                    
                    {/* <div className="login" onClick={() => setMenu(!menu)}>
                        <Hamburger/>
                    </div> */}
                    
                    {/* <div className="login" onClick={() => setMenu(!menu)}>
                        <img
                            src="../assets/MenuHamburguesa.png"
                            alt="Menu"
                            className={darkMode ? "darkImgNav" : "imgNav"}
                        />
                        <img
                            className="profile"
                            src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                            alt="Profile"
                        ></img>
                    </div> */}
                
            </div>
            {menu === true && <Menu />}
        </>
    );
};

export default Navbar;
