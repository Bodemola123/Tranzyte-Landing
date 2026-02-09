import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Globe,
  GraduationCap,
  ScrollText,
  Wrench,
  Handshake
} from "lucide-react";
import "./About.css";

const features = [
  {
    icon: Target,
    title: "Industry-Focused Education",
    description:
      "Transport-specific curriculum designed for real-world application, not generic business training."
  },
  {
    icon: Globe,
    title: "African Context, Global Standards",
    description:
      "Designed for Africa's transport realities while maintaining globally relevant certification."
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description:
      "Taught by seasoned academics and industry professionals from leading institutions."
  },
  {
    icon: ScrollText,
    title: "Professional Certification",
    description:
      "Industry-recognized credentials that advance your career and business growth."
  },
  {
    icon: Wrench,
    title: "Practical Application",
    description:
      "Real-life case studies and hands-on modules you can implement immediately."
  },
  {
    icon: Handshake,
    title: "Government Aligned",
    description:
      "Strong alignment with both government and private-sector transport initiatives."
  }
];

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      className="feature-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="feature-icon">
        <Icon size={32} strokeWidth={2} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="features" id="about">
      <div className="section-title">
        <div className="section-label">Why Choose Tranzyte</div>
        <h2>Built for Excellence</h2>
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
