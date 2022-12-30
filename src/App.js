import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Portfolio from './components/Portfolio/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Resume from './components/Resume/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      {/* <HashRouter> */}
      <Header handlePageChange={handlePageChange} />
      {/* <div className="content"> */}
      {/* <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes> */}
      {/* </div> */}
      {/* </HashRouter> */}
      {renderPage()}

      <Footer />
    </div>
  );
}

export default App;
