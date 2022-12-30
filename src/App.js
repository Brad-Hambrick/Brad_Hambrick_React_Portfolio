import React from 'react';
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
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
