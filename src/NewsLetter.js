import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
    return (
        <div className="news__letter" >
            <div className="cover"></div>
            <img className="bmw" src="./images/bmww.jpg"/>
            <img className="hands" src="./images/phonee.png"/>
            <h2>Newsletter</h2>
            <p>Subscribe to our weekly Newsletter and stay tuned.</p>
            <div className="input">
                <img src="./images/email.svg" />
                <input type="email" placeholder="your@email.com"/>
            </div>
            <button>Subscribe Now!</button>
           
        </div>
    )
}

export default NewsLetter
