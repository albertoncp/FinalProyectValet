import { API, API2 } from "../../Shared/Services/api";

export const loginUser = (formdata, navigate) => async (dispatch) => {
    dispatch({ type: "login_user_start" });
    try {
        const result = await API.post("/users/login", formdata);
        console.log(result.data);
        dispatch({ type: "login_user_ok", payload: result.data });
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("id", result.data.userDB._id);
        navigate("/");
    } catch (error) {
        dispatch({ type: "login_user_error", payload: error.message });
    }
};

export const logoutUser = (navigate) => async (dispatch) => {
    dispatch({ type: "logout_user_start" });
    try {
        dispatch({ type: "logout_user_ok" });
        localStorage.clear();
        alert("Sesión cerrada correctamente");
        navigate("/");
    } catch (error) {
        dispatch({ type: "logout_user_error", payload: error.message });
    }
};

export const getUser = (navigate) => async (dispatch) => {
    dispatch({ type: "getting_users" });
    try {
        await API.get("/users");
        dispatch({ type: "get_users" });
    } catch (error) {
        dispatch({ type: "get_users_error", payload: error.message });
    }
};

export const userEdit = (garage) => async (dispatch) => {
    dispatch({ type: "editing_users" });
    try {
        console.log(garage);
        const mod = {
            parking: garage.toString(),
        };
        console.log(mod);
        const response = await API.put("/users/edit/" + localStorage.getItem("id"), mod);
        console.log("soy response de user edit",response.data);
        dispatch({ type: "edit_user", payload: response.data.userModificado });
    } catch (error) {
        dispatch({ type: "edit_users_error", payload: error.message });
    }
};

export const userEdit2 = (reserva) => async (dispatch) => {
    dispatch({ type: "editing_users" });
    try {
        console.log(reserva);
        const mod = {
            bookings: reserva.toString(),
        };
        console.log(mod);
        const response = await API.put("/users/edit/" + localStorage.getItem("id"), mod);
        dispatch({ type: "edit_user", payload: response.data.userModificado });
    } catch (error) {
        dispatch({ type: "edit_users_error", payload: error.message });
    }
};

export const newUser = (formdata, navigate) => async (dispatch) => {
    dispatch({ type: "register_user_start" });
    try {
        const result = await API2.post("users/create", formdata);
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("id", result.data.user._id);
        dispatch({ type: "register_user_ok", payload: result.data.user });
        dispatch(userEdit(result.data.user._id))
        navigate("/");
    } catch (error) {
        dispatch({ type: "register_user_error", payload: error.message });
    }
};

export const checkSession = (token) => async (dispatch) => {
    dispatch({ type: "checkSession_start" });
    try {
        const result = await API.post("users/checkSession");
        dispatch({
            type: "checkSession_ok",
            payload: { user: result.data, token: token },
        });
        localStorage.setItem("token", token);
    } catch (error) {
        dispatch({ type: "checkSession_error" });
        localStorage.removeItem("token");
        // localStorage.clear();
    }
};
