import React from 'react';
import { motion } from 'framer-motion';
import './Enroll.css';

const Enroll = () => {
  return (
    <section className="cta-section" id="enroll">
      <div className="cta-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Lead the Future?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the new generation of trained, certified transport and logistics professionals 
          shaping Africa's mobility future. Your journey to excellence starts here.
        </motion.p>
        <motion.div 
          className="cta-group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#" className="btn btn-primary">Enroll Now</a>
          <a href="#courses" className="btn btn-secondary">View All Courses</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Enroll;
