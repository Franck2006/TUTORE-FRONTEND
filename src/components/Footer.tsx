
export default function Footer() {
    const date_time: Date= new Date()
  return (
   <footer className="border-t border-slate-800 mt-20 bg-slate-800/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
        <span className="material-icons text-white text-sm">code</span>
        </div>
        <span className="text-xl font-bold tracking-tight  text-white">DevGallery</span>
        </div>
        <p className=" text-slate-400 max-w-sm">The world's largest community of developers sharing their creation and learning from one another.</p>
        </div>
        <div>
        <h4 className="font-bold  text-white mb-4">Explore</h4>
        <ul className="space-y-2 text-sm  text-slate-400">
        <li><a className="hover:text-primary" href="#">Featured Projects</a></li>
        <li><a className="hover:text-primary" href="#">Recent Submissions</a></li>
        <li><a className="hover:text-primary" href="#">Top Contributors</a></li>
        <li><a className="hover:text-primary" href="#">Showcase Guidelines</a></li>
        </ul>
        </div>
        <div>
        <h4 className="font-bold  text-white mb-4">Connect</h4>
        <ul className="space-y-2 text-sm  text-slate-400">
        <li><a className="hover:text-primary" href="#">Twitter / X</a></li>
        <li><a className="hover:text-primary" href="#">GitHub</a></li>
        <li><a className="hover:text-primary" href="#">Discord Community</a></li>
        <li><a className="hover:text-primary" href="#">Newsletter</a></li>
        </ul>
        </div>
        </div>
        <div className="pt-8 border-t  border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400">© {date_time.getFullYear()} DevGallery. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-slate-400">
        <a className="hover:text-primary" href="#">Privacy Policy</a>
        <a className="hover:text-primary" href="#">Terms of Service</a>
        <a className="hover:text-primary" href="#">Cookie Policy</a>
        </div>
        </div>
        </div>
    </footer>
  )
}
