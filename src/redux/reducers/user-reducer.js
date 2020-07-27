import {
    SHOW_USER,
    ADD_USER_DATA,
    MSG_ERROR,
    MSG_SUCCESS,
    EDIT_CURRENT_USER,
    EDIT_USER_DATA,
    DELETE_USER_DATA,
} from '../types';

const initialState = {
    users: [],
    usercurrent: null,
    error: null,
    success: null
}

export default (state = initialState, action) => {
    switch(action.type){

        case SHOW_USER:
            return{
                ...state,
                users: action.payload,
                error: null
            }

        case ADD_USER_DATA:
            return{
                ...state,
                users: [action.payload, ...state.users]
            }
        
        case MSG_ERROR:
            return{
                ...state,
                error: action.payload
            }

        case MSG_SUCCESS:
            return{
                ...state,
                success: action.payload
            }

        case EDIT_CURRENT_USER:
            return{
                ...state,
                usercurrent: action.payload
            }

        case EDIT_USER_DATA:
            return{
                ...state,
                users: state.users.map(user => user._id === state.usercurrent._id ? action.payload : user),
                usercurrent: null
            }
        
        case DELETE_USER_DATA:
            return{
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            }


        default:
            return state
    }
}

