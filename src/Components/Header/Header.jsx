import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current?.classList.add('sticky_header');
      } else {
        headerRef.current?.classList.remove('sticky_header');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Smooth scroll
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop;
      window.scrollTo({ top: offsetTop - 70, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 z-50 bg-white shadow-md backdrop-blur-md bg-opacity-90 border-b border-orange-100 transition-all duration-300"
    >
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="w-[40px] h-[40px] bg-orange-600 text-white text-lg font-bold rounded-full flex items-center justify-center shadow">
              S
            </span>
            <div className="leading-tight">
              <h2 className="text-xl font-bold text-gray-800">Salman</h2>
              <p className="text-sm text-gray-500 -mt-1">Frontend Dev</p>
            </div>
          </div>

          {/* Nav Menu */}
          <div
            className={`${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:translate-x-0 fixed md:static top-[64px] right-0 w-full md:w-auto bg-white md:bg-transparent shadow-xl md:shadow-none px-6 py-6 md:p-0 z-40 transition-transform duration-300 ease-in-out md:flex items-center gap-10 rounded-md md:rounded-none`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              {['about', 'services', 'portfolio', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    onClick={handleClick}
                    className="text-gray-700 font-medium hover:text-orange-600 text-lg transition"
                    href={`#${section}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social links in mobile */}
            <div className="flex md:hidden flex-col gap-2 mt-6 border-t pt-4">
              <p className="text-gray-700 font-medium">Follow me:</p>
              <div className="flex gap-4 text-lg">
                <a href="https://github.com/Mohammad-Salman07" className="hover:text-orange-600 text-gray-600">
                  <i className="ri-github-fill"></i>
                </a>
                <a href="https://www.linkedin.com/in/mohammad-salman07/" className="hover:text-orange-600 text-gray-600">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://www.instagram.com/angel_mayrah?igsh=NWtmbHQ0OW02a2h3" className="hover:text-orange-600 text-gray-600">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="hover:text-orange-600 text-gray-600">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Social (desktop only) and toggle button */}
          <div className="flex items-center gap-4">
            {/* Social icons only visible on desktop */}
            <div className="hidden md:flex items-center gap-4">
              <p className="text-gray-700 font-medium">Follow me:</p>
              <a href="https://github.com/Mohammad-Salman07" className="hover:text-orange-600 text-gray-600 text-lg">
                <i className="ri-github-fill"></i>
              </a>
              <a href="https://www.linkedin.com/in/mohammad-salman07/" className="hover:text-orange-600 text-gray-600 text-lg">
                <i className="ri-linkedin-box-fill"></i>
              </a>
              {/* <a href="https://www.instagram.com/angel_mayrah?igsh=NWtmbHQ0OW02a2h3" className="hover:text-orange-600 text-gray-600 text-lg">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="hover:text-orange-600 text-gray-600 text-lg">
                <i className="ri-facebook-circle-fill"></i>
              </a> */}
            </div>

            {/* Toggle button for mobile */}
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-gray-700 md:hidden cursor-pointer"
            >
              <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
