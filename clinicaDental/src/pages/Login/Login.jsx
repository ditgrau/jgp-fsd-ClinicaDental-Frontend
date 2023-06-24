import React from 'react';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../../services/apiCalls/login';


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

    //evita el comportamiento por default del formulario (enviar y recagar la pagina), para hacer antes las validaciones 
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/");
    }

    return (
        <>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='user@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button>Login</button>
            </form>

        </>
    )
}