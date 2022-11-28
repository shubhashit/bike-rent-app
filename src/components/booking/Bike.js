import React from 'react'
import bike from './b.webp'

export default function Bike(props) {
    return (
        <div className='border border-white p-2 w-1/5 h-full mr-2'>
            <img className='h-3/5 mb-1' src={bike} alt="" />
            <div>
                <p className='text-sm mb-2'>Lorem. Lorem ipsum dolor sit. Lorem ipsum dolor sit. </p>
                <div className='flex '>

                    <div className='flex text-center flex-col mb-1' >
                        <div className='mr-2 border border-white inline-block mb-1'> price - 1983</div>
                        <div className='mr-2 border border-white inline-block mb-1'> model - ijaeh </div>
                        {/* <div className='mr-2 border border-white inline-block '> info - value </div> */}
                    </div>
                    <div className='w-1/2 flex justify-end items-center'>
                        <button className='book pr-1 pl-1' onClick={props.onBook}>
                            book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
