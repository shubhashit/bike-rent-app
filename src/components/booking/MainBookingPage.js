import React from 'react'
import Body from '../body/Body'
import Header from './Header'
import Bike from './Bike'
import './MainBookingPage.css'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {app} from '../backend/firebase'

export default function MainBookingPage() {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);console.log(e.target[0]);
    if(!e.target[4].files[0]){
      return ;
    }
    const file = e.target[4].files[0];
    const scholarNumber = e.target[0].value;
    console.log('object')

    const storage = getStorage(app);
    const storageRef = ref(storage);
    const fileref = ref(storage, `/files/${scholarNumber}`)
    const uploadTask = uploadBytesResumable(fileref, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.log(error)
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }


  const onBook = (e) => {
    e.preventDefault();
    console.log('object')
    document.getElementById('popup').classList.remove('-top-2/4');
    document.getElementById('popup').classList.add('top-1/3');
  }
  const close =()=>{
    
    document.getElementById('popup').classList.remove('top-1/3');
    document.getElementById('popup').classList.add('-top-2/4');
  }
  return (
    <div id='bookingPage' className='body'>
      {/* <div> */}

        <Header></Header>
        <div className=' m-6 p-1 h-2/4 flex'>
          <Bike onBook={onBook}></Bike>
          <Bike onBook={onBook}></Bike>
          <Bike onBook={onBook}></Bike>
          <Bike onBook={onBook}></Bike>
          <Bike onBook={onBook}></Bike>
        </div>
      {/* </div> */}
      {/* -top-2/4 */}
      <div id='popup' className='border border-white  w-2/6 absolute -top-2/4 left-1/3 popup transition-all ease-in-out' style={{ height: '48%' }}>
        <div className='border border-white h-7 w-7 absolute flex justify-center items-center right-0'>
          <button onClick={close}>
          <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <form className='flex justify-center flex-col items-center' onSubmit={onSubmit}>
          <div className='block text-center'  >

            <h3><strong>Prototype Name
            </strong></h3>
            <div className='mb-2'>

              <span>Booking</span>
            </div>
          </div>
          <div className='flex flex-col  w-3/4 '>
            <input type="text" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center text-black text-center outline-none mb-3 rounded-md h-7  form-control " id="ScholarNumber" placeholder='ScholarNumber' />
            <input type="email" style={{ backgroundColor: 'lightGrey' }} className="outline-none placeholder:text-center text-center text-black mb-3 rounded-md h-7  form-control " id="email" aria-describedby="emailHelp" placeholder='Email' />
            <input type="time" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center outline-none text-black mb-3 rounded-md h-7  form-control text-center" id="timing" aria-describedby="emailHelp" placeholder='timing-from' />
            <input type="time" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center outline-none text-black mb-3 rounded-md h-7  form-control text-center" id="timing" aria-describedby="emailHelp" placeholder='timing-to' />
          </div>
          <div className="mb-2 flex justify-center items-center" >
            <input type="file" style={{ display: 'none' }} id="file" />
            <label htmlFor="file" className='flex items-end hover:cursor-pointer'>
              {/* <img className='mx-2' src='' alt="" style={{ height: "32px", width: "32px" }} /> */}
              <i className="fa-solid fa-cash-register mx-2"></i>
              Choose a file
            </label>
          </div>

          <div style={{ display: 'block', textAlign: 'center' }}>
            <button type="submit" className=" book px-1">Done</button>
          </div>

        </form>
      </div>
    </div>
  )
}
