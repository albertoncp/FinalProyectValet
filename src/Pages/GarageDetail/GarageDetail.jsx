import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GarageDetail.scss";
import { useSelector } from "react-redux";
import { postNewBooking } from "../../redux/newBooking/newBooking.functions";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import axios from "axios";
import NavbarBueno from "../../Components/NavbarBueno/NavbarBueno";

const GarageDetail = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch([]);

  const { user } = useSelector((state) => state.auth);

  const [garage, setgarage] = useState("");

  const postBooking = (park) => {
    Swal.fire("Gracias por tu reserva!");
    dispatch(postNewBooking(park));
  };


  useEffect(() => {
    const getGarage = async () => {
      const res = await axios.get(`https://final-back.vercel.app/parkings/${id}`);

      setgarage(res.data);
    };
    getGarage();
  }, [])
  

  return (
    <div>
      <NavbarBueno />
      <div className="garageDetails">
        <div className="infoContainer">
          <div className="imgContainer">
            <img src={garage.image}></img>
          </div>
          <div className="infoGarageDetail">
            <h2>{garage.adress}</h2>
            {user && (
              <div className="button">
                <button onClick={() => postBooking(garage)}> Reserva</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarageDetail;
