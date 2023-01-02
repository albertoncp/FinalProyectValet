import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import FormRent from "./Pages/FormRent/FormRent";
import Map from "./Components/map/map";
import Login from "./Pages/LogIn/Login";
import Register from "./Pages/Registrarse/Register";
import UserProfile from "./Pages/UseProfile/UserProfile";
import { checkSession } from "./redux/auth/auth.funtion";
import { useDispatch } from "react-redux";
import GarageDetail from "./Pages/GarageDetail/GarageDetail"
import "./App.scss";
import Search from "./Pages/Search/Search";

function App() {
    const dispatch = useDispatch([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        token && dispatch(checkSession(token));
    }, [token, dispatch]);

    return (
        <div className="App">
        
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/search" element={<Search/>} />
                <Route path=":id" element={<GarageDetail/>}/>
                <Route path="/map" element={<Map />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users/createbooking" element={<FormRent />} />
                
                <Route path="/users/register" element={<Register />} />
                <Route path="/user/userProfile" element={<UserProfile />} />
            </Routes>
        </div>
    );
}

export default App;
