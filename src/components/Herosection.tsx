export default function Herosection() {
  return (
    // <div className=" border border-[rgba(225,225,225,0.1)] text-white h-[40vh] mt-20 rounded-xl p-5">
    <div className=" flex flex-col justify-between  gap-y-5 mt-20 text-white overflow-hidden rounded-xl bg-slate-900/.1 p-8 md:p-12 border border-slate-800  md:h-[40vh] bg-[url('https://i.pinimg.com/1200x/7d/53/a1/7d53a136a35e8f6fae0d376cec4f1347.jpg')] bg-no-repeat bg-cover bg-center ">
        <div className=" flex flex-col gap-3 ">
            <p className=" first-letter:capitalize text-5xl font-bold text-shadow-gray-900">
                projet tutore group 822
            </p>
            <p className=" md:text-2xl  max-w-[800px] text-shadow-4xl">
                la galerie de projects du groupe 822, explorez les projets de vos camarades et trouvez l'inspiration pour votre propre projet de fin d'etude
            </p>
        </div>
       <div className=" flex gap-x-3 flex-col gap-y-3 md:flex-row">
         <button className=" border border-[rgba(0,0,0,.1)] px-4 py-1 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-600">this is the place</button>
        <button className="bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 backdrop-blur-sm transition-all">Trending Now</button>
       </div>
    </div>
  )
}

