'use client'
import React, { useEffect, useState } from 'react';

function LeadPage() {

  const [LeadData,setLeadData]=useState([])
  const [search,setSearch]=useState("")

  const handleLead = async()=>{

    const response = await fetch('/api/Lead',{
      method:'GET'
    })

    const data =  await response.json()

    setLeadData(data)
    console.log(data)


  }

  const handleLeadStatus = async(LeadId,status)=>{

    const response = await fetch('/api/Lead',{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({LeadId,LeadStatus:status})
    })

    const data = await response.json()
    console.log(data)


    setLeadData((prev)=>(
      prev.map((item)=>
        item._id === LeadId ?  { ...item, LeadStatus: status } : item
      )
    ))

   

  }



  useEffect(()=>{
    handleLead()
  },[])


  return (

    <>
    
    <section className="min-h-screen bg-black text-white px-6 md:px-10 py-10">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black">
          LEAD <span className="text-red-500">MANAGEMENT</span>
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and track your gym leads
        </p>
      </div>


      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          className="w-full md:w-96 bg-[#111111] border border-gray-800 rounded-lg px-5 py-3 text-white outline-none focus:border-red-500"
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>


      {/* Table */}
      <div className="max-h-[500px] overflow-y-auto overflow-x-auto bg-[#111111] border border-gray-800 rounded-xl">

        <table className="w-full min-w-[700px] text-left">

          {/* Table Head */}
          <thead className="border-b border-gray-800  sticky top-0 z-10 bg-[#111111]" >
            <tr>
              <th className="px-6 py-4 text-gray-400 font-semibold">
                Name
              </th>

              <th className="px-6 py-4 text-gray-400 font-semibold">
                Plan
              </th>

              <th className="px-6 py-4 text-gray-400 font-semibold">
                Phone Number
              </th>

              <th className="px-6 py-4 text-gray-400 font-semibold">
                Status
              </th>
            </tr>
          </thead>


          {/* Table Body */}
          <tbody >


            {

              

              LeadData.length>0?

              LeadData.filter((item)=>
                item.userName?.replace(/\s/g, "").toLowerCase().includes(search.replace(/\s/g, "").toLowerCase()) ||
                item.PhoneNumber?.replace(/\s/g, "").toLowerCase().includes(search.replace(/\s/g, "").toLowerCase())
            )
              
              .map((item)=>(
                  <tr key={item._id} className="border-b border-gray-800 hover:bg-[#181818]">

              <td className="px-6 py-5 font-medium">
                {item.userName}
              </td>

              <td className="px-6 py-5 text-gray-400">
                {item.Plan}
              </td>

              <td className="px-6 py-5 text-gray-400">
                {item.PhoneNumber}
              </td>

              <td className="px-6 py-5">
               <select className="border rounded px-2 py-1 bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-sm" onChange={(e)=>handleLeadStatus(item._id,e.target.value)}  value={item.LeadStatus}
  disabled={item.LeadStatus !== "New" }>
                    <option>New</option>
                   
                    <option>Contacted</option>
                   
                  </select>
              </td>

                

            </tr>
              )): (
    <tr>
      <td colSpan="4" className="text-center">
        No leads found
      </td>
    </tr>
              )


            }

            

          </tbody>

        </table>

      </div>

    </section>
    
    
    </>
   
  );
}

export default LeadPage;
