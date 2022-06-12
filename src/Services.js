import React from 'react'
import './Services.css'

function Services({image, title, description}) {
    return (
        <div className="services">
            <img src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Services
