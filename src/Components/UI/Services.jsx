import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FrontEndImg from "../../assets/images/front-end.png";
import BackendImg from "../../assets/images/backend.png";
import UIImg from "../../assets/images/design.png";
import AppsImg from "../../assets/images/apps.png";

const servicesData = [
  {
    title: "Frontend Developer",
    desc: "I create responsive and user-friendly interfaces using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React. My focus is on building smooth, fast, and accessible UIs that work across all devices.",
    img: FrontEndImg,
    aos: "fade-right",
  },
  {
    title: "Backend Developer",
    desc: "I develop secure and scalable backend systems using Java, JSP, Servlets, and Spring Boot. I design RESTful APIs, handle business logic, and integrate with databases to power full-featured applications.",
    img: BackendImg,
    aos: "fade-left",
  },
  {
    title: "Database Management",
    desc: "I work with MySQL to design, manage, and optimize relational databases. From writing complex queries to implementing secure CRUD operations, I ensure the data layer is clean and efficient.",
    img: UIImg,
    aos: "fade-right",
  },
  {
    title: "UI/UX Developer",
    desc: "I design intuitive user experiences with clean layouts and consistent styling. I use modern UI practices to make applications visually appealing and easy to navigate, ensuring a smooth experience for users.",
    img: AppsImg,
    aos: "fade-left",
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const Services = () => {
  const sliderRef = useRef();

  return (
    <section
      id="services"
      className=" py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-orange-100/30 to-transparent"></div>

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-sm">
            What Do I Help
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-lg leading-relaxed">
            I offer end-to-end solutions in web and app development. My goal is
            to turn your ideas into modern, functional, and user-centric digital
            experiences.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-orange-500 rounded-full z-0"></div>
          <div className="flex flex-col gap-24 relative z-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`flex md:flex-row items-center justify-between gap-8 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  data-aos={service.aos}
                  className="w-full md:w-[48%] p-6 sm:p-8 rounded-2xl bg-white/30 backdrop-blur-lg shadow-xl border border-orange-200 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold mb-3 text-orange-700 group-hover:text-orange-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-7 group-hover:text-gray-800">
                    {service.desc}
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
                  <div className="bg-orange-600 border-4 border-white w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <Slider ref={sliderRef} {...sliderSettings}>
            {servicesData.map((service, index) => (
              <div key={index} className="px-3">
                <div className="bg-white/50 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-orange-200">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="bg-orange-500 p-4 rounded-full shadow hover:animate-bounce">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-8 h-8"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-orange-700">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
