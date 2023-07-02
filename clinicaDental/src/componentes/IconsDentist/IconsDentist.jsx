import React from "react";
import { IconNav } from '../IconNav/IconNav'

import usersIcon from '../../assets/users-group.svg'
import calendarIcon from '../../assets/calendar-white.svg'
import newCitaIcon from '../../assets/calendar-plus-white.svg'

export function IconsDentist() {

    return (
        <>
            <IconNav link='/patients' className='darkStyle' icon={usersIcon} text='Pacientes' />
            <IconNav link='/appointments' className='darkStyle' icon={calendarIcon} text='Mis citas' />
            <IconNav link='/newAppt' className='darkStyle' icon={newCitaIcon} text='Crear cita' />
        </>
    )
}