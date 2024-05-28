import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css'; // Assuming you have a CSS file for App styles



function App() {
  const [showArrow, setShowArrow] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    // Show the arrow button when scrolled down 100 pixels
    if (scrollTop > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  // Add scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id='home'>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      {/* Arrow button */}
      {showArrow && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &uarr;
        </button>
      )}
    </div>
  )
}

export default App;
