

export default function Home() {
  return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        


        {/* Login Form */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8">

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition"
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
          <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-bold text-lg transition">
            Login
          </button>


         

        </div>

      </div>

    </section>
   
  );
}
