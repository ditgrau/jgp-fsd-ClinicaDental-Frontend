import React from "react";

export function Signin() {

    const handleSubmit = (e) => {
        e.preventDefault()
        const fields = Object.fromEntries(new window.FormData(e.target))
    }

    return (
        <>
            <h1>sign in</h1>
            <form onSubmit={handleSubmit}>
                <input name='name' placeholder='Name' type='text' />
                <input name='surname' placeholder='Surname' type='text' />
                <input name='dni' placeholder='Identity number' type='text' />
                <input name='email' placeholder='email@email.com' type='email' />
                <input name='password' placeholder='*******' type='password' />
            <button type='submit'>sign in</button>
            </form>
        </>
    )
}