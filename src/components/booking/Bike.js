import React from 'react'
import logo from '../../logo/LOGO.pdf'
import mainlogo from '../../logo/mainlogo.png'
export default function Bike(props) {
    return (
        <div className=' p-4 w-1/5 h-full mr-2 courseInfo hover:scale-105 '>
            <img className='h-1/2 mb-1' src={mainlogo} alt="" />
            <div>
                <p className='text-sm mb-2'>{props.data}</p>
                <div className='flex '>

                    <div className='flex text-center flex-col mb-1' >
                        <div className='mr-2 border border-white inline-block mb-1'>
                            {`price -INR ${props.price}`}
                            {/* <div>link</div> */}
                        </div>
                        <div className='mr-2 border border-white inline-block mb-1'> certification - 1 month</div>
                        <div className='mr-2 border border-white inline-block mb-1'> eligibility - 1st year</div>
                        {/* // add a borcher for the training info- i option */}
                    </div>
                    <div className='w-1/2 flex justify-end items-center'>
                        <button className='book pr-1 pl-1' onClick={props.onBook}>
                            book
                        </button>
                    </div>
                </div>
                <div className='    '> info - value </div>
            </div>
        </div>
        // SkillONN
    )
}
