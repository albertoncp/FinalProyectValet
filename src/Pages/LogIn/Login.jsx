
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from "../../redux/auth/auth.funtion"
import { API } from "../../Shared/Services/api";
import Navbar from '../../Components/Navbar 1/Navbar1'
import "./Login.scss"
const Login = () => {
  const { register, handleSubmit, formState: {errors, isValid}} = useForm();
  console.log(process.env.REACT_APP_BACK_URL);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  



const login = async(formadata) =>{
  dispatch(loginUser(formadata, navigate))
  navigate("");
}

  return (
    <div>
    <Navbar styles='navbar_input--hidden'/>
    <form className="formLogin" onSubmit={handleSubmit(login)}>
    <h4> Inicia Sesión</h4>
    <h4> ¡Bienvenido de nuevo a Valet!</h4>
    <label>
        Email
        <input type="text" name="email" {...register('email', {
            required: "Introduce un email, por favor",
            minLength: {
                value: 2,
                message: "el email tiene que ser mas largo"
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
                message: "Introduce un email con formato valido"
                }            
          })}/>
    </label>
    {errors.email ? <>
        {errors.email.type === "required" && <p>{errors.email.message}</p>}
        {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
      </> : null}
      
    <label>
        Password
        <input type="password" name="password" {...register('password', {
            required:"El password tiene que existir",
            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                
          })}/>
    </label>
    {errors.password ? <p>El password no es correcto</p> : null}

    <button >Enviar</button>

    

    </form>
    </div>
    

  )
}
export default Login;