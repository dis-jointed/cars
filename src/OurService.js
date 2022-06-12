import React from 'react'
import ServiceItem from './ServiceItem'
import './OurService.css'

function OurService() {

    const service = [
        {
         image: "./images/sports-car.svg",
         title: "All Brands",
         desc: "We have wide range of all he luxury brands in the excellent condition"
    },
    {
        image: "./images/chat.svg",
        title: "Free Support",
        desc: "Get free support and assistance after sale from us in regular."
   },
   {
    image: "./images/keys.svg",
    title: "Dealership",
    desc: "We have wide range of all he luxury brands in the excellent condition"
},
{
    image: "./images/dollar.svg",
    title: "Affordable",
    desc: "Enjoy affordable luxury, premium cars with best features on a single call "
},
{
    image: "./images/book.svg",
    title: "Insurance",
    desc: "Get fully insured cars with us with hassle free documentation"
},
{
    image: "./images/star.svg",
    title: "Auto Electric",
    desc: "We have wide range of all he luxury brands in the excellent condition"
},
{
    image: "./images/train.svg",
    title: "Easy Accessible",
    desc: "There are many variations of cars that are easily accessible from our showroom"
}, {
    image: "./images/calculator.svg",
    title: "Emi support",
    desc: "Know your cars EMI with our representatives and get support for loan."
},
]

    return (
        <div className="our__service">
            <h2>Our Services</h2>
            <div className="service__items">
            {service.map((service) => {
                return (
                       <ServiceItem 
                       image= {service.image}
                       title= {service.title}
                       desc= {service.desc} />
                   
                )
                    
            })}
            </div>
        </div>
    )
}

export default OurService
