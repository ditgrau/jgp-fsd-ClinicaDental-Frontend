import React, { useEffect, useState } from "react";
import { getUsers, getByName } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsersList } from "../../componentes/UsersList/UsersList";
import '../Patients/Patients.css'

export function Users() {
    const [users, setUsers] = useState([]);
    const [nameUser, setNameUser] = useState('');
    const [letra, setLetra] = useState('');
    const { role, token } = useAuth();
    let navigate = useNavigate()

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        nameUser !== ''
            ? getByName(nameUser, token).then((res) => {
                setUsers(res);
                console.log('estoy')
            })
            : getUsers(token).then((res) => {
                setUsers(res);
                res.map((obj) =>
                    setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()])
                );
            });
    }, [nameUser]);


    const inputHandler = (e) => {
        setNameUser(e.target.value);
    };

    return (
        <Container>
            <form className='login-form'>
                <input
                    type='text'
                    className='main-input'
                    placeholder='busqueda por nombre'
                    // name={'name'}
                    // value='nameUser'
                    onChange={(e) => inputHandler(e)}
                />
            </form>
            <UsersList title={'USUARIOS'} array={users} letra={letra} />
        </Container>
    )
}