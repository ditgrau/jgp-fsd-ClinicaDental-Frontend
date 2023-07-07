import React from "react";
import './NavButton.css'

export function NavButton ({textButton}) {
    return (
        <button type='submit' className='navButton'>{textButton}</button>
    )
}