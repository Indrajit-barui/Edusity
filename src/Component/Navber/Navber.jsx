import { useState } from "react"

const Navber = () => {
  const [click,isClick]=useState(false)
  const navLink=["Home","Program","About Us","Campus","Testimonials"];
  return (
    <nav className="fixed w-full h-15  flex justify-between items-center md:px-15">
      
      <div className="flex items-center gap-2 text-white justify-between w-full">
        <div className="px-2">
        <i className="text-2xl fa-solid fa-graduation-cap md:text-4xl"></i>
        <span className="text-2xl md:text-4xl font-bold">Educity</span>
        </div>
     
        <div onClick={()=>isClick(!click)} className="md:hidden text-3xl">{
          click?<i className="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>
          }

          {
            click && (
              <div className="absolute  top-full h-[calc(100vh-3.75rem)] bg-[#212EA0] w-1/2 z-50 right-0">
          <ul className="flex flex-col text-white gap-8  pl-6 text-sm pt-10 font-bold">
         {
          navLink.map((items)=>(
            <li key={items} className="cursor-pointer">{items}</li>
          ))
         }
          
        </ul>

            <button className="text-xl px-4 py-2 border border-black rounded-full bg-white  text-black mt-5 ml-5">Contact us</button>
              </div>
            )
          }
          
        </div>

      </div>
      {/* Desktop */}
      <div className="hidden md:flex w-[100%] items-center gap-5">
        <ul className="flex gap-10 text-white font-bold">
              {
          navLink.map((items)=>(
            <li key={items} className="cursor-pointer">{items}</li>
          ))
         }
        </ul>

        <button className=" px-4 py-2 border border-black rounded-full bg-white  text-black flex items-center justify-center text-sm">Contact us</button>
      </div>
    </nav> 
  )
}

export default Navber