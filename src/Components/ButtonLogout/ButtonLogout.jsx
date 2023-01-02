import React from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/auth/auth.funtion";
import "./ButtonLogout.scss"


const ButtonLogout = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const logOut = () => {
      dispatch(logoutUser(navigate))
  }
  return (
    <button className="buttonLog" onClick={logOut}>Log Out</button>
  )
}

export default ButtonLogout