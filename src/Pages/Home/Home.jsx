import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar 1/Navbar1";
import { getParkings } from "../../redux/Parkings/parkings.function";
import BotonMapa from "../../Components/BotonMapa/BotonMapa";
import { AiOutlineHeart } from "react-icons/ai";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import { postNewBooking } from "../../redux/newBooking/newBooking.functions";
import { Link, NavLink } from "react-router-dom";

import "./Home.scss";
import NavbarBueno from "../../Components/NavbarBueno/NavbarBueno";
import Filters from "../../Components/Filters/Filters";

const Home = () => {
    const dispatch = useDispatch([]);
    const { parkings, filtered, isLoading, isSearching, clicked } = useSelector((state) => state.parkings);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getParkings());
    }, [dispatch]);

    useEffect(() => {}, [filtered, isSearching]);

    const postBooking = (park) => {
        Swal.fire("Gracias por tu reserva!");
        dispatch(postNewBooking(park));
    };
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    const renderParkings = (elements) => {
        return (
            
            <div className="parkings">
                
                {elements.map((park) => (
                    
                    <div key={park._id} className={`card ${park.type}`}>
                    
                    <div className="imageContainer" >
                    <Link to={`${park._id}`} style={{ textDecoration: 'none' }} >
                        <img src={park.image} alt={park.adress} />
                    </Link>
                    {user && (
                            <div className="button">
                                <AiOutlineHeart onClick={() => postBooking(park)} className="heartIcon" />
                                {/* <img onClick={() => postBooking(park)} className="heartIcon" src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" ></img>
                                 */}
                            </div>
                        )}
                    </div>
                        <p className="park-adress">{park.adress}</p>
                        <p className="park-price">Cuota por noche: {park.price}€</p>
                        <p className="park-size">Tamaño apto para {park.size}</p>
                        <div className={!park.busy ? "park-libre" : "park-ocupado"}>
                            <p id="park-p">Disponibilidad Actual:</p>
                            {!park.busy ? "DISPONIBLE" : "OCUPADO"}
                        </div>
                       
                    </div>
                    
                    
                ))}
            </div>
        );
    };

    return (
        <div className={darkMode ? "darkMode" : ""}>
            <NavbarBueno/>
            <Filters/>
            {/* <Navbar styles="navbar_input dark" darkMode={darkMode} /> */}
            <div className="body-home">
                

                {isLoading && <div>Cargando las ofertas</div>}
                
                {isSearching && !filtered.length && <div>No se encuentran resultados</div>}
                
                {!isSearching && filtered.length > 0  && renderParkings(filtered) }
                {!isSearching && clicked ? renderParkings(filtered) 
                : renderParkings(parkings)}
                
                
                
                <BotonMapa/>
                <Footer darkMode={darkMode} />
            </div>
        </div>
    );
};

export default Home;
