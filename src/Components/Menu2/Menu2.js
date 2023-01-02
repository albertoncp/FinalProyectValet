import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import NavlinkReutilizable from "../Navlink/Navlink";
import "./Menu2.scss";

const Menu2 = () => {
  const { user, token } = useSelector((state) => state.auth);

  return (
    
      <ul className="Dropdown">
        {!user && (
          <>
            <li className="first" >
                <Link   to="/users/register" >
                    Registrate
                </Link>
              {/* <NavlinkReutilizable
                nav="/users/register"
                type="linkNav"
                texto="Registrate"
              /> */}
            </li>
            <li>
            <Link to="/users/login" >
                    Login
                </Link>
              {/* <NavlinkReutilizable
                nav="/users/login"
                type="linkNav"
                texto="Login"
              /> */}
            </li>
          </>
        )}
        {user && (
          <>
          <li className="first" >
                <Link   to="/users/register" >
                    Registrate
                </Link>
              {/* <NavlinkReutilizable
                nav="/users/register"
                type="linkNav"
                texto="Registrate"
              /> */}
            </li>
            <li className="login" >
            <Link to="/users/login" >
                    Login
                </Link>
              {/* <NavlinkReutilizable
                nav="/users/login"
                type="linkNav"
                texto="Login"
              /> */}
            </li>
            
            <li className="alquila" >
            <Link to="/users/createbooking" >
                    Alquila
                </Link>
              {/* <NavlinkReutilizable
                nav="/users/login"
                type="linkNav"
                texto="Login"
              /> */}
            </li>

            <li className="perfil" >
            <Link to="/user/userProfile" >
                    Perfil
                </Link>
              {/* <NavlinkReutilizable
                nav="/users/login"
                type="linkNav"
                texto="Login"
              /> */}
            </li>
            
            <li>
              <ButtonLogout className="buttonLogout" />
            </li>
          </>
        )}
      </ul>
    
  );
};

export default Menu2;
