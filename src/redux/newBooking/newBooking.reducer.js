const INITIAL_STATE = {
  isLoading: false,
  error: false,
  bookings: []
}
export const newBookingReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
      case "postingBooking":
          return {...state, isLoading: true, error: false };
      case "postBooking": 
      return{...state, isLoading: false, error: false, bookings: action.payload };
      case "postingError":
          return{...state, isLoading: false, error: action.payload }
      default:
          return state;
  }
}