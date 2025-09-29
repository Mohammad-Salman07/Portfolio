import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((item) => item.id === activeID);
  const [isVisible, setIsVisible] = useState(false);

  // Animate in on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);

    // Lock background scroll
    document.body.style.overflow = "hidden";

    // ESC key support
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEsc);
    };
  }, );

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowModal(false), 300); // Wait for animation to finish
  };

  if (!portfolio) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        className={`relative w-full max-w-lg bg-white rounded-xl shadow-xl overflow-y-auto max-h-[90vh] transition-all duration-300 ease-in-out transform ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="fixed top-5 right-5 bg-orange-600 hover:bg-orange-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-50 transition"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Modal Content */}
        <div className="p-6">
          <figure className="mb-4">
            <img
              className="rounded-lg shadow"
              src={portfolio.imgUrl}
              alt={portfolio.title}
            />
          </figure>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {portfolio.title}
          </h2>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {portfolio.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {portfolio.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {portfolio.siteUrl && (
              <a
                href={portfolio.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition font-medium"
              >
                Live Site
              </a>
            )}
            {portfolio.codeUrl && (
              <a
                href={portfolio.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition font-medium"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
