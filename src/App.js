import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route
              exact
              path="/Brad_Hambrick_React_Portfolio/"
              element={<About />}
            />
            <Route exact path="/portfolio/" element={<Portfolio />} />
            <Route exact path="/about/" element={<About />} />
            <Route exact path="/contact/" element={<Contact />} />
            <Route exact path="/resume/" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
