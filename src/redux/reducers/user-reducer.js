import {
    SHOW_USER,
    ADD_USER_DATA,
    MSG_ERROR,
    MSG_SUCCESS,
    EDIT_CURRENT_USER,
    EDIT_USER_DATA,
    DELETE_USER_DATA,
    MENU,
    LOADING_SPINNER,
    CLEAN_USER
} from '../types';

const initialState = {
    users: [],
    usercurrent: null,
    error: null,
    success: null,
    menu: false,
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        
        case LOADING_SPINNER:
            return{
                ...state,
                loading: action.payload
            }

        case SHOW_USER:
            return {
                ...state,
                users: action.payload,
                // error: null,
            };

        case ADD_USER_DATA:
            return {
                ...state,
                users: [action.payload, ...state.users],
                menu: false,
                success: null,
                error: false
            };

        case EDIT_CURRENT_USER:
            return {
                ...state,
                usercurrent: action.payload,
                menu: true,
                // error: null
            };

        case EDIT_USER_DATA:
            return {
                ...state,
                users: state.users.map((user) =>
                    user._id === state.usercurrent._id ? action.payload : user
                ),
                usercurrent: null,
                menu: false,
                success: null,
                // error: null
            };

        case DELETE_USER_DATA:
            return {
                ...state,
                users: state.users.filter(
                    (user) => user._id !== action.payload
                ),
                success: null,
                // error: null,
                usercurrent: null
            };

        case MSG_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case MSG_SUCCESS:
            return {
                ...state,
                success: action.payload,
            };

        case MENU:
            return {
                ...state,
                menu: !state.menu,
                usercurrent: null,
            };

        case CLEAN_USER:{
            return{
                ...state,
                usercurrent: action.payload
            }
        }

        default:
            return state;
    }
};
