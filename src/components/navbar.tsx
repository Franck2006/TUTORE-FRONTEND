function Navbar() {
  return (
    <nav className=" flex items-center gap-x-2  md:gap-0 justify-between z-50 md:px-12 border border-[rgba(225,225,225,0.1)] py-1 fixed top-0 left-0 right-0 ">
      <div className=" flex gap-0.5">
        <div className=" capitalize cursor-pointer text-[12px] font-extrabold flex items-center justify-center h-8 w-8 md:h-10 md:w-10 text-white rounded-md bg-blue-900">
          a.v.f
        </div>
        <div className="hidden md:flex flex-col text-[10px] text-white">
          <p>akd</p>
          <p>vic</p>
          <p>fr</p>
        </div>
      </div>

      {/* border-slate-800
      shadow-primary/5
      bg-slate-800
      bg-gradient-to-t from-black/60 to-transparent 
      text-slate-900 */}

      {/* <body class="bg-background-light dark:  dark:text-slate-100 font-display transition-colors duration-300"> */}


      <div className=" h-8 w-64 border border-[rgba(225,225,225,0.1)]  text-gray-500 rounded-md p-2 flex items-center  cursor-pointer gap-1 ">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <span className="">search projects, author</span>
      </div>

      <div>

      </div>

    </nav>
  )
}

export default Navbar
