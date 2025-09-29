import React from "react";
import { useInView } from "react-intersection-observer";

const educationData = [
  {
    Univercity: "Vinobha Bhave University",
    title: "Bachelor Of Computer Application",
    subtitle: "Computing",
    date: "2021 - 2024",
  },
  {
    Univercity: "Seven Mentor PVT LTD.",
    title: "Java Full Stack Developer",
    subtitle: "Developer",
    date: "Sep-2024 - Present",
  },
  {
    title: "------------------------",
    subtitle: "--------",
    date: "0000 - 0000",
  },
];

const experienceData = [
  {
    title: "------------------------",
    subtitle: "---------",
    date: "0000 - 0000",
  },
  {
    title: "------------------------",
    subtitle: "---------",
    date: "0000 - 0000",
  },
  {
    title: "------------------------",
    subtitle: "---------",
    date: "0000 - 0000",
  },
];

const skillsData = [
  {
    title: "Java Full Stack Development",
    subtitle: "Java, JSP, Servlet, JDBC, MySQL, Spring Boot,RestFull-APIS",
    range: 92,
  },
  {
    title: "Frontend Development",
    subtitle: "HTML, CSS, JavaScript, Bootstrap,Tailwind CSS, React",
    range: 88,
  },
  {
    title: "Database Management",
    subtitle: "MySQL, SQL Queries,",
    range: 84,
  },
  {
    title: "Tools & Platforms",
    subtitle: "Git, GitHub, Eclipse, VS Code, Tomcat , Postman API",
    range: 76,
  },
  {
    title: "Soft Skills",
    subtitle:
      "Problem-solving, quick learner, clear communication, team collaboration,Time management, attention to code quality, self-motivation, adaptability",
    range: 95,
  },
];

const Qualification = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="qualification"
      className="bg-cover bg-center py-16 px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-6 sm:p-10 max-w-6xl mx-auto shadow-xl">
        <div className="text-center mb-12">
          <h2 className="text-orange-600 text-sm font-semibold mb-2 uppercase tracking-wide">
            My Qualification
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Awesome Journey
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Education */}
          <div data-aos="fade-left" data-aos-duration="1300">
            <div className="flex items-center gap-2 mb-6">
              <i className="ri-graduation-cap-fill text-2xl text-orange-600"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {educationData.map((item, idx) => (
                <div key={idx} className="border-l-4 border-orange-600 pl-5">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="font-semibold text-gray-600">
                    {item.Univercity}
                  </p>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                  <p className="text-sm text-orange-600 flex items-center gap-1 mt-1 font-medium">
                    <i className="ri-calendar-fill"></i> {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div data-aos="fade-right" data-aos-duration="1300">
            <div className="flex items-center gap-2 mb-6">
              <i className="ri-briefcase-4-fill text-2xl text-orange-600"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experienceData.map((item, idx) => (
                <div key={idx} className="border-l-4 border-orange-600 pl-5">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                  <p className="text-sm text-orange-600 flex items-center gap-1 mt-1 font-medium">
                    <i className="ri-calendar-fill"></i> {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div
            className="lg:col-span-2"
            data-aos="fade-up"
            data-aos-duration="1300"
            ref={ref}
          >
            <div className="flex items-center gap-2 mb-6">
              <i className="ri-star-fill text-2xl text-orange-600"></i>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillsData.map((item, idx) => (
                <div key={idx} className="border-l-4 border-orange-600 pl-5">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">{item.subtitle}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-orange-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                      style={{
                        width: inView ? `${item.range}%` : "0%",
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mt-1">
                    {item.range}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
