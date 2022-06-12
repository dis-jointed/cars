import React from 'react'
import './ServiceItem.css'

function ServiceItem({image, title, desc}) {
    return (
        <div className="service__item">
            <img src={image} />
            <h6>{title}</h6>
            <p>{desc}</p>

        </div>
    )
}

export default ServiceItem
