import React from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser, deleteUser } from '../redux/actions/user-action';
import logoEdit from '../assets/icons/editar.svg';
import logoRemove from '../assets/icons/borrador.svg';

const ListUser = React.memo( ({ user }) => {
    const dispatch = useDispatch();

    const editUser = () => {
        //obtener usuario actual
        dispatch(getCurrentUser(user));
    };

    const removeUser = () => {
        //eliminar usuario
        dispatch(deleteUser(user._id));
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
                            className='icon-remove'
                            alt='icon-remove'
                        />
                    </td>
                </tr>
        </tbody>
    );
});

export default ListUser;
