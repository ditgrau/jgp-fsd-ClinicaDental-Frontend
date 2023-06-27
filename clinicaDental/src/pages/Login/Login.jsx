import React from 'react';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from '../../services/apiCalls';
import { checkError } from '../../services/checkError';
import { login } from '../../Redux/userSlice';
import { NavButton } from '../../componentes/NavButton/NavButton';
import '../Login/Login.css'

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
    const [badRequest, setBadRequest] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        loginUser(credentials)
            .then((result) => {
                let tokenDecoded = jwt_decode(result.token);
                dispatch(
                    login({
                        token: result.token,
                        id: tokenDecoded.id,
                        name: tokenDecoded.name,
                        email: tokenDecoded.email
                    })
                )

                setTimeout(() => {
                    navigate("/");
                }, 500);

            })
            .catch(error => {
                console.log(error.response);
                setBadRequest(`Las credenciales no son correctas`)
            })
    };

    // evita el comportamiento por default del formulario (enviar y recagar la pagina)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (credentials.email && credentials.password) {
            logUser();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    type='email'
                    className='login-input'
                    placeholder='user@email.com'
                    name={'email'}
                    value={credentials.email}
                    onChange={(e) => inputHandler(e)}
                    onBlur={(e) => inputCheck(e)}>
                </input>
                <div className="errorText">{credentialsError.emailError}</div>
                <input
                    type='password'
                    className='login-input'
                    placeholder='password'
                    name={'password'}
                    value={credentials.password}
                    onChange={(e) => inputHandler(e)}
                    onBlur={(e) => inputCheck(e)}>
                </input>
                <div className="errorText">{credentialsError.passwordError}</div>
                <NavButton textButton='Iniciar sesión'/>
                <div>¿No tienes cuenta aún?</div>
                <Link to='/signup'><span className='link-text'> Regístrate aquí</span></Link>
                <div className="errorText">{badRequest}</div>

            </form>
        </>
    )
}