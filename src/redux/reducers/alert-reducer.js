import {HIDE_ALERT, SHOW_ALERT} from '../types';

const intialState = {
    alert: null
}

export default function(state = intialState, action){
    switch(action.type){

        case SHOW_ALERT:
            return{
                ...state,
                alert: action.payload
            }
            
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }
            
        default:
            return state
    }

}