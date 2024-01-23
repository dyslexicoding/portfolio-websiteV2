import React from 'react';
// Testimonial - if I have some latter
import { About, Footer, Header, Portfolio, Skills, Experience } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Portfolio />
    <Skills />
    <Experience />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
