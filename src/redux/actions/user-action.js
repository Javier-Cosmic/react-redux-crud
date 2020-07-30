import {
    LOAD_USER,
    SHOW_USER,
    ADD_USER,
    ADD_USER_DATA,
    MSG_ERROR,
    MSG_SUCCESS,
    EDIT_USER,
    EDIT_CURRENT_USER,
    EDIT_USER_DATA, 
    DELETE_USER,
    DELETE_USER_DATA,
    MENU,
    LOADING_SPINNER
} from '../types';


export const loading = (isLoading) => {
    return{
        type: LOADING_SPINNER,
        payload: isLoading
    }
}

export const msgError = (error) => {
    return{
        type: MSG_ERROR,
        payload: error
    }
} 

export const msgSuccess = (success) => {
    return{
        type: MSG_SUCCESS,
        payload: success
    }
}

export const menuButton = () => {
    return{
        type: MENU
    }
}

export const loadUsers = () => {
    return{
        type: LOAD_USER
    }
}

export const loadDataUsers = (data) => {
    return{
        type: SHOW_USER,
        payload: data
    }
}

export const addUser = (user) => {
    return{
        type: ADD_USER,
        payload: user
    }
}

export const addDataUser = (data) => {
    return{
        type: ADD_USER_DATA,
        payload: data
    }
}


export const getCurrentUser = (usercurrent) => {
    return{
        type: EDIT_CURRENT_USER,
        payload: usercurrent
    }
}

export const editUser = (user) => {
    return{
        type: EDIT_USER,
        payload: user
    }
}

export const editDataUser = (data) => {
    return{
        type: EDIT_USER_DATA,
        payload: data
    }
}

export const deleteUser = (id) => {
    return{
        type: DELETE_USER,
        payload: id
    }
}

export const deleteDataUser = (id) => {
    return{
        type: DELETE_USER_DATA,
        payload: id
    }
}