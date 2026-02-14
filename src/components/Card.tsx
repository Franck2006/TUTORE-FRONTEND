const Card = () => {
const projects: string[] = [
    "","","","",""
]
  return (
    <>
        {projects.map( (project: string): any => (
        <div 
            className="group bg-slate-800/40 border  border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            key={project}
        >
            <div className="aspect-video relative overflow-hidden  bg-slate-800">
                <img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Code editor interface with syntax highlighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsD07LnZVZmqEqM-9cB5D4MUmra8_tNQZ8vklFnGFAdVe4VOEmFr-o7qYaiVSmdxCJJX-jgRW8WOEeYveRBYIsZJZ6o2RH3jUKaxgOxShwcoJW-gGml46KvYZeQ1MENNBgWypGFJn-558CxRDXP1aUgG8kiSRlUuKpkCUdafFk77Q4s9IaGxwEXUbAVlSTONjDMwtzaWLCU4wJN7aZbDNqXz7evTHuv4K1JtQqhL2AhXNizoHGCsCW80FuBCCmzBwKCIvQaXDFmxc"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-medium bg-primary/80 backdrop-blur px-2 py-1 rounded">Next.js + Tailwind</span>
                </div>
            </div>
            <div className="p-5 flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg  text-white group-hover:text-primary transition-colors">Skyline Analytics</h3>
                    <span className="material-icons text-slate-400 hover:text-primary cursor-pointer text-xl">bookmark_border</span>
                </div>
                <p className=" text-slate-400 text-sm line-clamp-2 leading-relaxed">A high-performance real-time data visualization dashboard for distributed cloud systems and microservices.</p>
            </div>
            <div className="px-5 pb-5 flex items-center justify-between mt-auto border-t  border-slate-800/50 pt-4">
                <div className="flex items-center gap-2">
                    <img className="w-8 h-8 rounded-full border  border-slate-700" data-alt="Male developer profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlVTP1UhOVaD0BYcfcJZlDU4CWtumGoryQuZSrRK6gmfstHJLol4o6bGHzbeZKORbvjDmcJno8FHhREO1gm_EFwIi5DrPTZhGlynOiC_Hxob3oOdeeCtsPexIEcgpqtz1FuuoEkCUmbs0KydLRGeFn4SvXRnAgRI27QzAhQcJfkpqamaRgTdLg2ZpPtacF9Q3h060-GiVxH3e9D8C4YzXxsWq3PgrulqR58B9NdHT6AJSv-yhN9GxV0vPEyPLQMRVB-Y5cT9FJQ-g"/>
                    <span className="text-xs font-medium  text-slate-400">Alex Rivers</span>
                </div>
                <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-all">View Project</button>
            </div>
        </div>
        ))}
    </>
  )
}

export default Card
