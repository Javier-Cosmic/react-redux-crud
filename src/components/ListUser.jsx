import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser, deleteUser } from '../redux/actions/user-action';
import logoEdit from '../assets/icons/editar.svg';
import logoRemove from '../assets/icons/borrador.svg';

const ListUser = ({ user }) => {
    const dispatch = useDispatch();
    const [msg, setMsg] = useState(false);

    const editUser = () => {
        //obtener usuario actual
        dispatch(getCurrentUser(user));
    };

    const removeUser = () => {
        //eliminar usuario
        dispatch(deleteUser(user._id));
    };

    //mostrar mensaje antes de eliminar
    const showHover = () => {
        setMsg(!msg);
    };

    return (
            <tbody>
                <tr>
                    <td>{user.rut}</td>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.age}</td>
                    <td>{user.nationality}</td>
                    <td>{user.cellphone}</td>
                    <td>
                        <img
                            src={logoEdit}
                            onClick={editUser}
                            className='icon-edit'
                            alt='icon-edit'
                        />
                        <img
                            src={logoRemove}
                            onClick={removeUser}
                            onMouseOver={showHover}
                            onMouseOut={showHover}
                            className='icon-remove'
                            alt='icon-remove'
                        />
                        {msg ? <p className='msg-parent'><span className='msg-delete'>¿Estas seguro?</span></p> : null}
                    </td>
                </tr>
            </tbody>
    );
};

export default ListUser;
