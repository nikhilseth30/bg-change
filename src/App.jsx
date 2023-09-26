import React, { useState } from 'react'


const App = () => {
  const [ color, setColor ] = useState("#10b981")
  
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>

      <h1 className=' text-white justify-center text-center outline-none px-24 py-12 '>Color changes</h1>

      <div className='fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2 '>
        
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'> 
      <button onClick={() => setColor("red")} 
      className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
      style={{backgroundColor: "red"}}
      >Red
      </button>
      <button 
      onClick={() => setColor("green")}
      className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
      style={{backgroundColor: "green"}}
      >Green
      </button>
      <button 
      onClick={() => setColor("blue")}
      className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
      style={{backgroundColor: "blue"}}
      >blue
      </button>
      <button 
      onClick={() => setColor("#fbbf24")}
      className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
      style={{backgroundColor: "#fbbf24"}}
      >Amber
      </button>

      <button 
      onClick={() => setColor("#5eead4")}
      className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
      style={{backgroundColor: "#5eead4"}}
      >Teal
      </button>
      <button 
      onClick={() => setColor("#67e8f9")}
      className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
      style={{backgroundColor: "#67e8f9"}}
      >Cyan
      </button>
      <button 
      onClick={() => setColor("#a78bfa")}
      className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
      style={{backgroundColor: "#a78bfa"}}
      >Violet
      </button>
        </div>  
        
      </div>
        
    </div>
  )
}

export default App