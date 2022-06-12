import React from 'react'
import './About.css'
import Services from './Services'


function About() {
    return (
        <div className="about" id='about'>
            <article>
                <h1>Welcome to Cars</h1>
                <img src = "./images/amg.png"/>
                <p>Aenean suscipit ac nulla nec varius. Sed a mollis lectus. Maecenas quis ligula et turpis placerat viverra vitae et odio. Proin vulputate risus metus, quis consectetur enim rutrum sed. Nullam at dolor sed ligula tincidunt interdum id sit amet velit. Maecenas vitae mauris semper, iaculis dolor ut, molestie sem. Mauris orci lorem, egestas quis facilisis ac, consequat in dui. Suspendisse leo orci, molestie vel condimentum vitae, fringilla eget dui. Aenean feugiat, odio ac volutpat sollicitudin, leo dui rutrum nulla, at imperdiet urna nibh tristique magna. Phasellus tincidunt velit eu euismod sodales. Mauris finibus turpis sit amet urna aliquet pretium. Donec non dui maximus, vehicula nibh quis, convallis sem. Donec aliquet lorem vel ante ultrices, et laoreet nisi malesuada.</p>
                <p>Cras dapibus sem et ligula facilisis fermentum. Donec eu diam et purus suscipit commodo. Etiam dapibus sollicitudin mauris vel tempor. Morbi ut magna ante. Pellentesque et ligula ultrices, rutrum turpis non, vestibulum arcu. Donec non lorem vehicula, luctus quam quis, dignissim leo. Nullam congue eu mauris eu semper. Vivamus venenatis dignissim elit, sit amet vestibulum elit tincidunt id.</p>
                <p>Cras in velit nulla. In rhoncus magna eu enim placerat, a blandit tortor interdum. Ut a elit justo. Integer posuere quis felis vitae egestas. Etiam lorem sapien, commodo sit amet malesuada non, iaculis ac urna. Praesent commodo augue lorem, in lobortis tellus dapibus sit amet. Phasellus sed efficitur enim. Sed elementum sem quis est iaculis, vitae auctor nisl euismod. Pellentesque ac lorem a ex efficitur rutrum. Curabitur quam risus, elementum vitae neque in, luctus tempor eros. Nulla ac auctor nisi. Nullam dignissim augue nec porttitor porta. Pellentesque mattis in risus tempor sollicitudin. Nunc accumsan tellus nunc, sit amet pulvinar est iaculis eget. Maecenas sit amet lacus vel purus dapibus vulputate quis in purus.</p>
            </article>

            <div className="services__about">
                <Services 
                   image="./images/tag.svg"
                   title="Special Offers"
                   description="Get our special services and offers for every new customer register at the cars"/>
            
                <Services 
                    image="./images/wrench.svg"
                    title="Workshop"
                    description="There are many passages of lorem ipsum available but the majority"/>
                

                <Services 
                    image="./images/brake.svg"
                    title="Vehicle Parts"
                    description="Get vehicle part assistance from us for all the expensive varieties at best prices"/>
                
                <Services 
                    image="./images/car.svg"
                    title="Pre-Owned Vehicles"
                    description="These are many luxury variations of pre-owned vehicles we own for our customers"/>
                
            </div>

        </div>
    )
}

export default About
