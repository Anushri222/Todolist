"use client"
import React, { useState } from 'react';

const page = () => {
  const [title,settile] = useState("")
  const [desc,setdesc] = useState("")
  const [mainTask,setmainTask] = useState("")

  const submitHandler = (e)=>{
  e.preventDefault();  // Page Relode hone se rukata hei
   setmainTask([...mainTask,{title,desc}]);

  /* console.log(title)
  console.log(desc) */
  settile("") 
  setdesc("")
  console.log(mainTask) 
  };
const deleteHandler =(i) =>{
  let copyTask = [...mainTask]
  copyTask.splice (i,1)
  setmainTask(copyTask)
}

  let renderTask = <h2>No Task Avilable</h2>;


  if (mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
       <li key={i} className="flex items-center justify-between mb-5">
         <div className="flex items-center justify-between mb-5 w-2/3">
       <h5 className='text-2xl font-serif'>{t.title}</h5>
       <h6 className='text-xl font-extralight'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}
      className="bg-red-600 text-white px-4 py-2 rounded font-bold">Delete</button>
       </li>
   );
   });
   
  }

  return (
    <>
    <h1 className='bg-black text-white font-mono p-5 
    text-5xl font-bold text-center' >Anushri's Todo List</h1>

    <form onSubmit={submitHandler}>
      <input type="text" className='text -2xl  
      m-5 px-4 py-2 border-zinc-800 border-2' 
      placeholder='Enter Task Here'
      value={title}
      onChange={(e)=>{
      settile(e.target.value)
      }} 
      />
       <input type="text" className='text -2xl  
      m-5 px-4 py-2 border-zinc-800 border-2' 
      placeholder='Enter Discipation Here'
      value={desc}
      onChange={(e)=>{
     setdesc(e.target.value)}}
      />
      <button className='bg-black text-white px-4 py-3 font-bold rounded font-mono'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
     <ul>
      {renderTask}
     </ul>
    </div>
        </>
  )
}

export default page