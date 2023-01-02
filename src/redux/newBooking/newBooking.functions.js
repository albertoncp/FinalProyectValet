
import { API } from "../../Shared/Services/api";
import { userEdit2 } from "../auth/auth.funtion";
import { parkingEdit2 } from "../Parkings/parkings.function";



export const postNewBooking = (datos) => async (dispatch, getState) => {
    const {booking: { bookings }} = getState();
    dispatch({ type: "postingBooking" });
    try {
      console.log("esto recibe postnewbooking",datos);
      const res = await API.post("bookings/create", datos);
      console.log("soy la adress",res.adress);
      const newBookings = [...bookings, res]
      console.log("booking creado",res);
      const user = localStorage.getItem('id')
      console.log("soy el user ",user);
      console.log("soy la id de booking",res.data._id);
      dispatch({ type: "postBooking", payload: newBookings });
      //hasta aquí esta bien 
      console.log("soy la id de booking",res.data._id);
      dispatch(userEdit2(res.data._id))
      
      dispatch(parkingEdit2(res.data_id, datos._id))
      
    } catch (error) {
      dispatch({ type: "postingError", payload: error.message });
    }
  };

