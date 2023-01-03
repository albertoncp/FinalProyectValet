import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Filters from '../../Components/Filters/Filters'
import Footer from '../../Components/Footer/Footer'
import NavbarBueno from '../../Components/NavbarBueno/NavbarBueno'
import { useLocation, Link } from 'react-router-dom'
import format from 'date-fns/format'
import "./Search.scss"
import { getParkings } from '../../redux/Parkings/parkings.function'
import Swal from 'sweetalert2'
import { postNewBooking } from '../../redux/newBooking/newBooking.functions'
import { AiOutlineHeart } from 'react-icons/ai';

const Search = () => {
  const dispatch = useDispatch([]);

  useEffect(() => {
        dispatch(getParkings());
    }, []);

    const { parkings, filtered, isLoading, isSearching } = useSelector((state) => state.parkings);

    const state = useLocation()
    const { user } = useSelector((state) => state.auth);

    const {noOfGuests, location,startDate,endDate} = state.state

    const formattedStartDate = format(new Date(startDate), "dd MM yy")
    const formattedEndDate = format(new Date(endDate), "dd MM yy")
    const range = `${formattedStartDate} to ${formattedEndDate}`
    
    console.log(`location ${location}`);
    console.log(`location ${startDate}`);
    console.log(`location ${endDate}`);
    console.log(`location ${noOfGuests}`);

     const postBooking = (park) => {
        Swal.fire("Gracias por tu reserva!");
        dispatch(postNewBooking(park));
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
   
    <div>

<NavbarBueno/>
<Filters/>

<div>
    <p>Stays from {range} for {noOfGuests}</p>
</div>
<div>
  {renderParkings(filtered)}
</div>

<Footer/>
    </div>
  )
}

export default Search