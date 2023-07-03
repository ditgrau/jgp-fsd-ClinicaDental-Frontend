import React from "react";
import calendarIcon from '../../assets/calendar.svg'
import clockIcon from '../../assets/clock.svg'

export function ApptCardUser({ date, hour, treat, time, price, name, surname }) {
    
    return (
        <>
            <section >
                <div className="info-date">
                    <span>{date}</span>
                    <img src={calendarIcon} alt='calendar'></img>
                </div>
                <div className="info-date">
                    <span>{hour}</span>
                    <img src={clockIcon} alt='clock'></img>
                </div>
            </section>
            <section className="appt-body">
                <div>
                    <span className="title-card">Tratamiento</span>
                    <span className="info-user">{treat}</span>
                </div>
                <div>
                    <span className="title-card">Tiempo estimado</span>
                    <span className="info-user">{time} minutos</span>
                </div>
                <div>
                    <span className="title-card">Precio</span>
                    <span className="info-user">{price}€</span>
                </div>
                <div>
                    <span className="title-card">Dentista</span>
                    <span className="info-user">{name} {surname}</span>
                </div>
                </section>
            </>
            )
        }
