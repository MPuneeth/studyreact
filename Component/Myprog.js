"use client"
import React, { useState } from 'react'
import Header from '@/Component/Header'
import Footer from '@/Component/Footer'

const page = () => {

  const [text1,settext] = useState("!")
  const [user, setUser] = useState("Home")
  const [cook, setcook] = useState("Cookies")
  return (
    <>
    <Header user={user}/>
   
    <h1 className='font-bold text-xl text-blue-600'>Hi Puneeth</h1>
    <div> how are you doin' today? {text1} </div>
    <button className='bg-gray-400 px-5 py-2 rounded-full mt-5 text-white' onClick={()=>{
     settext(<h4 className='font-extrabold font-serif text-green-600'>I am Fine, Thank you</h4>)
    
    }}>Update</button>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    <Footer cook={cook}/>
    </>
    
  )
}

export default page