import Herosection from "./components/Herosection";
import Navbar from "./components/navbar";
import BtnFilter from "./components/BtnFilter";
import ProjectPannel from "./components/ProjectPannel";
import Reload from "./components/Reload"
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar/>
      <div className=" px-1 md:px-12  flex flex-col gap-10">
        <Herosection/>
        < BtnFilter/>
        < ProjectPannel />
        <Reload/>
        <Footer/>
      </div>
    </>
  )
}

export default App
