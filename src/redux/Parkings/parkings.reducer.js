const INITIAL_STATE = {
    parkings: [],
    isSearching: false,
    isLoading: false,
    filtered: [],
    clicked: false,
    error: false,
};

const parkingsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case "gettingParkings":
            return { ...state, isLoading: true, parkings: [] };
        case "getParkings":
            return { ...state, isLoading: false, parkings: payload };
        case "error":
            return { ...state, isLoading: false, parkings: [], error: payload };
        case "startFilterParkings":
            return { ...state, isLoading: true };
        case "finishFilterParking":
            return { ...state, isLoading: false, filtered: payload.filtered, isSearching: payload.isSearching, clicked: payload.clicked };
        case "editingParking":
            return { ...state, isLoading: true };
        case "parkingEdited":
            return { ...state, isLoading: false };
        case "errorEditingParking":
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};

export default parkingsReducer;
