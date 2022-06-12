import React from 'react'
import './BrandItem.css'

function BrandItem({image, name}) {
    return (
        <div className="brand__item">
            <img src={image} alt=""/>
            <p>{name}</p>
        </div>
    )
}

export default BrandItem
