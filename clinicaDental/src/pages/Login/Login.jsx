import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                <input type='email' placeholder='user@email.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button>Login</button>
            </form>

        </>
    )
}