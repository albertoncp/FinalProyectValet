import React, { useState,  } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Router, useNavigate, useRoutes,useRouteMatch } from "react-router-dom";
import { filterParkings } from "../../redux/Parkings/parkings.function";
import logo from "../../assets/valet_app_logo.png";
import { BiWorld } from "react-icons/bi";
import { FiMenu, FiSearch,FiUsers } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Calendar, DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./NavbarBueno.scss";
import Menu from "../Menu/Menu";
import Menu2 from "../Menu2/Menu2";
const NavbarBueno = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [menu, setMenu] = useState(false);

  const [startDate, setStartDate] = useState(new Date()) 
  const [endDate, setendDate] = useState(new Date()) 
  const [searchInput, setsearchInput] = useState("")
  const [noOfGuests, setnoOfGuests] = useState(1)
    

   
   

  const selectionRange = {
    startDate:startDate,
    endDate: endDate,
    key: "selection"
  }
  const resetInput = () => {
    setsearchInput("")
  }

  const handleSelect = (ranges) => {
    
    setStartDate(ranges.selection.startDate)
    setendDate(ranges.selection.endDate)
  }

  const search = () =>{
    
  }
  
  return (
    <div className="header" >
    
      {/* logo */}
      <div className="navbar">
        <div className="imgContainer">
          
          <img onClick={() => navigate("/")} src={logo}></img>
          
        </div>

        {/* input */}
        <div className="inputContainer">
          <input
          value={searchInput}
            onChange= {((e) => setsearchInput(e.target.value))}
            //Buscador por redux
            onKeyDown={(ev) => dispatch(filterParkings(ev.target.value))}
            placeholder="Busca tu garage"
          ></input>
          <div className="searchIcon">
            <FiSearch />
          </div>
        </div>
        {/* profile */}
        <div className="profileContainer">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/users/createbooking"}
          >
            <p>Rent Garage</p>
          </Link>
          <BiWorld className="worldIcon" />
          <div onClick={() => setMenu(!menu)} className="  menu">
            <FiMenu className="menuIcon" />
            <AiOutlineUser className="user" />
          </div>
        </div>
        
      </div>
      {searchInput && 
      <div className="calendar" >
        <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
        />
        
        <div className="navButtons" >
        <button onClick= {resetInput} >Cancel</button>
        <Link  
        to="/search"
        state={{
        location:searchInput,
        startDate: startDate.toString(),
        endDate:endDate.toString(),
        noOfGuests
        }}
        
        >
        <button  className="search" >Search</button>
        </Link>
        </div>

      </div> 
      }
      {menu === true && <Menu2 />}
    </div>
  );
};

export default NavbarBueno;
