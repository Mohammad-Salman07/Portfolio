// import React, { useState } from "react";
// import HeroImg from "../../assets/images/Hero.jpg";
// import CountUp from "react-countup";

// // Modal Component
// const ResumeModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white w-[90%] md:w-[70%] lg:w-[50%] rounded-xl shadow-lg overflow-hidden relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-3 right-3 text-gray-600 hover:text-orange-600 text-xl"
//           onClick={onClose}
//         >
//           <i className="ri-close-line"></i>
//         </button>

//         {/* Iframe Preview */}
//         <div className="p-4 pt-10">
//           <iframe
//             src="/src/Resume/Mohammad Salman.pdf"
//             className="w-full h-[70vh] border rounded-md"
//             title="Resume Preview"
//           ></iframe>
//         </div>

//         {/* Download Button */}
//         <div className="p-4 border-t flex justify-end">
//           <a
//             href="/src/Resume/Mohammad Salman.pdf"
//             download
//             className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
//           >
//             <i className="ri-download-line mr-1"></i> Download PDF
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Hero = () => {
//   const [showResume, setShowResume] = useState(false);

//   return (
//     <section
//       className="pt-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100"
//       id="about"
//     >
//       <div className="container px-4 mx-auto max-w-[1300px]">
//         <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-between gap-10">
//           {/* Left Content */}
//           <div className="w-full md:w-[50%] min-w-0">
//             <h5
//               data-aos="fade-right"
//               data-aos-duration="1500"
//               className="text-orange-600 font-semibold text-sm tracking-wider uppercase"
//             >
//               Hello Welcome
//             </h5>
//             <h1
//               data-aos="fade-up"
//               data-aos-duration="1500"
//               className="text-3xl sm:text-5xl font-bold text-gray-900 leading-snug mt-4 drop-shadow-md"
//             >
//               I'm Mohammad Salman <br /> Full Stack Developer
//             </h1>

//             <div
//               data-aos="fade-up"
//               data-aos-duration="1800"
//               className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6"
//             >
//               <a href="#contact">
//                 <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-800 transition font-medium flex items-center gap-2 shadow-lg">
//                   <i className="ri-mail-line"></i> Hire me
//                 </button>
//               </a>
//               <button
//                 onClick={() => setShowResume(true)}
//                 className="text-gray-700 font-semibold text-base border-b-2 border-orange-600 hover:text-orange-600 transition"
//               >
//                 <i className="ri-eye-line mr-1"></i> View Resume
//               </button>
//             </div>

//             <p
//               data-aos="fade-left"
//               data-aos-duration="1500"
//               className="text-gray-700 mt-8 text-sm sm:text-base leading-relaxed max-w-md"
//             >
//               <i className="ri-apps-line mr-2 text-lg text-orange-600"></i>
//               Detail-oriented and technically skilled individual with a strong
//               foundation in programming, web development, And databases.
//               Completed Full Stack Development training from Seven Mentor with
//               hands-on experience in React, Node.js, Express.js, Spring Boot,
//               MySQL, and MongoDB. Passionate about building scalable
//               applications and eager to begin a career in full stack or backend
//               development.
//             </p>

//             <div className="flex items-center gap-4 mt-8 flex-wrap">
//               <span className="text-gray-700 font-semibold">Follow me:</span>
//               <a
//                 href="https://github.com/Mohammad-Salman07"
//                 className="text-lg text-gray-600 hover:text-orange-600 transition"
//               >
//                 <i className="ri-github-fill"></i>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/mohammad-salman07/"
//                 className="text-lg text-gray-600 hover:text-orange-600 transition"
//               >
//                 <i className="ri-linkedin-box-fill"></i>
//               </a>
//               <a
//                 href="https://www.instagram.com/angel_mayrah?igsh=NWtmbHQ0OW02a2h3"
//                 className="text-lg text-gray-600 hover:text-orange-600 transition"
//               >
//                 <i className="ri-instagram-line"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-lg text-gray-600 hover:text-orange-600 transition"
//               >
//                 <i className="ri-facebook-circle-fill"></i>
//               </a>
//             </div>
//           </div>

//           {/* Center Image */}
//           <div
//             data-aos="zoom-in"
//             data-aos-duration="1500"
//             className="w-full md:w-[30%] flex justify-center"
//           >
//             <div className="relative">
//               <img
//                 src={HeroImg}
//                 alt="Hero"
//                 className="w-[260px] sm:w-[320px] rounded-2xl shadow-2xl border-4 border-white mb-4"
//               />
//               <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-600 rounded-full"></div>
//             </div>
//           </div>

//           {/* Right Stats */}
//           <div className="w-full md:w-[20%] grid grid-cols-2 md:grid-cols-1 gap-6 text-center md:text-right">
//             {[
//               { label: "Years Experience", value: 6 },
//               { label: "Success Rate", value: 100, suffix: "%" },
//               { label: "Happy Clients", value: 186 },
//               { label: "Projects Completed", value: 245 },
//             ].map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow hover:scale-105 transition"
//               >
//                 <h2 className="text-2xl font-bold text-orange-700">
//                   <CountUp
//                     start={0}
//                     end={stat.value}
//                     duration={2}
//                     suffix={stat.suffix || "+"}
//                   />
//                 </h2>
//                 <p className="text-sm text-gray-700 font-medium mt-1">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import HeroImg from "../../assets/images/Hero.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section
      className="pt-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100"
      id="about"
    >
      <div className="container px-4 mx-auto max-w-[1300px]">
        <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-between gap-10">

          {/* Left Content */}
          <div className="w-full md:w-[50%] min-w-0">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-orange-600 font-semibold text-sm tracking-wider uppercase"
            >
              Hello Welcome
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-3xl sm:text-5xl font-bold text-gray-900 leading-snug mt-4 drop-shadow-md"
            >
              I'm Mohammad Salman <br /> Full Stack Developer
            </h1>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6"
            >
              <a href="#contact">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-800 transition font-medium flex items-center gap-2 shadow-lg">
                  <i className="ri-mail-line"></i> Hire me
                </button>
              </a>

              {/* Download CV Button */}
              <a
                href="Mohammad-Salman.pdf"
                download
                className="text-gray-700 font-semibold text-base border-b-2 border-orange-600 hover:text-orange-600 transition flex items-center"
              >
                <i className="ri-download-line mr-1"></i> Download CV
              </a> 
            </div>

            {/* Description */}
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text-gray-700 mt-8 text-sm sm:text-base leading-relaxed max-w-md"
            >
              <i className="ri-apps-line mr-2 text-lg text-orange-600"></i>
              Detail-oriented and technically skilled individual with a strong
              foundation in programming, web development, and databases.
              Completed Full Stack Development training from Seven Mentor with
              hands-on experience in React, JavaScript, Node.js, Java, Spring Boot,
              RESTful APIs, MySQL, and MongoDB. Passionate about building scalable
              applications and eager to begin a career in full stack or backend
              development.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 flex-wrap">
              <span className="text-gray-700 font-semibold">Follow me:</span>
              <a
                href="https://github.com/Mohammad-Salman07"
                className="text-lg text-gray-600 hover:text-orange-600 transition"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-salman07/"
                className="text-lg text-gray-600 hover:text-orange-600 transition"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/angel_mayrah?igsh=NWtmbHQ0OW02a2h3"
                className="text-lg text-gray-600 hover:text-orange-600 transition"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="text-lg text-gray-600 hover:text-orange-600 transition"
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
            </div>
          </div>

          {/* Center Image */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="w-full md:w-[30%] flex justify-center"
          >
            <div className="relative">
              <img
                src={HeroImg}
                alt="Hero"
                className="w-[260px] sm:w-[320px] rounded-2xl shadow-2xl border-4 border-white mb-4"
              />
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-600 rounded-full"></div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="w-full md:w-[20%] grid grid-cols-2 md:grid-cols-1 gap-6 text-center md:text-right">
            {[
              { label: "Years Experience", value: 6 },
              { label: "Success Rate", value: 100, suffix: "%" },
              { label: "Happy Clients", value: 186 },
              { label: "Projects Completed", value: 245 },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow hover:scale-105 transition"
              >
                <h2 className="text-2xl font-bold text-orange-700">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix || "+"}
                  />
                </h2>
                <p className="text-sm text-gray-700 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


