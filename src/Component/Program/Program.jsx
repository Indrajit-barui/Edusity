import graduate1 from '../../assets/images/graduate1.jpeg'
import graduate2 from '../../assets/images/graduate2.jpeg'
import graduate3 from '../../assets/images/graduate3.jpeg'

export const Program = () => {
  return (
    <div className="flex flex-col mt-10">
        <div className="flex flex-col justify-center  text-center">
            <p className="text-sm md:text-xl text-[#000F38] font-medium">OUR PROGRAM</p>
            <p className="text-2xl md:text-3xl font-bold">What We Offer</p>
        </div>

        <div className="grid grid-cols-1 w-full  px-5 gap-6  md:grid-cols-3 mt-20">
            <div className='overflow-hidden rounded-2xl group relative'>
              <img src={graduate1} alt="image1" srcset="" className='rounded-2xl w-full aspect-[4/3] object-cover transition duration-300 hover:scale-105' />
              <div className="
    absolute inset-0
    bg-indigo-950/70
    flex flex-col items-center justify-center
    text-white
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500 ease-in-out
  ">
    
    <i className="fa-solid fa-graduation-cap text-4xl mb-4"></i>

    <h3 className="text-xl font-semibold">
      Post Graduation
    </h3>

                </div>
            </div>
            <div className='overflow-hidden rounded-2xl group relative'>
              <img src={graduate2} alt="image1" srcset="" className='rounded-2xl w-full aspect-[4/3] object-cover transition duration-300 hover:scale-105' />
              <div className="
    absolute inset-0
    bg-[#212EA0]/80
    flex flex-col items-center justify-center
    text-white
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500 ease-in-out
  ">
    
    <i className="fa-solid fa-graduation-cap text-4xl mb-4"></i>

    <h3 className="text-xl font-semibold">
      Graduation Degree
    </h3>

               </div>
            </div>
            <div className='overflow-hidden rounded-2xl group relative'>             
             <img src={graduate3} alt="image1" srcset="" className='rounded-2xl w-full aspect-[4/3] object-cover transition duration-300 hover:scale-105' />
             <div className="
    absolute inset-0
    bg-[#212EA0]/70
    flex flex-col items-center justify-center
    text-white
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500 ease-in-out
  ">
    
    <i className="fa-solid fa-graduation-cap text-4xl mb-4"></i>

    <h3 className="text-xl font-semibold">
      Masters Degree
    </h3>

       </div>
             </div>
        </div>
    </div>
  )
}
