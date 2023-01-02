
import { API } from "../../Shared/Services/api";
import { loginUser } from "../auth/auth.funtion";

export const getParkings = () => async (dispatch) => {
    dispatch({ type: "gettingParkings" });
    try {
        const result = await API.get("/parkings");
        dispatch({ type: "getParkings", payload: result.data });
    } catch (error) {
        dispatch({ type: "error", payload: error.message });
    }
};

export const getUsersParkings = (user) => async (dispatch) => {
    dispatch({ type: "gettingParkings" });
    try {
        const ids = user;
        const parkings = [];
        try {
            for (let i = 0; i < ids.length; i++) {
                if (ids[i] !== null) {
                    const parking = await API.get("parkings/" + ids[i]);
                    parkings.push(parking.data);
                } else {
                    console.log("vacio");
                }
            }
            console.log(parkings);
        } catch (error) {
            dispatch({ type: "error", payload: error.message });
        }
        dispatch({ type: "getParkings", payload: parkings });
    } catch (error) {
        dispatch({ type: "error", payload: error.message });
    }
};

export const parkingEdit = (user, id, navigate) => async (dispatch) => {
    dispatch({ type: "editingParking" });
    try {
        const mod = {
            users: user.toString(),
        };
        console.log(mod);
        await API.put("/parkings/edit/" + id, mod);
        dispatch({ type: "parkingEdited" });
        navigate("/")
    } catch (error) {
        dispatch({ type: "errorEditingParking", payload: error.message });
    }
};

export const parkingEdit2 = (idBooking, id) => async (dispatch) => {
    console.log("se está ejecutando parkingEdit2");
    dispatch({ type: "editingParking" });
    try {
        const mod = {
            bookings: idBooking.toString(),
        };
        console.log(mod);
        await API.put("/parkings/edit/" + id, mod);
        dispatch({ type: "parkingEdited" });
    } catch (error) {
        dispatch({ type: "errorEditingParking", payload: error.message });
    }
};

export const filterParkings = (searchTerm) => async (dispatch, getState) => {
    dispatch({ type: "startFilterParkings" });
    const { parkings: { parkings } } = getState();
    
    try {
        const searchTermLower = searchTerm.toLowerCase();

        const filtered = parkings.filter((parking) => {
            const matchName = parking.adress?.toLowerCase().includes(searchTermLower);
            const matchSize = parking.size?.includes(searchTermLower);

            return matchName || matchSize;
        });
        dispatch({
            type: "finishFilterParking",
            payload: { filtered: filtered, isSearching: !!searchTerm} });
    } catch (error) {
        dispatch({ type: "error", payload: error.message });
    }
};
export const filterParkings2 = (clicked) => async (dispatch, getState) => {
    dispatch({ type: "startFilterParkings" });
    const { parkings: { parkings } } = getState();
    
    try {
        

        const filtered = parkings.filter((parking) => {
            const matchName = parking.size?.includes("caravana");
            

            return matchName;
        });
        dispatch({
            type: "finishFilterParking",
            payload: { filtered: filtered, clicked:clicked } });
    } catch (error) {
        dispatch({ type: "error", payload: error.message });
    }
};
export const filterParkings3 = (clicked) => async (dispatch, getState) => {
    dispatch({ type: "startFilterParkings" });
    const { parkings: { parkings } } = getState();
    
    try {
        

        const filtered = parkings.filter((parking) => {
            const matchName = parking.size?.includes("turismo");
            
            console.log(`filtrado por turismo ${matchName}`);
            return matchName;
            
        });
        dispatch({
            type: "finishFilterParking",
            payload: { filtered: filtered, clicked:clicked } });
    } catch (error) {
        dispatch({ type: "error", payload: error.message });
    }
};

export const filterParkings4 = (clicked) => async (dispatch, getState) => {
    dispatch({ type: "startFilterParkings" });
    const { parkings: { parkings } } = getState();
    
    try {
        

        const filtered = parkings.filter((parking) => {
            const matchName = parking.size?.includes("camion");
            

            return matchName;
        });
        dispatch({
            type: "finishFilterParking",
            payload: { filtered: filtered, clicked:clicked} });
    } catch (error) {
        dispatch({ type: "error", payload: error.message });
    }
};

