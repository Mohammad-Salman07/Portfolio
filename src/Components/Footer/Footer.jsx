import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#12141e] pt-16 pb-10 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 space-y-10">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Left */}
            <div className="md:w-1/2 space-y-5">
              <h2 className="text-2xl font-bold text-white leading-snug">
                Do you want to build beautiful <br /> and impactful products?
              </h2>
              <a href="#contact">
                <button className="bg-orange-600 hover:bg-orange-800 text-white px-6 py-2 rounded-lg transition font-medium flex items-center gap-2">
                  <i className="ri-mail-line"></i> Hire Me
                </button>
              </a>
              <p className="text-gray-400 max-w-md pt-4">
                I'm a passionate developer focused on crafting engaging digital experiences across web, UI/UX, and mobile platforms. Let's bring your ideas to life with clean code and creative vision.
              </p>
            </div>

            {/* Right */}
            <div className="md:w-1/2 flex flex-col items-start md:items-end space-y-5">
              <div>
                <span className="text-sm font-semibold text-white">Follow Me</span>
                <div className="flex gap-4 mt-3">
                  {[
                    { href: "https://github.com/Mohammad-Salman07", icon: "ri-github-fill" },
                    { href: "https://www.linkedin.com/in/mohammad-salman07/", icon: "ri-linkedin-fill" },
                    // { href: "https://www.instagram.com/angel_mayrah?igsh=NWtmbHQ0OW02a2h3", icon: "ri-instagram-line" },
                    // { href: "#", icon: "ri-facebook-circle-line" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gray-700 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition text-xl"
                    >
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center Navigation Links */}
          <ul className="flex justify-center flex-wrap gap-8 pt-6 text-sm font-medium">
            {["about", "services", "portfolio", "contact"].map((link) => (
              <li key={link}>
                <a href={`#${link}`} className="hover:text-orange-500 capitalize">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-gray-600 text-white font-bold text-lg rounded-full flex items-center justify-center">
                S
              </span>
              <div>
                <h2 className="text-white font-semibold text-lg">Salman</h2>
                <p className="text-gray-500 text-sm">Personal</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left leading-6 text-sm">
              <p>📞 +91 8757359592</p>
              <p>📞 +91 9973278081</p>
              <p>📧 salmanarman432@gmail.com</p>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center sm:text-right">
              &copy; {year} Developed by Salman — All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


