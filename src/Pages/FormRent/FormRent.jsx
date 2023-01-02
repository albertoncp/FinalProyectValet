import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postNewParking } from '../../redux/newParking/newParking.functions';
import "./FormRent.scss"
import NavbarBueno from '../../Components/NavbarBueno/NavbarBueno';
const FormRent = () => {

  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const envioFormulario = (datosFormulario) => {

    const formData = new FormData();
    formData.append("adress", datosFormulario.adress);
    formData.append("price", datosFormulario.price);
    formData.append("image", datosFormulario.image[0]);
    formData.append("latitude", datosFormulario.latitude);
    formData.append("longitude", datosFormulario.longitude);
    
    dispatch(postNewParking(formData,navigate))
    console.log(datosFormulario);
  };


 


  return (
    
    <div >
    <NavbarBueno/>
    <form className='formRent' onSubmit={handleSubmit(envioFormulario)}>
    <label>
      Adress
      <input type="text" {...register("adress", { required: true })} />
    </label>
    <label>
      Price
      <input
        type="text"
        {...register("price", {
          required: true,
        
        })}
      />
    </label>
    <label>
      Image
      <input type="file" {...register("image", { required: false })} />
    </label>
    <label>
      Longitude
      <input
        type="text"
        {...register("longitude", {
          required: true,
        
        })}
      />
    </label>
    <label>
      Latitude
      <input
        type="text"
        {...register("latitude", {
          required: true,
        
        })}
      />
    </label>
    <button>Enviar</button>
  </form>
  
  </div>
  
  )
}

export default FormRent;

