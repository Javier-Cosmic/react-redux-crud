import React from 'react';
import { useSelector } from 'react-redux';
import ListUser from './ListUser';

const ShowUser = () => {
    const users = useSelector((state) => state.user_reducer.users);

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
