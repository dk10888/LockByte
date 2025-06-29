import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [passwordArray, setPasswordArray] = useState([]);
  const [form, setForm] = useState({ site: '', username: '', password: '' });
  const [search, setsearch] = useState('');
 const getpassword =async() => { 
 let req= await fetch("http://localhost:3000/")
 let passwords=await req.json()
  setPasswordArray(passwords);
  console.log(passwords)

 }
  useEffect(() => {
    getpassword();
     
    
  }, []);

  const savePassword = async () => {
  const id = form.id || uuidv4();  // ✅ Keep old ID if editing
  const newEntry = { ...form, id };

  // ✅ If editing, delete the old entry first
  if (form.id) {
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: form.id })
    });
  }

  await fetch("http://localhost:3000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEntry)
  });

  // ✅ Replace old entry in UI
  setPasswordArray([...passwordArray.filter(i => i.id !== id), newEntry]);
};


  const deletePassword = async(id) => {
    if (confirm('Requested to delete the password')) {
      const updatedArray = passwordArray.filter(item => item.id !== id);
      setPasswordArray(updatedArray);
let res=await fetch("http://localhost:3000/", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({id})
});    
  toast.success('Password deleted!', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark'
      });
    }
  };

  const editPassword = (id) => {
    const target = passwordArray.find(i => i.id === id);
    setForm(target);
    setPasswordArray(passwordArray.filter(i => i.id !== id));
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Text copied to clipboard!', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark'
      });
    } catch (error) {
      toast.error('Failed to copy text', { position: 'top-right' });
    }
  };

  const showPassword = () => {
    if (ref.current.src.includes('/icons/hidden.png')) {
      ref.current.src = '/icons/eye.png';
      passwordRef.current.type = 'password';
    } else {
      ref.current.src = '/icons/hidden.png';
      passwordRef.current.type = 'text';
    }
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   const filtered=passwordArray.filter(
    item=>item.site.toLowerCase().includes(search.toLowerCase()) ||
    item.username.toLowerCase().includes(search.toLowerCase())
   )
  return (
    <>
      <ToastContainer transition={Bounce} />
      <div className="absolute inset-0 -z-10 h-full w-full bg-red-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-red-500 opacity-20 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-red-700">&lt;</span>Lock<span className="text-red-700">Byte&gt;</span>
        </h1>

        <div className="text-center">
          <span className="text-slate-800 text-lg font-bold underline decoration-red-700 decoration-[2px]">Manage yo</span>
          <span className="text-red-700 text-lg font-bold underline decoration-black decoration-[2px]">ur Password</span>
        </div>

        <div className="text-white flex flex-col items-center p-4 gap-6">
          <input onChange={handleForm} value={form.site} name="site" type="text" placeholder="Enter website URL" className="text-black rounded-full border border-black w-full p-2" />

          <div className="flex flex-col md:flex-row w-full gap-4">
            <input onChange={handleForm} value={form.username} name="username" type="text" placeholder="Enter Username" className="text-black rounded-full border border-black w-full p-2" />

            <div className="relative w-full">
              <input ref={passwordRef} onChange={handleForm} value={form.password} name="password" type="password" placeholder="Enter Password" className="text-black rounded-full border border-black w-full p-2" />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                <img ref={ref} src="/icons/eye.png" alt="eye" className="w-5 h-5 md:w-6 md:h-6" />
              </span>
            </div>
          </div>

          <button onClick={savePassword} className="flex gap-2 bg-red-400 px-6 py-2 rounded-full hover:bg-red-300 border-2 border-red-600 text-black">
            <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="loop" delay="600" />
            Add Password
          </button>
        </div>  
        <div className="px-4 mt-6">
         <input  className=" px-2  w-full md:w-1/3 size-10 border border-black rounded-full text-black "  value={search} type="text" placeholder='Search by username or site' onChange={(e)=>setsearch(e.target.value)}/>

        </div>
        <div className="px-4 mt-6">
          <h2 className="text-red-900 font-bold text-xl pb-2">Passwords:--</h2>
          {filtered.length === 0 ? (
            <div>No Such Passwords Yet</div>
          ) : (
            
            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                <thead className="bg-red-800 text-white">
                  <tr>
                    <th>Site</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-red-100">
                  {filtered.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-white p-2">
                        <div className="flex items-center justify-center gap-2">
                          <span onClick={() => copyText(item.site)} className="cursor-pointer">
                            <lord-icon src="https://cdn.lordicon.com/xuoapdes.json" trigger="hover" style={{ width: '20px', height: '20px' }} />
                          </span>
                          <a href={item.site} target="_blank" rel="noreferrer" className="text-center truncate max-w-[100px]">{item.site}</a>
                        </div>
                      </td>
                      <td className="border border-white text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span onClick={() => copyText(item.username)} className="cursor-pointer">
                            <lord-icon src="https://cdn.lordicon.com/xuoapdes.json" trigger="hover" style={{ width: '20px', height: '20px' }} />
                          </span>
                          {item.username}
                        </div>
                      </td>
                      <td className="border border-white text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span onClick={() => copyText(item.password)} className="cursor-pointer">
                            <lord-icon src="https://cdn.lordicon.com/xuoapdes.json" trigger="hover" style={{ width: '20px', height: '20px' }} />
                          </span>
                          {"*".repeat(item.password.length)}
                        </div>
                      </td>
                      <td className="border border-white text-center">
                        <span onClick={() => editPassword(item.id)} className="cursor-pointer mx-1">
                          <lord-icon src="https://cdn.lordicon.com/ntjwyxgv.json" trigger="hover" style={{ width: '20px', height: '20px' }} />
                        </span>
                        <span onClick={() => deletePassword(item.id)} className="cursor-pointer mx-1">
                          <lord-icon src="https://cdn.lordicon.com/xyfswyxf.json" trigger="hover" style={{ width: '20px', height: '20px' }} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
