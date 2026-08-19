import { useState } from "react"
import { campusImages } from "../../Data/CampusImage"

export const Campus = () => {
    const [showAll,setShowAll]=useState(false);

    const imagesToshow=showAll?campusImages:campusImages.slice(0,4);
  return (
    <section className="w-full mt-20 flex flex-col justify-center">
        {/* text section */}
        <div className="flex flex-col items-center gap-2">
             <p className="text-xl font-bold text-[#5346A0] md:text-2xl">Gallery</p>
             <p className="text-3xl font-bold text[#000F38]">Campus Photos</p>
         
        </div>
        
        {/* image section */}
        <div className="grid grid-cols-2  gap-2 gap-y-6  md:grid-cols-4 mt-20 ">
            {
              imagesToshow.map((image,index)=>(
                <img key={index} src={image} alt="" srcset="" className="w-full aspect-[3/4] object-cover rounded-2xl"/>
              ))
            }
        </div>
        {/* button */}

        <div className="flex justify-center mt-8">
        <button onClick={()=>setShowAll(!showAll)}
           className="bg-[#212EA0] text-white px-6 py-3 rounded-full"
          >{showAll?"Show  less":  <>
      See more here <i className="fa-solid fa-arrow-right"></i>
    </>}</button>
        </div>


    </section>
  )
}
