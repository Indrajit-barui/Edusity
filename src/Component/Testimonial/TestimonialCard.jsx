
export const TestimonialCard = ({image,name,location,review}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-h-58 mt-15">
        <div className="md:flex items-center ">
            <img src={image} alt="" srcset="" className="w-16 h-16 rounded-full object-cover border-3 border-[#2A36A2]"/>
            <div>
                <h3 className="font-bold">
                    {name}
                </h3>
                <p className="text-gray-500">{location}</p>
            </div>
        </div>
        <p className="mt-5 text-gray-500">{review}</p>
    </div>
  );
};
