import React from 'react'
import './style.css'
import bike from './bike.png'
import Home from './Home'
import Header from '../header/Header'
import Contact from './Contact'
import Howitworks from './Howitworks'
import { useLocation, useNavigate } from 'react-router-dom'

const mouseover = ()=>{
document.getElementById('image').addEventListener('mouseover', ()=>{
    document.getElementById('home').style.top = '0%'
    document.getElementById('home').style.right = '56%'
    document.getElementById('home').style.transform = 'scale(1)'
    document.getElementById('contact').style.top = '32%'
    document.getElementById('contact').style.right = '70%'
    document.getElementById('contact').style.transform = 'scale(1)'
    document.getElementById('working').style.top = '66%'
    document.getElementById('working').style.right = '60%'
    document.getElementById('working').style.transform = 'scale(1)'
})
}
const mouseleave = ()=>{
document.getElementById('image').addEventListener('mouseleave', ()=>{
    document.getElementById('home').style.top = '27%'
    document.getElementById('home').style.right = '23%'
    document.getElementById('home').style.transform = 'scale(0)'
    document.getElementById('contact').style.top = '27%'
    document.getElementById('contact').style.right = '23%'
    document.getElementById('contact').style.transform = 'scale(0)'
    document.getElementById('working').style.top = '27%'
    document.getElementById('working').style.right = '23%'
    document.getElementById('working').style.transform = 'scale(0)'
})
}

function Body() {
    const navigate = useNavigate();
    const navigateToBookingPage = ()=>{
        console.log('object')
        navigate('/booking');
    }
    
    return (
        <div className='body  relative'>
            <Header />

            <div className="booking-info  border border-white absolute right-1/2 p-4 ">
                <h1 className='text-xl'> <strong> Book Your Bike Now </strong></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit, modi maxime ratione aperiam mollitia ipsam corporis iure consequuntur saepe dicta, laboriosam nobis adipisci facilis enim.</p>

                <button onClick={navigateToBookingPage}>Book Now</button>
            </div>



            <div onMouseOver={mouseover} id='image' onMouseLeave={mouseleave} className="image">
                <Home />
                <Contact />
                <Howitworks />
                <img src={bike} alt="no image" />
            </div>
        </div>
    )
}



export default Body
