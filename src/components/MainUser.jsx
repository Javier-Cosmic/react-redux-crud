import React, { useEffect } from 'react';
import ShowUser from './ShowUser';
import FormUser from './FormUser';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, menuButton } from '../redux/actions/user-action';
import menuBar from '../assets/icons/menu.svg';

const MainUser = () => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.user_reducer.menu);

    const loadingUser = () => {
        // cargar usuarios de la bd
        dispatch(loadUsers());
    };
    useEffect(() => {
        loadingUser();
    });

    const menuToggle = () => {
        dispatch(
            menuButton()
        );
    }

    return (
        <>
            {/* menu responsive */}
            <div className={menu ? 'menu-container' : 'menu-container hidden'}>
                <p className='close'><span onClick={menuToggle} className='close-menu'>x</span></p>
                <FormUser menu={menu} />
            </div>
            {/* header */}
            <div className='header-bar'>
                <h1 className='title'>API CRUD with Redux</h1>
                <img src={menuBar} className='menu' alt='menu-hamburguer' onClick={menuToggle}/>
            </div>
            {/* home */}
            <div className='main'>
                <div className='table-container'>
                    <ShowUser />
                </div>
                <FormUser />
            </div>
        </>
    );
};

export default MainUser;
