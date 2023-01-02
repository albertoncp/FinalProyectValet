import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCar } from 'react-icons/ai';
import { FaCaravan } from 'react-icons/fa';
import { AiTwotoneCar } from 'react-icons/ai';
import "./Filters.scss"
import { useState } from "react";
import { filterParkings2, filterParkings3, filterParkings4 } from '../../redux/Parkings/parkings.function';
import { Link } from "react-router-dom";
import { postNewBooking } from "../../redux/newBooking/newBooking.functions";
import Swal from "sweetalert2";
const Filters = () => {
    const postBooking = (park) => {
        Swal.fire("Gracias por tu reserva!");
        dispatch(postNewBooking(park));
    };
    const { user } = useSelector((state) => state.auth);
    const { parkings, filtered, isLoading, isSearching } = useSelector((state) => state.parkings);
    useEffect(() => {}, [filtered, isSearching]);
    
    const dispatch = useDispatch();

    const [clicked, setclicked] = useState(true)
  return (
    <div className='filterContainer' >
    <div  className='carFilter' >
        <AiFillCar onClick={() => dispatch(filterParkings3(clicked)) } />
        <p>Coche</p>
    </div>
    <div onClick={() => dispatch(filterParkings2(clicked)) } className='carFilter' >
        <FaCaravan/>
        <p>Caravana</p>
       
    </div>
    <div onClick={() => dispatch(filterParkings4(clicked)) } className='carFilter' >
        <AiTwotoneCar/>
        <p>Camión</p>
    </div>
    
    </div>
  )
}

export default Filters