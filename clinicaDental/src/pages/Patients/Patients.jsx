import React, { useEffect, useState } from "react";
import { getPatients , getUsers} from '../../services/apiCalls';
import { Token, Role } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";


export function Patients() {
    const [users, setUsers] = useState([])
    const [letra, setLetra] = useState('');
    const token = Token()
    const role = Role()

    const title = (role === 2) ? 'PACIENTES' : 'USUARIOS'
    console.log(token)

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        if(role === 2) {
        getPatients(token).then((res) => {
            setUsers(res)
            res.map((obj) => setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()]));
        })}
        else if (role === 1) {
            getUsers(token).then((res) => {
                setUsers(res)
                res.map((obj) => setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()]));
            })
        }
        }, [])

    console.log(users)
    console.log(letra)
    return (
        <Container>
            <Row className="main-row">
                <span className="title-main">{title}</span>
                {users.length > 0
                    ?
                    (
                        users.map((elem, index) => (
                            <Col key={elem.id} xs={10} md={3} className="card-users main-card">
                                <section className="title-user">
                                    <div className='capital-letter'><div>{letra[index]}</div></div>
                                    <span className="title-profile"> {elem.name} {elem.surname}</span>
                                </section>
                                <section className="data-card">
                                    <div>
                                        <span className="title-card">Nombre</span>
                                        <span className="info-user">{elem.name}</span>
                                    </div>
                                    <div>
                                        <span className="title-card">Apellidos</span>
                                        <span className="info-user">{elem.surname}</span>
                                    </div>
                                    <div>
                                        <span className="title-card">DNI</span>
                                        <span className="info-user">{elem.dni}</span>
                                    </div>
                                    <div>
                                        <span className="title-card">Email</span>
                                        <span className="info-user">{elem.email}</span>
                                    </div>
                                    {role !== 2
                                        ? (<>
                                            <div>
                                                <span className="title-card">Role</span>
                                                <span className="info-user">{elem.role}</span>
                                            </div>
                                            <div>
                                                <span className="title-card">Status</span>
                                                <span className="info-user">{elem.status}</span>
                                            </div>
                                        </>)
                                        : (<>
                                        </>)
                                    }
                                </section>

                            </Col>



                        )))
                    // const resultado = arrayDeObjetos.map(objeto => objeto.clave.map(elemento => /* haz algo con cada elemento */));

                    : (<></>)
                }
            </Row>
        </Container>
    )
}