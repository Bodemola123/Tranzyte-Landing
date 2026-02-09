import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          #1 Pathway to Transport Mastery in Africa
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Professional Training for<br />
          <span className="highlight">Africa's Transport Future</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Equipping drivers, fleet owners, logistics professionals, and policymakers with 
          practical skills, industry knowledge, and globally recognized certification.
        </motion.p>
        
        <motion.div 
          className="cta-group"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="#courses" className="btn btn-primary">Explore Courses</a>
          <a href="#enroll" className="btn btn-secondary">Enroll Now</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
