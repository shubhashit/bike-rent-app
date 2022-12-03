import React from 'react'
import './style.css'
import Home from './Home'
import Header from '../header/Header'
import Contact from './Contact'
import Howitworks from './Howitworks'
import { useNavigate } from 'react-router-dom'
import mainlogo from '../../logo/mainlogo.png'
import Features from './Features'
// const mouseover = ()=>{
// document.getElementById('image').addEventListener('mouseover', ()=>{
//     document.getElementById('home').style.top = '0%'
//     document.getElementById('home').style.right = '56%'
//     document.getElementById('home').style.transform = 'scale(1)'
//     document.getElementById('contact').style.top = '32%'
//     document.getElementById('contact').style.right = '70%'
//     document.getElementById('contact').style.transform = 'scale(1)'
//     document.getElementById('working').style.top = '66%'
//     document.getElementById('working').style.right = '60%'
//     document.getElementById('working').style.transform = 'scale(1)'
// })
// }
// const mouseleave = ()=>{
// document.getElementById('image').addEventListener('mouseleave', ()=>{
//     document.getElementById('home').style.top = '27%'
//     document.getElementById('home').style.right = '23%'
//     document.getElementById('home').style.transform = 'scale(0)'
//     document.getElementById('contact').style.top = '27%'
//     document.getElementById('contact').style.right = '23%'
//     document.getElementById('contact').style.transform = 'scale(0)'
//     document.getElementById('working').style.top = '27%'
//     document.getElementById('working').style.right = '23%'
//     document.getElementById('working').style.transform = 'scale(0)'
// })
// }

function Body() {
    const imagediv = document.getElementById('image');
    const navigate = useNavigate();
    const navigateToBookingPage = ()=>{
        console.log('object')
        navigate('/booking');
    }
    
    return (
        <div className='body  relative'>
            <Header />

            <div className="booking-info   absolute right-1/2 p-4 flex justify-center flex-col items-center hover:scale-110">
                <h1 className='text-3xl mb-2'> <strong>Search for training</strong></h1>
                <p className='' style={{fontSize:'17px'}}>Look for new opportunities which will Switch ON your Skill O meter and help you boost your CV and academics</p>
                <button className='w-2/5 mt-3' onClick={navigateToBookingPage}>Book Now</button>
            </div>



            <div  id='image'  className="image">
                <div></div>
                <img src={mainlogo} alt="no image" id='logo'/>
                {/* <Home />
                <Contact />
                <Howitworks /> */}
                <Features content='Right to choose from wide network of industries' imagediv = {imagediv} num='1' top = '-10%' right= '30%' ></Features>
                <Features content='offline training courses internship mentorship and much more' imagediv = {imagediv} num='2' top = '5%' right= '50%'></Features>
                <Features content='one to one mentroship from college aluminies and seniors' imagediv = {imagediv} num='3' top = '30%' right= '65%'></Features>
                <Features content='customized timeline and per achadmic convinence' imagediv = {imagediv} num='4' top = '60%' right= '55%'></Features>
                <Features content='boost your CV with projects and reports' imagediv = {imagediv} num='5' top = '73%' right= '30%'></Features>
            </div>
            <div className=' overflow-hidden absolute bottom-0 h-5 w-full bg-black text-white flex justify-between z-20 items-center'>
                <logo>ig</logo>
                contact us at : 1029384758 
                <logo>fb</logo>
            </div>
        </div>
    )
}



export default Body
