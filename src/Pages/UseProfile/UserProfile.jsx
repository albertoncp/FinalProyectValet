import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar 1/Navbar1";
import NavbarBueno from "../../Components/NavbarBueno/NavbarBueno";
import { getUser } from "../../redux/auth/auth.funtion";
import { getUsersParkings } from "../../redux/Parkings/parkings.function";
import "./UserProfile.scss";

const UserProfile = () => {
    const dispatch = useDispatch([]);
    const { user, isLoading, error } = useSelector((state) => state.auth);

    console.log("soy user", user);
    useEffect(() => {
        if (user) dispatch(getUsersParkings(user?.parking));
    }, [user, dispatch]);

    const { booking } = useSelector((state) => state.newParking);
    console.log("soy parkings");
    console.log(`soy booking ${booking}` );
    

    return (
        <>
            <NavbarBueno/>
            {isLoading && "Cargando las ofertas"}
            {error && "Error al cargar"}
            {user && (
                <>
                    <p>
                        Perfil de {user?.firstName[0].toUpperCase()}
                        {user.firstName.slice(1)}
                    </p>
                    <div className="UserProfile__Container">
                        <div className="Info__Container">
                            <div className="PP__Container">
                                <img src={user?.photo} alt="Foto de Perfil" className="UserProfile_PP" />
                            </div>
                            <div className="Pinfo_Container">
                                <p>
                                    {user?.firstName[0].toUpperCase()}
                                    {user?.firstName.slice(1)}
                                </p>
                                <p>
                                    {user?.lastName[0].toUpperCase()}
                                    {user?.lastName.slice(1)}
                                </p>
                                <p>{user?.birthdate}</p>
                                <p>{user?.email}</p>
                            </div>
                        </div>
                        <div className="Bookings__Parkings__Container">
                            <div className="Bookings__Container">
                            <div className="bookTitle" >
                                            <h3>Mis garages</h3>
                                            </div>
                                {/* {console.log("soy mis parkings",user.parking)}
                                {console.log("soy bookings", user.bookings)} */}
                                {user &&
                                    
                                    user.parking.map((parkin) => {
                                        return (
                                            <>
                                            
                                            
                                            
                                            
                                            <div className="garageContainer" >
                                            <h2>{parkin?.adress}</h2>
                                            </div>
                                            
                                            <div>
                                            
                                            
                                                
                                            </div>
                                            </>
                                        );
                                    })}

                                <div></div>
                            </div>
                            <div className="Parkings__Container">
                            <div className="rentTitle" >
                                            <h3>Reservas</h3>
                                            </div>
                                {user &&
                                    user.bookings.map((bookin) => {
                                        return (
                                            <>  
                                            
                                                <div className="alquiler">
                                                    <h2>{bookin?.adress}</h2>
                                                </div>

                                                <div>
                                                    <p>{bookin?.busy}</p>
                                                    <p>{bookin?.size}</p>
                                                </div>
                                            </>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default UserProfile;
