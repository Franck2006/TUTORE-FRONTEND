export default function Herosection() {
  return (
    // <div className=" border border-[rgba(225,225,225,0.1)] text-white h-[40vh] mt-20 rounded-xl p-5">
    <div className=" flex flex-col justify-between  mt-20 text-white overflow-hidden rounded-xl bg-slate-800/50 p-8 md:p-12 border border-slate-800  h-[40vh] ">
        <div className=" flex flex-col gap-3 ">
            <p className=" first-letter:capitalize text-5xl font-bold ">
                this is the site of developers 
            </p>
            <p>
                this is the description
            </p>
        </div>
       <div className=" flex gap-x-3">
         <button className=" border border-[rgba(0,0,0,.1)] px-4 py-1 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-600">this is the place</button>
        <button className="bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 backdrop-blur-sm transition-all">Trending Now</button>
       </div>
    </div>
  )
}

