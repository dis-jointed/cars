import React from 'react'
import Car from './Car'
import './LatestListing.css'


function LatestListing() {

    const cars = [
        { name: "Audi R8",
          model: 2007,
          fuel: "petrol",
          image: "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
          mileage: 27000,
          price: 2001
    },
    { name: "Audi R8",
          model: 2007,
          fuel: "petrol",
          image: "https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
          mileage: 9000,
          price: 8000

    },
    { name: "Audi R8",
          model: 2007,
          fuel: "petrol",
          image: "https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
          mileage: 9000,
          price: 8000

    },
    { name: "Audi R8",
          model: 2007,
          fuel: "petrol",
          image: "https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
          mileage: 9000,
          price: 8000

    },
    { name: "Audi R8",
          model: 2007,
          fuel: "petrol",
          image: "https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
          mileage: 9000,
          price: 8000

    },
    { name: "Audi R8",
          model: 2007,
          fuel: "petrol",
          image: "https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
          mileage: 9000,
          price: 8000

    },
    { name: "Audi R8",
          model: 2007,
          fuel: "petrol",
          image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          mileage: 6000
    }
          

    ]

    return (
        <div className="latest__listing">
            <h2>Latest Listing</h2>
            <div className='featured__cars'>
            {cars.map((car) => {
                return (
                        <Car image= {car.image}
                           name= {car.name}
                           model= {car.model}
                           fuel= {car.fuel}
                           mileage= {car.mileage}
                           price= {car.price}
                        />
                   
                )
                    
            })}
             </div>
             <button>Show More</button>

        </div>
    )
}

export default LatestListing
