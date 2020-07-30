import {ALERT, HIDE_ALERT, ALERT_SUCCESS} from '../types';

export const showAlert = (message) => {
    return{
        type: ALERT,
        payload: message
    }
}

export const showSuccess = (success) => {
    return{
        type: ALERT_SUCCESS,
        payload: success
    }
}

export const hiddeAlert = () => {
        return{
            type: HIDE_ALERT
        }
}
