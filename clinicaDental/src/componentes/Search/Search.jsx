import React, { useState, useEffect } from "react";
import { useAuth } from "../../services/dataFromSlice";
import { getByName } from "../../services/apiCalls";

export function Search() {
    
    const { role, token } = useAuth();

    const inputHandler = () => {
        console.log(token)
        console.log(nameUser)
        getByName(nameUser, token)
    }

    return (

        <form className='login-form'>
            <input
                type='text'
                className='main-input'
                placeholder='busqueda por nombre'
                // name={'name'}
                value={nameUser}
                onChange={inputHandler}
            />
        </form>
    )
}