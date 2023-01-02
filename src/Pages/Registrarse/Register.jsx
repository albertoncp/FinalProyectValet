import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../redux/auth/auth.funtion";
import Navbar from '../../Components/Navbar 1/Navbar1'
import "./Register.scss"
const Register = () => {
  const { register, handleSubmit, formState: {errors, isValid}} = useForm();
  let navigate = useNavigate();
  const dispatch = useDispatch();



  const userRegister = (datos) => {
    const formData = new FormData();
    formData.append("email", datos.email);
    formData.append("password", datos.password);
    formData.append("firstName", datos.firstName);
    formData.append("lastName", datos.lastName);
    formData.append("birthdate", datos.birthdate);
    formData.append("photo", datos.photo[0]);
    console.log(formData);
    dispatch(newUser(formData, navigate));
  };

  return (
    <div>
    <Navbar styles='navbar_input--hidden'/>
    <form className="formRegister" onSubmit={handleSubmit(userRegister)}>
    <h4> Regístrate</h4>
    <h4> ¡Te damos la Bienvenida a Valet!</h4>
      <label>
        Email
        <input
          type="text"
          name="email"
          {...register("email", {
            required: "Introduce un email, por favor",
            minLength: {
              value: 2,
              message: "el email tiene que ser mas largo",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Introduce un email con formato valido",
            },
          })}
        />
      </label>

      {errors.email ? (
        <>
          {errors.email.type === "required" && <p>{errors.email.message}</p>}
          {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
          {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        </>
      ) : null}

      <label>
        Password
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "El password tiene que existir",
            
          })}
        />
      </label>
      {errors.password ? <p>El password no es correcto</p> : null}

     
      <div className="input-group" >
      <label> 
      Nombre
        <input 
          className="effect-5"
          type="text"
          name="firstName"
          {...register("firstName", {
            required: "El nombre tiene que existir",
            
          })}
        />
       </label>
       </div>
      <label>
        Apellidos
        <input
          type="text"
          name="lastName"
          {...register("lastName", {
            required: "Los apellidos tienen que existir",
            
          })}
        />
      </label>
      <label>
        Fecha Nacimiento
        <input
          type="text"
          name="birthdate"
          {...register("birthdate", {
            required: "La fecha de nacimiento tiene que existir",
            
          })}
        />
      </label>
      <label>
        Foto
        <input
          type="file"
          name="photo"
          {...register("photo", {

          }
            
            
          )}
        />
      </label>



      <button disabled={!isValid}>Enviar</button>
    </form>
    </div>
  );
};

export default Register;
