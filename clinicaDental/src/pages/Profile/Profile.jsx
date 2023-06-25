import React from "react";
import { Link } from 'react-router-dom'
import '../Profile/Profile.css'
import userIcon from '../../assets/user-circle.svg'
import editIcon from '../../assets/writing.svg'

export function Profile() {
    return (
        <div className='profile-card'>
            <aside className="id-card">
                <img src={userIcon} alt='userProfile'></img>
                <span>id</span>
            </aside>
            <section className="data-card">
                <span>Nombre y apellidos</span>
                <span>DNI</span>
                <span>email</span>
                <Link to='/edit' className="editProfile">
                <img src={editIcon} alt='editProfile' className="editProfile-img"></img>
                <span className="editProfile-text">Editar</span>
                </Link>
            </section>
        </div>
    )
}
