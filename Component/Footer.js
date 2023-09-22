import React from 'react'

const Footer = (props) => {
    console.log(props)
  return (
    
    <div className='h-10 px-5 bg-green-400 flex items-center justify-between'>
    <h2>@Copyright, All rights reserved</h2>
    <div className='flex gap-9'>
        <h4>{props.cook}</h4>
        <h4>Security Policy</h4>
        <h4>Disclaimer</h4>
        
          </div>
          </div>
          
  )
}

export default Footer