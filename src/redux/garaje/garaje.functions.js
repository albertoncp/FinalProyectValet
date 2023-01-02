import axios from "axios"

export const getLocation = ()=>async(dispatch)=>{
   console.log("hola");
    dispatch({type:'gettingLocation'})

    try {

        function getPosition() {
            // Simple wrapper
            return new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej);
            });
        }
        
        async function main() {
            var position = await getPosition();  // wait for getPosition to complete
            console.log(position.coords.latitude);
        
            return position
        }
        const res = main()
        
        dispatch({type: 'getLocation', payload: "hola"})

    } catch (error) {
        console.log(error);
        /* dispatch({type:'errorClothes', payload:error.message}) */
    }

}
