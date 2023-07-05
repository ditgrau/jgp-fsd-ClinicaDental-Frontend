import React, { useEffect, useState } from "react";
import { getUsers} from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsersList } from "../../componentes/UsersList/UsersList";
import '../Patients/Patients.css'

export function Users() {
    const [users, setUsers] = useState([])
    const [letra, setLetra] = useState('');
    const {role, token} = useAuth();
    let navigate = useNavigate()

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        getUsers(token).then((res) => {
            setUsers(res)
            res.map((obj) => setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()]));
        })}
    , [])

    return (
        <Container>
            <UsersList title={'USUARIOS'} array={users} letra={letra} />
        </Container>
    )
}