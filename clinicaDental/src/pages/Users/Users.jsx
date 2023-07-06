import React, { useEffect, useState } from "react";
import { getUsers, getByRole } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsersList } from "../../componentes/UsersList/UsersList";
import '../Patients/Patients.css'

export function Users() {
    const [users, setUsers] = useState([]);
    const [roleUser, setRoleUser] = useState('');
    const [error, setError] = useState('');
    const [letra, setLetra] = useState('');
    const { role, token } = useAuth();
    let navigate = useNavigate()

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        roleUser !== ''
            ? getByRole(roleUser, token).then((res) => {
                if (res !== undefined) {
                    setUsers(res);
                } else {
                    setError('Roles: 1-admin, 2-dentista, 3-usuario');
                    getUsers(token).then((res) => {
                        setUsers(res);
                    })
                }
            })
            : getUsers(token).then((res) => {
                setUsers(res);
                res.map((obj) =>
                    setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()])
                );
            });
    }, [roleUser]);

    const inputHandler = (e) => {
        setRoleUser(e.target.value);
    };

    return (
        <Container>
            <form className='login-form'>
                <input
                    type='text'
                    className='main-input'
                    placeholder='busqueda por rol'
                    value={roleUser}
                    onChange={(e) => inputHandler(e)}
                />
            </form>
            <div>{error}</div>
            <UsersList title={'USUARIOS'} array={users} letra={letra} />
        </Container>
    )
}