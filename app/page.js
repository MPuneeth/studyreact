
"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask, {title, desc}])
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
    console.log(maintask) }

    const deletehandler = (i) => {
      let copytask = [...maintask]
      copytask.splice(i)
      setmaintask(copytask)
    }
      

      let rendertask = <h2>No Task Available</h2>

      if(maintask.length>0){
      rendertask = maintask.map((t,i)=> {
      return(
      <li key ={i}className='flex items-center justify-between mb-5'>
      <div className='flex items-center justify-between mb-5 w-11/12'>
     <h5 className='text-xl font-bold'>{t.title}</h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
      <button onClick={() => {
                 deletehandler(i)
      }}  className='text-white bg-red-400 px-4 py-2 rounded font-bold'>Delete</button>
    </div>
    </li>
)

      })}
  return (
    <>
    <h1 className='bg-black text-white text-5xl text-center font-bold'>Myi Todo List</h1>
    <form onSubmit={submithandler}>
      <input type = "text" className="text-2xl border-zinc-700 border-2 m-10 px-4 py-2"
      placeholder='Enter Title here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type = "text" className="text-2xl border-zinc-700 border-2 m-10 px-4 py-2"
      placeholder='Enter Description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-black text-white px-4 py-2 rounded font-bold m-5 text-2xl'>Add Task</button>
      </form>
      <hr></hr>
      <div className='p-8 bg-slate-200'>
           <ul>

            {rendertask}
           </ul>
                          
      </div>
      
      </>
  )
}

export default page 