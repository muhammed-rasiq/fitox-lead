import React from 'react';

function LeadPage() {
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
          className="w-full md:w-96 bg-[#111111] border border-gray-800 rounded-lg px-5 py-3 text-white outline-none focus:border-red-500"
        />
      </div>


      {/* Table */}
      <div className="overflow-x-auto bg-[#111111] border border-gray-800 rounded-xl">

        <table className="w-full min-w-[700px] text-left">

          {/* Table Head */}
          <thead className="border-b border-gray-800">
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
          <tbody>

            {/* Lead 1 */}
            <tr className="border-b border-gray-800 hover:bg-[#181818]">

              <td className="px-6 py-5 font-medium">
                Razip
              </td>

              <td className="px-6 py-5 text-gray-400">
                Premium
              </td>

              <td className="px-6 py-5 text-gray-400">
                +91 98765 43210
              </td>

              <td className="px-6 py-5">
                <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm">
                  New
                </span>
              </td>

            </tr>


            {/* Lead 2 */}
            <tr className="border-b border-gray-800 hover:bg-[#181818]">

              <td className="px-6 py-5 font-medium">
                Arjun
              </td>

              <td className="px-6 py-5 text-gray-400">
                Basic
              </td>

              <td className="px-6 py-5 text-gray-400">
                +91 91234 56789
              </td>

              <td className="px-6 py-5">
                <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
                  Contacted
                </span>
              </td>

            </tr>


            {/* Lead 3 */}
            <tr className="border-b border-gray-800 hover:bg-[#181818]">

              <td className="px-6 py-5 font-medium">
                Adil
              </td>

              <td className="px-6 py-5 text-gray-400">
                Elite
              </td>

              <td className="px-6 py-5 text-gray-400">
                +91 99887 66554
              </td>

              <td className="px-6 py-5">
                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                  Closed
                </span>
              </td>

            </tr>


            {/* Lead 4 */}
            <tr className="hover:bg-[#181818]">

              <td className="px-6 py-5 font-medium">
                Salman
              </td>

              <td className="px-6 py-5 text-gray-400">
                Premium
              </td>

              <td className="px-6 py-5 text-gray-400">
                +91 90123 45678
              </td>

              <td className="px-6 py-5">
                <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm">
                  New
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </section>
    
    
    </>
   
  );
}

export default LeadPage;
