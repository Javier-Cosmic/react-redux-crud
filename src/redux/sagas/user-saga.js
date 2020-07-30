import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {loadDataUsers} from '../actions/user-action';
import {
    LOAD_USER, 
    ADD_USER, 
    ADD_USER_DATA, 
    EDIT_USER, 
    EDIT_USER_DATA,
    MSG_ERROR,
    MSG_SUCCESS,
    DELETE_USER,
    DELETE_USER_DATA,
    LOADING_SPINNER
  
} from '../types'

const url = process.env.REACT_APP_API_URL


function* getUsers(){
    
    yield put({type: LOADING_SPINNER, payload: true});

    try {
        const results = yield call(axios.get, url);

        yield put(loadDataUsers(results.data.users));
        yield put({type: LOADING_SPINNER, payload: false});

    } catch (error) {
        console.log(error);
    }
}

function* addUser({ payload }){
    try {
        
        const results = yield call(axios.post, url, payload);
        
        yield put({ type: ADD_USER_DATA, payload: results.data.users});
        yield put({ type: MSG_SUCCESS, payload: results.data.msg});

    } catch (error) {
        yield put({ type: MSG_ERROR, payload: error.response.data.msg });
    }
}

function* udpateUser({ payload }){
    try {
        
        const results = yield call(axios.put, url+payload._id, payload);
        
        yield put({ type: EDIT_USER_DATA, payload: payload });
        yield put({ type: MSG_SUCCESS, payload: results.data.status});

    } catch (error) {
        console.log(error);
    }

}

function* deleteUser({ payload }){
    try {
        const results = yield call(axios.delete, url+payload);
        
        yield put({ type: DELETE_USER_DATA, payload: payload});
        yield put({ type: MSG_SUCCESS, payload: results.data.msg});

    } catch (error) {
        console.log(error);
    }
}

export default function* users(){

    yield takeLatest(LOAD_USER, getUsers);
    yield takeLatest(ADD_USER, addUser);
    yield takeLatest(EDIT_USER, udpateUser);
    yield takeLatest(DELETE_USER, deleteUser);
}