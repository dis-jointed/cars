import React from 'react'
import './Car.css'

function Car({ image, name, model, fuel, mileage, price}) {



    return (
        <div className='car'>
            <img src={image} />
            <div className= "carnamee">
                <p>{name}</p>
            </div>
            <div className='car__details'>
                <p className='model__details'>{model}</p>
                <p className='fuel__details'>{fuel}</p>
                <p>{mileage}</p>
            </div>
            <div className="pricing__cont">
                <p>Ksh+{price}</p>
                <p>View Details</p>
            </div>
            
        </div>
    )
}

export default Car
