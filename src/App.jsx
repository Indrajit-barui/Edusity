import { AboutUs } from "./Component/About us/AboutUs"
import { Campus } from "./Component/Campus/Campus"
import { Home } from "./Component/Home/Home"
import { Program } from "./Component/Program/Program"
import { Testimonials } from "./Component/Testimonial/Testimonials"


function App() {
  return (
    <div className="min-h-screen  ">
      <Home/>
      <div className="px-5 md:px-20">
       <Program/>
       <AboutUs/>
       <Campus/>
       <Testimonials/>
      </div>
     
     
    </div>
  )
}

export default App