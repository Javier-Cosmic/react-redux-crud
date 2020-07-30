import {HIDE_ALERT, ALERT, ALERT_SUCCESS} from '../types';

const intialState = {
    alert: null,
    alertsuccess: null
}

export default function(state = intialState, action){
    switch(action.type){

        case ALERT:
            return{
                ...state,
                alert: action.payload
            }

        case ALERT_SUCCESS:
            return{
                ...state,
                alertsuccess: action.payload
            }
            
        case HIDE_ALERT:
            return {
                ...state,
                alert: null,
                alertsuccess: null
            }
            
        default:
            return state
    }

}