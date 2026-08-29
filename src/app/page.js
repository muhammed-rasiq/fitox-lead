"use client";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";


export default function Home() {

  const [inputData,setInputData]=useState({
    userName:"",
    password:""
  })


  const handleLogin = async()=>{

    const response = await fetch('/api/Home',{

      method:"POST",
      headers:{
         "Content-Type": "application/json"
      },
      body:JSON.stringify(inputData)

    })

    const data =  await response.json()
    console.log(data)

  if (data.admin?.role === "Admin") {
    document.cookie = "role=admin; path=/";

     window.location.href = "/Lead";
}else{
  alert('invalid username or pasword')
}




  }


  return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        


        {/* Login Form */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8">

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
             user Name
            </label>

            <input
              type="email"
              placeholder="Enter your user name"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
              onChange={(e)=>setInputData({...inputData,userName:e.target.value})}
            />
          </div>


          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
              onChange={(e)=>setInputData({...inputData,password:e.target.value})}
            />
          </div>


          {/*  Forgot */}
          {/* <div className="flex items-center justify-between mb-6 text-sm">

           

            <a
              href="#"
              className="text-red-500 hover:text-red-400"
            >
              Forgot Password?
            </a>

          </div> */}


          {/* Login Button */}
          <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-bold text-lg transition cursor-pointer" onClick={handleLogin}>
            Login
          </button>


         

        </div>

      </div>

    </section>
   
  );
}
