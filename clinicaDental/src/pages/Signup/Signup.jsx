import React from "react";
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { signup } from '../../services/apiCalls';
import { checkError } from '../../services/checkError';
import '../Signup/Signup.css'
import { NavButton } from "../../componentes/NavButton/NavButton";

export function Signup() {
    const [dataUser, setDataUser] = useState({
        name: '',
        surname: '',
        dni: '',
        email: '',
        password: ''
    })

    const [credentialsError, setCredentialsError] = useState({
        emailError: "",
        passwordError: "",
    });

    const [errorClassName, setErrorClassName] = useState("errorNone");

    const navigate = useNavigate();

    const inputHandler = (e) => {
        setDataUser((prevState) => ({
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

    const singupUser = () => {
        signup(dataUser)
            .then((result) => {
                console.log(result)
                console.log(result.data.token);
                let tokenDecoded = jwt_decode(result.data.token);
                console.log(tokenDecoded);

                setTimeout(() => {
                    navigate("/login");
                }, 500);

            })
            .catch(error => {
                console.log(error.response.status);
                if (error.response.status === 400) {
                    setErrorClassName ('errorShown')
                }
                else {
                    let errorClassName= 'errorClassName'
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        singupUser();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='signup-form'>
                <input
                    name='name' placeholder='Name' type='text' onChange={(e) => inputHandler(e)} className="main-input" />
                <input
                    name='surname' placeholder='Surname' type='text' onChange={(e) => inputHandler(e)} className="main-input" />
                <input
                    name='dni' placeholder='Identity number' type='text' onChange={(e) => inputHandler(e)} onBlur={(e) => inputCheck(e)} className="main-input" />
                <input
                    name='email' placeholder='email@email.com' type='email' onChange={(e) => inputHandler(e)} onBlur={(e) => inputCheck(e)} className="main-input" />
                <div className="errorText">{credentialsError.emailError}</div>
                <input
                    name='password' placeholder='*******' type='password' onChange={(e) => inputHandler(e)} onBlur={(e) => inputCheck(e)} className="main-input" />
                <div className="errorText">{credentialsError.passwordError}</div>
                <div className={errorClassName}>No se puede registrar</div>
                <NavButton textButton='Registro'/>
                <span>Al continuar, aceptas nuestros</span>
                <Link to='/' className='link-text'>Términos de Uso y Política de Privacidad</Link>
            </form>
        </>
    )
}