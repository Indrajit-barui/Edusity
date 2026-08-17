import HeroImage from "../../assets/images/Hero.jpeg";
import Navbar from "../Navber/Navber";

export const Home = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-indigo-950/70"></div>

      {/* Content */}
      <div className="relative z-10">

        <Navbar />

        {/* Hero Content */}
        <div className="
          flex
          flex-col
          items-center
          text-center
          text-white
          px-4
          pt-32
          md:pt-40
          gap-4
        ">

          {/* Heading */}
          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            max-w-5xl
          ">
            We Ensure better education
            <br />
            for a better world
          </h1>

          {/* Description */}
          <p className="
            max-w-3xl
            text-sm
            md:text-base
            font-normal
          ">
            Our cutting-edge curriculum is designed to empower students
            with the knowledge, skills, and experiences needed to excel
            in the dynamic field of education
          </p>

          {/* Button */}
          <button className="
            flex
            items-center
            gap-2
            rounded-full
            bg-white
            px-6
            py-3
            text-black
          ">
            Explore more
            <i className="fa-solid fa-arrow-right"></i>
          </button>

        </div>

      </div>
    </section>
  );
};