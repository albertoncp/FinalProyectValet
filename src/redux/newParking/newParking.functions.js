
import { API2 } from "../../Shared/Services/api";
import { userEdit } from "../auth/auth.funtion";
import { parkingEdit } from "../Parkings/parkings.function";

export const postNewParking = (datos,navigate) => async (dispatch, getState) => {
    
  dispatch({ type: "postingParking" });
    try {
      const res = await API2.post("parkings/create", datos);
      console.log("soy la id del bookings", res.data._id);
     
      const user = localStorage.getItem('id')
      console.log(`soy el post de new parking ${res}`);
      dispatch({ type: "postParking", payload: res.data });
      
      dispatch(userEdit(res.data._id))
      dispatch(parkingEdit(user, res.data._id, navigate))
      console.log("he llegado");
      navigate("/");
      
    } catch (error) {
      console.log(error);
      dispatch({ type: "postingError", payload: error.message });
    }
  };


