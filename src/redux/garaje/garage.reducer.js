const INITIAL_STATE = {
    position : [],
    loading:false,
    error:false,

}

const garajeReducer = (state = INITIAL_STATE, action)=>{
    
    switch (action.type) {
        case 'gettingLocation':
            return{...state, loading:true, error: false};
        case 'getLocation':
            return{...state, loading:false, position: action.payload, error: false};
        /* case 'errorClothes':
            return{...state, loading: false, ropas:[], error: action.payload}

        case 'creatingClothes':
            return{...state, loading:true};
        case 'createdClothes':
            return{...state, loading:false, error: false}
        case 'errorCreating':
            return{...state, loading: false, error: action.payload}
 */
        default:
            /* console.log(state); */
            return state;
            
            

    }
}
export default garajeReducer;