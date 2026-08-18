import video1 from '../../assets/Video/college-video-6XtGR-D3.mp4'
import videoThumbnail from '../../assets/images/videoThumbnail.jpeg'

export const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-25 gap-10 px-6 md:px-15 lg:px-20 items-center">

      <div className="flex flex-col gap-1 order-1 md:order-2">
        <p className="text-[#212EA0] font-bold text-sm mb-2 tracking-wide">ABOUT UNIVERSITY</p>
        <p className="text-4xl md:text-5xl font-bold mb-3 text-[#0A0A3C]">
          Nurturing Tomorrow's Leaders Today
        </p>

        <p className="text-gray-500">
          Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <br />
        <p className="text-gray-500">
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <br />
        <p className="text-gray-500">
          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto order-2 md:order-1">
        <video
          src={video1}
          controls
          poster={videoThumbnail}
          className="rounded-2xl w-full aspect-video object-cover"
        ></video>
      </div>

    </div>
  )
}