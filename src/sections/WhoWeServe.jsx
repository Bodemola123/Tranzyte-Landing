import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Car,
  Truck,
  Package,
  Briefcase,
  Landmark,
  Building2,
  Link,
  GraduationCap
} from "lucide-react";
import "./WhoWeServe.css";

const audiences = [
  { icon: Car, title: "Drivers", subtitle: "Private & Commercial" },
  { icon: Truck, title: "Fleet Owners", subtitle: "Transport Entrepreneurs" },
  { icon: Package, title: "Logistics Staff", subtitle: "Dispatch & Operations" },
  { icon: Briefcase, title: "Transport Managers", subtitle: "Company Leadership" },
  { icon: Landmark, title: "Government Officials", subtitle: "Transport & Policy" },
  { icon: Building2, title: "Urban Planners", subtitle: "Mobility Solutions" },
  { icon: Link, title: "Supply Chain Pros", subtitle: "Logistics Professionals" },
  { icon: GraduationCap, title: "Young Professionals", subtitle: "Entering the Sector" }
];

const AudienceCard = ({ audience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = audience.icon;

  return (
    <motion.div
      ref={ref}
      className="audience-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="audience-icon">
        <Icon size={40} strokeWidth={2} />
      </div>
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
