import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import alertReducer from './alert-reducer';

export default combineReducers({
    user_reducer: userReducer,
    alert_reducer: alertReducer
});