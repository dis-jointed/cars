import { LocalGroceryStoreSharp } from '@material-ui/icons'
import React from 'react'
import './Header.css'

function Header() {

    
    const loger = e => {

        console.log("hello")
    }

    return (
        <div className="header">
            <h5>PIPI</h5>
            <div className="menu">
            <a href="#home"
             onClick={loger}>
                Home
            </a>
            <a href="#about">
                About
            </a>
            <a href="#featured">
                Services
            </a>
            <a href="#">
                Cars
            </a>

            <a href="#">
                Location
            </a>
            <a href="#">
                Contact
            </a>
            </div>
           
        </div>
    )
}

export default Header
