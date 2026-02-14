
const BtnFilter = () => {
const project_author: string[] = [
    "dan",
    "franck",
    "victor"
]
  return (
    <div className=" flex items-center ">
     <div className=" flex items-center gap-2">
        {project_author.map((author:string) =>( <button
        key={author}
        className=" bg-blue-600 hover:bg-blue-700 active:bg-blue-600 px-3 py-1 text-white cursor-pointer rounded-full"
      > {author} </button>))}
     </div>
    </div>
  )
}

export default BtnFilter
