const INITIAL_STATE = {
    users: [],
    user: null,
    token: null,
    error: false,
    isLoading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case "login_user_start":
            return { ...state, isLoading: true };
        case "login_user_ok":
            return { ...state, isLoading: false, user: payload.userDB, token: payload.token, error: false };
        case "login_user_error":
            return { ...state, isLoading: false, user: null, token: null, error: payload };

        case "register_user_start":
            return { ...state, isLoading: true };
        case "register_user_ok":
            return { ...state, isLoading: false, error: false, user: payload };
        case "register_user_error":
            return { ...state, isLoading: false, error: payload, user: false };

        case "getting_users":
            return { ...state, isLoading: true };
        case "get_users":
            return { ...state, isLoading: false, error: false, users: payload };
        case "get_users_error":
            return { ...state, isLoading: false, users: [], error: payload };

        case "editing_user":
            return { ...state, isLoading: true };
        case "edit_user":
            return { ...state, isLoading: false, user: action.payload };
        case "edit_user_error":
            return { ...state, isLoading: false, error: payload };

        case "logout_user_start":
            return { ...state, isLoading: true };
        case "logout_user_ok":
            return { ...INITIAL_STATE };
        case "logout_user_error":
            return { ...state, isLoading: false, error: payload };

        case "checkSession_start":
            return { ...state, isLoading: true };
        case "checkSession_ok":
            return { ...state, isLoading: false, user: payload.user, token: payload.token, error: false };
        case "checkSession_error":
            return { ...state, user: false, isLoading: false, error: payload };

        default:
            return state;
    }
};

export default authReducer;
