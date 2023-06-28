import React from 'react';
import { Link } from 'react-router-dom';
import './IconNav.css'

export function IconNav({ link , className , icon , text, clickFunction}) {
    return (
    <Link to={link} className='iconNav' onClick={clickFunction}>
        <img src={icon} alt={text} className={`iconImg ${className}`}></img>
        <span className={`iconText ${className}Text`}>{text}</span>
    </Link>
    )
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './IconNav.css'

// export function IconNav({ link , className , icon , text, clickFunction}) {
//     return (
//     <div  className='iconNav' onClick={clickFunction}>
//         <img src={icon} alt={text} className={`iconImg ${className}`}></img>
//         <span className={`iconText ${className}Text`}>{text}</span>
//     </div>
//     )
// }
