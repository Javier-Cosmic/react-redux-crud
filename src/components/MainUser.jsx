import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuButton } from '../redux/actions/user-action';
import menuBar from '../assets/icons/menu.svg';
import { showSuccess, hiddeAlert } from '../redux/actions/alert-action';
import Spinner from './Spinner';
import logo from '../assets/icons/logo.png';
import { CSSTransition } from 'react-transition-group';
const ShowUser = React.lazy(() => import('./ShowUser'));
const FormUser = React.lazy(() => import('./FormUser'));

const MainUser = () => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.user_reducer.menu);
    const loading = useSelector((state) => state.user_reducer.loading);
    const alertsuccess = useSelector(
        (state) => state.alert_reducer.alertsuccess
    );
    const success = useSelector((state) => state.user_reducer.success);
    const [alert, setAlert] = useState(false);

    const menuToggle = () => {
        dispatch(menuButton());
    };

    const msgSuccess = () => {
        if (success) {
            dispatch(showSuccess(success));
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 3000);

            setTimeout(() => {
                dispatch(hiddeAlert());
            }, 3500);
        }
    };

    useEffect(() => {
        //verificar alertas de exito
        msgSuccess();
        //eslint-disable-next-line
    }, [success]);

    return (
        <Suspense fallback=''>
            {/* menu responsive */}
            <nav className={menu ? 'menu-container' : 'menu-container hidden'}>
                <p className='close'>
                    <span onClick={menuToggle} className='close-menu'>
                        x
                    </span>
                </p>
                <FormUser menu={menu} />

                {menu ? (
                    <>
                        <div className='logo-main'>
                            <img
                                src={logo}
                                className='logo'
                                alt='logo-react-redux'
                            />
                        </div>
                        <p className='text-footer'>mobile design</p>
                    </>
                ) : null}
            </nav>

            {/* header */}
            <header className='header-bar'>
                <h1 className='title'>API CRUD with Redux</h1>
                <img
                    src={menuBar}
                    className='menu'
                    alt='menu-hamburguer'
                    onClick={menuToggle}
                />
            </header>

            {/* home */}
            <div className='main'>
                {/* alerta de exito */}
                <CSSTransition in={alert} timeout={500} classNames='fade'>
                    <>
                        {alertsuccess ? (
                            <div className='alert-success'>{alertsuccess}</div>
                        ) : null}
                    </>
                </CSSTransition>

                <div className='table-container'>
                    <ShowUser />
                    {loading ? <Spinner /> : null}
                </div>

                <FormUser />
            </div>
        </Suspense>
    );
};

export default MainUser;
