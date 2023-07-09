import React from "react";
import calendarIcon from '../../assets/calendar.svg'
import clockIcon from '../../assets/clock.svg'

export function ApptCardDentist({ date, hour, treat, name, surname }) {
    return (
        <>
            <section className="appt-body">
                <div>
                    <span className="title-card">Tratamiento</span>
                    <span className="info-user">{treat}</span>
                </div>
                <div>
                    <span className="title-card">Paciente</span>
                    <span className="info-user">{name} {surname}</span>
                </div>
                <div className="info-date">
                    <img src={calendarIcon} alt='calendar'></img>
                    <span>{date}</span>
                </div>
                <div className="info-date">
                    <img src={clockIcon} alt='clock'></img>
                    <span>{hour}</span>
                </div>
            </section>
        </>
    )
}