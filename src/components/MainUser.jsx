import React, { useEffect } from 'react';
import ShowUser from './ShowUser';
import FormUser from './FormUser';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../redux/actions/user-action';

const MainUser = () => {
    const dispatch = useDispatch();

    const loadingUser = () => {
        // cargar usuarios de la bd
        dispatch(loadUsers());
    };
    useEffect(() => {
        
        loadingUser();
    });

    return (
        <>
            <h1 className='title'>API CRUD with Redux</h1>
            <div className='main'>
                <ShowUser />
                <FormUser />
            </div>
        </>
    );
};

export default MainUser;
