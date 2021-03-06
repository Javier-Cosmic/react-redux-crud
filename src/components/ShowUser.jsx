import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers } from '../redux/actions/user-action';
import ListUser from '../components/ListUser';

const ShowUser = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user_reducer.users);

    const loadingUser = () => {
        // cargar usuarios de la bd
        dispatch(loadUsers());
    };

    useEffect(() => {
        loadingUser();
        //eslint-disable-next-line
    }, []);

    return (
        <table className='table-data'>
            <thead className='table-sticky'>
                <tr>
                    <th>Rut</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Nacionalidad</th>
                    <th>N° Celular</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            {users.map((user) => (
                <ListUser key={user._id} user={user} />
            ))}
        </table>
    );
};

export default ShowUser;
