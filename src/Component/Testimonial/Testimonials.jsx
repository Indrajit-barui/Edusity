import { useState } from 'react';
import {testimonials} from '../../Data/Testimonial';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
  const [index,setIndex]=useState(0);
  return (
    <section className="w-full mt-20 flex flex-col justify-center">
        {/* text section */}
        <div className="flex flex-col items-center">
            <p className="text-xl text-[#4847AA] font-medium">TESTIMONIALS</p>
            <p className="text-3xl font-bold md:text-4xl">What Student Says</p>
        </div>
{/* Card section */}
<div className='flex items-center'>
  <div className='h-10 w-10 md:h-13 md:w-13 shrink-0 rounded-full flex justify-center items-center bg-[#212EA0] text-white text-xl' onClick={()=>setIndex((index+2)%testimonials.length)}>
    <i className="fa-solid fa-arrow-left "></i>
  </div>

       <div key={index} className='grid grid-cols-1 md:grid-cols-2  gap-x-5 md:gap-x-10 max-w-5xl mx-auto  w-full animate-pulse'>
       {
        testimonials.slice(index,index+2).map((students)=>(
          <TestimonialCard
           key={students.id}
           image={students.image}
           name={students.name}
           location={students.location}
           review={students.review}
          
          />
        ))
       }

       </div>
  <div className='h-10 w-10 md:h-13 md:w-13 shrink-0 rounded-full flex justify-center items-center bg-[#212EA0] text-white text-xl' onClick={()=>setIndex((index-2+testimonials.length)%testimonials.length)}>
    <i className="fa-solid fa-arrow-right "></i>
  </div>  
</div>

    </section>
  )
}
