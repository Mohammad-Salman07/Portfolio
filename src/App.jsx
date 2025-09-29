import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/UI/Hero';
import Services from './Components/UI/Services';
import EducationExperience from './Components/UI/EducationExperience';
import Portfolio from './Components/UI/Portfolio';
import Contact from './Components/UI/Contact';
import ScrollToTop from './Components/UI/ScrollToTop';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <EducationExperience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop /> {/* ✅ Make sure this is visible */}
    </>
  );
}

export default App;
