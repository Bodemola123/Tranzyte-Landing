import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhoWeServe.css';

const audiences = [
  { emoji: '🚗', title: 'Drivers', subtitle: 'Private & Commercial' },
  { emoji: '🚚', title: 'Fleet Owners', subtitle: 'Transport Entrepreneurs' },
  { emoji: '📦', title: 'Logistics Staff', subtitle: 'Dispatch & Operations' },
  { emoji: '💼', title: 'Transport Managers', subtitle: 'Company Leadership' },
  { emoji: '🏛️', title: 'Government Officials', subtitle: 'Transport & Policy' },
  { emoji: '🏙️', title: 'Urban Planners', subtitle: 'Mobility Solutions' },
  { emoji: '⛓️', title: 'Supply Chain Pros', subtitle: 'Logistics Professionals' },
  { emoji: '🎓', title: 'Young Professionals', subtitle: 'Entering the Sector' }
];

const AudienceCard = ({ audience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="audience-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="audience-emoji">{audience.emoji}</div>
      <h3>{audience.title}</h3>
      <p>{audience.subtitle}</p>
    </motion.div>
  );
};

const WhoWeServe = () => {
  return (
    <section className="audience" id="who">
      <div className="audience-content">
        <div className="section-title">
          <div className="section-label">Who We Serve</div>
          <h2>Built for Everyone in Transport</h2>
        </div>
        <div className="audience-grid">
          {audiences.map((audience, index) => (
            <AudienceCard key={index} audience={audience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
