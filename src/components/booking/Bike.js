import React from 'react'
import logo from '../../logo/LOGO.pdf'
import mainlogo from '../../logo/mainlogo.png'
import './style.css'
export default function Bike(props) {
    const turning = () => {
        console.log('turning');
        document.getElementById('moreInfo').transform = 'rotateY(180deg)'
    }
    return (
        <div className=' p-4 w-1/5 h-full mr-2 courseInfo hover:scale-105' id='moreInfo'>
            <div className="flip-card h-1/2 mb-1">
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img className='h-full w-full' src={mainlogo} alt="" />
                    </div>
                    <div className='flip-card-back p-4 rounded-t-3xl'>
                        <p>moreInfo : Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, pariatur dignissimos inventore ab quae qui?</p>
                    </div>
                </div>
            </div>

            <div>
                <p className='text-sm mb-2'>{props.data}</p>
                <div className='flex '>

                    <div className='flex text-center flex-col mb-1' >
                        <div className='mr-2 border border-white inline-block mb-1'>
                            {`price -INR ${props.price}`}
                            {/* <div>link</div> */}
                        </div>
                        <div className='mr-2 border border-white inline-block mb-1'> certification - 1 month</div>
                       {props.elegibility && <div className='mr-2 border border-white inline-block mb-1'>{props.elegibility}</div>}
                        {/* // add a borcher for the training info- i option */}
                    </div>
                    <div className='w-1/2 flex justify-end items-center'>
                        <button className='book pr-1 pl-1' onClick={props.onBook}>
                            book
                        </button>
                    </div>
                </div>
                {/* <div className=''> <button onClick={turning}> info - value </button></div> */}
            </div>
        </div>
        // SkillONN
        // SkillONN
    )
}
