import { AboutUs } from "./Component/About us/AboutUs"
import { Home } from "./Component/Home/Home"
import { Program } from "./Component/Program/Program"


function App() {
  return (
    <div className="min-h-screen  ">
      <Home/>
      <Program/>
      <div className="flex justify-center">
         <AboutUs/>
      </div>
     
    </div>
  )
}

export default App