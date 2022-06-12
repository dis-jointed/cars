import React, {useEffect, useState} from 'react'
import './Home.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Header from './Header'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

function Home() {

    const [current, setCurrent] = useState(0)
    const delay = 5000;
   

    const sliderData = [
        {
            index: 1,
            Image: 'https://images.unsplash.com/photo-1611651186486-415f04eb78e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            description: 'You have to feel for the engineers who were tasked with creating the Porsche 718 Cayman. After all, Porsches cheapest model was already a five-star sports car before being reinvented as the 718.'

    },
    {
        index: 2,
        Image: 'https://images.unsplash.com/photo-1601679147136-22d1032399e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description: 'To make matters worse, they had to improve on perfection despite adopting new, turbocharged four-cylinder engines; those dreaded emissions and fuel economy targets demanded giving up the sonority of the Cayman’s old flat-six engines.'
    },
    {
        index: 3,
        Image: 'https://images.unsplash.com/photo-1563299007-67cf7563f5fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        description: 'Those 2.0-litre and 2.5-litre four-cylinder Caymans are still available if you want to keep costs down, and whichever Cayman you buy, one thing has remained uniform throughout this period of flux: the focus on making it a thoroughbred sports car.'
    }
]

const length = sliderData.length

useEffect(() => {
    setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [current]);

if(!Array.isArray(sliderData) || sliderData.length <= 0) {
  return null;
}

function prevSlide(){
    setCurrent(current === 0 ? length -1 : current - 1 )
} 

function nextSlide(){
    setCurrent(current === length - 1 ? 0 : current + 1 )
} 

    return (
        <section className='home' id='home'>
            <Header/>
            <div className='home__content'>
                <div className="nav__arrows">
                    <ArrowBackIosRoundedIcon className={current === 0 ? 'left-arrow' : 'left-arrow-active' } onClick={prevSlide} />
                    <ArrowForwardIosRoundedIcon className={length === current + 1 ? 'right-arrow' : 'right-arrow-active'} onClick={nextSlide} />
                </div>
            {sliderData.map((slide, index) => {
                return (

                    <div className={index === current ? "slideactive" : "slide"} key={index}>
                       {index === current && 
                          <div>
                               <img className='image' src={slide.Image} />

                               <div className="slide__num">
                                   <p className="num__up">0{slide.index}</p>

                                   <p className="name__down">0{length}</p>
                                   </div>
                               
                               <div className='car__des'>
                                   <h5>Details</h5>
                                   <p>{slide.description}</p>
                                    </div>
                          </div>
                       }
                    </div>
                )
                    
                
            })}

        </div>

        </section>
    )
}

export default Home
