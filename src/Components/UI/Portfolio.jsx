
import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const bgColors = [
    "bg-orange-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-gray-100",
  ];

  const assignRandomColors = (data) => {
    return data.map((item) => ({
      ...item,
      bgClass: bgColors[Math.floor(Math.random() * bgColors.length)],
    }));
  };

  useEffect(() => {
    const filtered =
      selectTab === "all"
        ? data
        : data.filter(
            (item) =>
              (selectTab === "web-design" && item.category === "Web Design") ||
              (selectTab === "ux-design" && item.category === "Ux")
          );

    setPortfolios(assignRandomColors(filtered));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTab]);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-sm">
            My Recent Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            A collection of my work demonstrating skills in design, development, and UX.
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {["all", "web-design", "ux-design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition duration-300 border backdrop-blur-md ${
                selectTab === tab
                  ? "bg-orange-600 text-white border-orange-600"
                  : "text-gray-600 bg-white border-gray-300 hover:bg-orange-600 hover:text-white"
              }`}
            >
              {tab === "all"
                ? "All"
                : tab === "web-design"
                ? "Web Design"
                : "UX Design"}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ${portfolio.bgClass}`}
            >
              <img
                src={portfolio.imgUrl}
                alt={portfolio.title}
                className="w-full h-64 sm:h-72 object-cover object-center transform group-hover:scale-105 transition-transform duration-500 rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-90 transition duration-300 z-20">
                <button
                  onClick={() => showModalHandler(portfolio.id)}
                  className="text-white bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-lg font-semibold shadow-lg"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {nextItems < portfolios.length && data.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreHandler}
              className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-full font-semibold shadow-md transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;



