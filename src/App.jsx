import React from 'react';
import Header from './components/Header';
import RoadBackground from './components/RoadBackground';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Courses from './sections/Courses';
import WhoWeServe from './sections/WhoWeServe';
import Enroll from './sections/Enroll';
import './App.css';
import Instructors from './sections/Instructors';

function App() {
  return (
    <div className="App">
      <RoadBackground />
      <Header />
      <main>
        <Home />
        <About />
        <Courses />
        <WhoWeServe />
        <Instructors/>
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}

export default App;
