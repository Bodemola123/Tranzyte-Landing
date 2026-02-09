import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Courses.css';

const courses = [
  'Transport Business & Fleet Management',
  'Drivers Ethics & Safety',
  'Transportation & Customer Relations',
  'Transportation Logistics & Operations',
  'Urban Mobility & Smart Transport Systems',
  'Vehicle Maintenance for Non-Engineers',
  'Digital Transport Entrepreneurship',
  'Transportation Management & Administration',
  'Supply Chain Fundamentals',
  'Transport Policy',
  'Transport Planning & Operations',
  'Transportation Economics & Financing',
  'Logistics Business Strategy & Planning',
  'Sustainable Urban Transportation',
  'Transport Security & Risk Management'
];

const CourseItem = ({ course, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="course-item"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="course-number">Course {String(index + 1).padStart(2, '0')}</div>
      <h3>{course}</h3>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <div className="courses-intro">
        <div className="section-label">Comprehensive Curriculum</div>
        <h2>Our Flagship Courses</h2>
        <p>
          We're launching with 15 carefully selected courses covering the entire transport value chain. 
          Over 100 courses in development.
        </p>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseItem key={index} course={course} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
