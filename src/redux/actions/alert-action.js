import {SHOW_ALERT} from '../types';

export const showAlert = (message) => {
    return{
        type: SHOW_ALERT,
        payload: message
    }
}