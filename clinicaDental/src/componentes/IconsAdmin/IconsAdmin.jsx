import React from "react";
import { IconNav } from '../IconNav/IconNav'

import usersIcon from '../../assets/users-group.svg'
import calendarIcon from '../../assets/calendar-white.svg'

export function IconsAdmin() {

    return (
        <>
            <IconNav link='/users' className='darkStyle' icon={usersIcon} text='Usuarios' />
            <IconNav link='/allAppointments' className='darkStyle' icon={calendarIcon} text='Citas' />
        </>
    )
}