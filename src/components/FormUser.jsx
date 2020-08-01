import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addUser,
    editUser
} from '../redux/actions/user-action';
import { showAlert, hiddeAlert } from '../redux/actions/alert-action';

const Form = ({ menu }) => {
    const dispatch = useDispatch();
    const usercurrent = useSelector((state) => state.user_reducer.usercurrent);
    const alert = useSelector((state) => state.alert_reducer.alert);
    const error = useSelector(state => state.user_reducer.error);

    const empty = {
        rut: '',
        name: '',
        lastname: '',
        age: '',
        nationality: '',
        cellphone: '',
    };
    const [user, setUser] = useState(empty);

    const { rut, name, lastname, age, nationality, cellphone } = user;

    const existError = () => {
        if(error){
            dispatch(showAlert(error));

            setTimeout(() => {
                dispatch(hiddeAlert());
            }, 3000);
        }
    }

    useEffect(() => {

        //verificar si hay datos en el usuario actual
        if (usercurrent !== null) {
            setUser(usercurrent);

        } else {
            setUser({
                rut: '',
                name: '',
                lastname: '',
                age: '',
                nationality: '',
                cellphone: '',
            });

            //verificar alertas de error
            existError();  
        }
        
        //eslint-disable-next-line
    }, [usercurrent, error]);

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        //identificar si es agregar o editar
        if (usercurrent !== null) {
            //edita usuario
            dispatch(
                editUser({
                    _id: usercurrent._id,
                    rut,
                    name,
                    lastname,
                    age,
                    nationality,
                    cellphone,
                })
            );

            setUser(empty); 

        } else {
            if (
                rut.trim() === '' ||
                name.trim() === '' ||
                lastname.trim() === '' ||
                age.trim() === '' ||
                nationality.trim() === '' ||
                cellphone.trim() === ''
            ) {
                dispatch(showAlert('Los campos son obligatorios'));

                setTimeout(() => {
                    dispatch(hiddeAlert());
                }, 3000);

                return;
            }

            //agregar usuario
            dispatch(
                addUser({
                    rut,
                    name,
                    lastname,
                    age,
                    nationality,
                    cellphone,
                })
            );
            
            setUser(empty)
        }
    };

    return (
        <>
            <div className={menu ? 'form-menu' : 'form-user'}>
                <form onSubmit={onSubmit}>
                    <div className='form-inside'>
                        <label>Rut</label>
                        <input
                            type='text'
                            name='rut'
                            value={rut}
                            onChange={onChange}
                        />
                        <label>Nombre</label>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={onChange}
                        />
                        <label>Apellido</label>
                        <input
                            type='text'
                            name='lastname'
                            value={lastname}
                            onChange={onChange}
                        />
                        <label>Edad</label>
                        <input
                            type='number'
                            name='age'
                            value={age}
                            onChange={onChange}
                        />
                        <label>Nacionalidad</label>
                        <input
                            type='text'
                            name='nationality'
                            value={nationality}
                            onChange={onChange}
                        />
                        <label>N° Celular</label>
                        <input
                            type='number'
                            name='cellphone'
                            value={cellphone}
                            onChange={onChange}
                        />
                        {alert ? (
                            <div className='alert-main'>
                                <div className='alert'>{alert}</div>
                            </div>
                        ) : (
                            <input
                                type='submit'
                                className='button-submit'
                                value={
                                    usercurrent !== null ? 'Editar' : 'Agregar'
                                }
                            />
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
