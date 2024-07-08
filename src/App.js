import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Routes, Route, Link } from '../node_modules/react-router-dom/dist/index';
import Card from './Components/Card';
import Contact from './Components/Conatct';
import Feedback from './Components/Feedback';


// import './MyStyle.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/*
          <Route path="/hero" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/skills" element={<Skills />} />
           */}
      <Router>
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Routes>
          <Route path="/card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
      
          {/* <Card />
          <Contact /> */}
        </Routes>
        <Feedback />
        <Footer />
      </Router>
    </>

  );
}

export default App;
