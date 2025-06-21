import React from 'react'
import { useRef } from 'react'

import { useState } from 'react'
const Manager = () => {
    const ref=useRef()
    const  [form, setform] = useState({site:"",username:"",password:""})
    const savepassword=()=>{
      console.log(form)
    }
    const showpassword=()=>{
        alert("Password shown")
        if(ref.current.src.includes("/icons/hidden.png")){
            ref.current.src="/icons/eye.png" 
        }
       else{ ref.current.src="/icons/hidden.png" }
    }
    const handleform=(e)=>{
         setform({...form,[e.target.name]:e.target.value})
    }
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]"></div></div>
            <div className=" mycontainer">

                <h1 className='text-4xl font-bold text-center'>

                    <span className="text-green-700"> &lt;</span>
                    Lock
                    <span className="text-green-700">Byte&gt;</span>


                </h1>
                <div className='text-center '>
                    <span className='text-slat-800 text-lg
                font-bold underline decoration-green-700 decoration-[2px]'>Manage yo</span>
                    <span className='text-green-700 text-lg
                font-bold underline decoration-black decoration-[2px]'>ur Password</span>
                </div>

                <div className="text-white flex items-center flex-col p-4 gap-8">
                    <input onChange={handleform} values={form.site} className='text-black rounded-full border border-black w-full p-4 py-1' placeholder="Enter website URL" type="text" name="site"  />

                    <div className="flex w-full justify-between gap-8">
                        <input onChange={handleform} value={form.username} placeholder="Enter Username "className='text-black rounded-full border border-black w-full p-4 py-1' type="text" name="username"  />
                        <div className="relative">
                        <input onChange={handleform} value={form.password} placeholder="Enter Password" className='text-black rounded-full border border-black w-full p-4 py-1' type="text" name="password"  />
<span className='absolute right-0 top-1/2 transform -translate-y-1/2 pr-2 cursor-pointer ' onClick={()=>showpassword()}>
  <img ref={ref}src="/icons/eye.png" alt="eye" className="w-5 h-5" />
</span>
                         </div>
                     

                    </div>

   <button onClick={savepassword} className='text-black  flex gap-2 bg-green-400 w-fit px-8 py-2 rounded-full hover:bg-green-300 border-2 border-green-600'>
    <lord-icon
    src="https://cdn.lordicon.com/efxgwrkc.json"
    trigger="hover">
    
</lord-icon>
                            Add Password
                        </button>

                </div>
            </div>


        </>




    )
}
export default Manager