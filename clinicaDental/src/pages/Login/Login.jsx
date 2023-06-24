import React from 'react';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { useNavigate , Link } from "react-router-dom";
import { login } from '../../services/apiCalls';
import { checkError } from '../../services/checkError';

export function Login() {

    //hooks de estado 
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [credentialsError, setCredentialsError] = useState({
        emailError: "",
        passwordError: "",
    });
    const [welcome, setWelcome] = useState('')

    const navigate = useNavigate();

    const inputHandler = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const inputCheck = (e) => {
        let mensajeError = checkError(e.target.name, e.target.value);
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: mensajeError,
        }));
    };

    const logUser = () => {
        login(credentials)
            .then((result) => {
                let tokenDecoded = jwt_decode(result.data.token);
                console.log(result.data.token)
                console.log(tokenDecoded);

                setTimeout(() => {
                    navigate("/");
                }, 1500);

                setWelcome(`Bienvenido de nuevo, ${tokenDecoded.name}`);
            })
            .catch((error) => console.log(error));
    };

    // evita el comportamiento por default del formulario (enviar y recagar la pagina), para hacer antes las validaciones 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (credentials.email && credentials.password) {
            logUser();
    }
}

    return (
        <>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    className=''
                    placeholder='user@email.com'
                    name= {'email'}
                    value={credentials.email}
                    onChange={(e) => inputHandler(e)}
                    onBlur={(e) => inputCheck(e)}>
                </input>
                <div className="errorText">{credentialsError.emailError}</div>
                <input
                    type='password'
                    placeholder='password'
                    name= {'password'}
                    value={credentials.password}
                    onChange={(e) => inputHandler(e)}
                    onBlur={(e) => inputCheck(e)}>
                </input>
                <div className="errorText">{credentialsError.passwordError}</div>
                <button type='submit'>Login</button>
                <span>¿No tienes cuenta aún?</span><Link to='/signin'><span>Regístrate</span></Link>

            </form>
        </>
    )
}