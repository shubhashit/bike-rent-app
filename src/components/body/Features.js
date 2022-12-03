import React from 'react'
import './style.css'

export default function Features(props) {
  function animateFeatures(){
    console.log('features');
    setTimeout(() => {
      const a = document.getElementById('logo');
      const b = document.getElementById('image');
      
      console.log(a);
      console.log(b);
      document.getElementById('image').addEventListener('mouseover',()=>{
        console.log('mouseover');
        document.getElementById(`feature-${props.num}`).style.top = `${props.top}`
        document.getElementById(`feature-${props.num}`).style.right = `${props.right}`
        document.getElementById(`feature-${props.num}`).classList.remove('scale-0');
      })
      document.getElementById('image').addEventListener('mouseout',()=>{
        console.log('mouseover');
        document.getElementById(`feature-${props.num}`).style.top = `30%`
        document.getElementById(`feature-${props.num}`).style.right = `20%`
        document.getElementById(`feature-${props.num}`).classList.add('scale-0');
      })

    }, 200);
  }
  animateFeatures();
  return (
      <div id={`feature-${props.num}`}  className='absolute top-0  rounded-full w-32 h-32 flex items-center flex-col justify-center features scale-0 transition-all ease-in-out hover:scale-125 hover:z-40 hover:font-bold featureclass' style={{top:`30%`, right:`20%`}}>
          {/* <h1>Home</h1> */}
          <p className='text-sm text-center pr-1 pl-1' >{props.content}</p>

          {/* 2 offline training courses internship mentorship and much more
          3 one to one mentroship from college aluminies and seniors 
          4 customized timeline and per achadmic convinence 
          5 boost your CV with projects and reports */}
      </div>
  )
}
