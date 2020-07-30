import React, { useEffect } from 'react';
import ShowUser from './ShowUser';
import FormUser from './FormUser';
import { useDispatch, useSelector } from 'react-redux';
import { menuButton } from '../redux/actions/user-action';
import menuBar from '../assets/icons/menu.svg';
import Spinner from './Spinner';
import { showSuccess, hiddeAlert } from '../redux/actions/alert-action';

const MainUser = () => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.user_reducer.menu);
    const loading = useSelector((state) => state.user_reducer.loading);
    const alertsuccess = useSelector(
        (state) => state.alert_reducer.alertsuccess
    );
    const success = useSelector((state) => state.user_reducer.success);

    const menuToggle = () => {
        dispatch(menuButton());
    };

    const msgSuccess = () => {
        if (success) {
            dispatch(showSuccess(success));

            setTimeout(() => {
                dispatch(hiddeAlert());
            }, 5000);
        }
    }

    useEffect(() => {
        //verificar alertas de exito
        msgSuccess();
        console.log('renderizando main user')
    }, [success]);

    return (
        <>
            {/* menu responsive */}
            <div className={menu ? 'menu-container' : 'menu-container hidden'}>
                <p className='close'>
                    <span onClick={menuToggle} className='close-menu'>
                        x
                    </span>
                </p>
                <FormUser menu={menu} />
            </div>

            {/* header */}
            <div className='header-bar'>
                <h1 className='title'>API CRUD with Redux</h1>
                <img
                    src={menuBar}
                    className='menu'
                    alt='menu-hamburguer'
                    onClick={menuToggle}
                />
            </div>

            {/* home */}
            <div className='main'>
                {/* alerta de exito */}
                {alertsuccess ? <p className='alert-success'>{alertsuccess}</p> : null}

                <div className='table-container'>
                    <ShowUser />
                    {loading ? <Spinner /> : null}
                </div>
                <FormUser />
            </div>
        </>
    );
};

export default MainUser;
