import React from 'react'

const Navbar = () => {
  return (
   <nav className="bg-slate-800 text-white">
    <div className="p-4 flex justify-between item-center px-4 py-5 mycontainer">
<div className="logo font-bold text-white text-2xl">
   <span className="text-green-700"> &lt;</span>
  Lock
  <span className="text-green-700">Byte&gt;</span>
</div>
   
    <ul  >
        <li className='flex gap-4'>
<a className='hover:font-bold box-border border border-white px-3 py-1 rounded'>
  Home
</a>
            <a className='hover:font-bold box-border border border-white px-3 py-1 rounded' href="">Contact</a>
           <a className='hover:font-bold box-border border border-white px-3 py-1 rounded'>
About</a>
        </li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar