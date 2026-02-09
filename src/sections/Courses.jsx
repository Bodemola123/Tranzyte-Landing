"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./Courses.css";

const courses = [
  {
    title: "Transport Business & Fleet Management",
    description:
      "This course equips learners with the practical knowledge needed to start, manage, and scale transport businesses. It covers fleet operations, driver management, financial control, maintenance planning, compliance, and growth strategies. Ideal for fleet owners, transport entrepreneurs, and operations managers seeking structured, profitable transport operations."
  },
  {
    title: "Drivers Ethics & Safety",
    description:
      "Designed to promote safe, responsible, and ethical driving, this course teaches road discipline, traffic laws, defensive driving techniques, emergency handling, and professional conduct. It helps drivers reduce accidents, protect lives, and operate confidently within legal and safety standards."
  },
  {
    title: "Transportation & Customer Relations",
    description:
      "This course focuses on communication, service excellence, and customer handling within transport operations. Learners develop skills in passenger relations, conflict resolution, stress management, and service quality delivery, helping transport workers improve customer satisfaction and brand reputation."
  },
  {
    title: "Transportation Logistics & Operations",
    description:
      "A practical introduction to logistics operations, this course covers order fulfillment, dispatch systems, routing, warehousing basics, and performance monitoring. It is designed for logistics personnel, dispatchers, and small business owners involved in goods movement and delivery operations."
  },
  {
    title: "Urban Mobility & Smart Transport Systems",
    description:
      "This course explores modern urban mobility systems, including public transport models, non-motorized transport, intelligent transport systems, and data-driven mobility planning. It is ideal for professionals interested in how cities design efficient, safe, and sustainable transport systems."
  },
  {
    title: "Vehicle Maintenance for Non-Engineers",
    description:
      "This course teaches vehicle owners and operators how to understand basic vehicle systems, perform routine checks, identify early warning signs, and manage maintenance costs effectively. It helps reduce breakdowns, extend vehicle lifespan, and improve operational reliability without technical complexity."
  },
  {
    title: "Digital Transport Entrepreneurship",
    description:
      "Focused on modern mobility and technology-driven transport services, this course introduces ride-hailing, delivery platforms, digital dispatch systems, and transport startups. Learners gain insight into digital business models, pricing, customer acquisition, and scaling transport services in the digital economy."
  },
  {
    title: "Transportation Management & Administration",
    description:
      "This course prepares learners for supervisory and administrative roles in transport organizations. It covers scheduling, staff coordination, documentation, compliance reporting, and operational leadership, ensuring smooth and efficient transport service management."
  },
  {
    title: "Supply Chain Fundamentals",
    description:
      "A foundational course that introduces supply chain concepts, this program explains how goods move from production to final delivery. Learners gain understanding of procurement, inventory control, distribution, warehousing, and the critical role transport plays in supply chain efficiency."
  },
  {
    title: "Transport Policy",
    description:
      "This course examines how transport systems are governed, regulated, and planned. Learners explore policy frameworks, regulatory structures, public–private partnerships, and policy evaluation, making it suitable for government officials, planners, and professionals involved in transport decision-making."
  },
  {
    title: "Transport Planning & Operations",
    description:
      "Designed for those interested in technical transport planning, this course covers route design, demand forecasting, traffic flow principles, scheduling, and operational optimization. It equips learners with the skills to analyze and improve transport networks and services."
  },
  {
    title: "Transportation Economics & Financing",
    description:
      "This course explores the economic principles behind transport systems, including pricing, cost–benefit analysis, funding models, and financial sustainability. It helps learners understand how transport projects are evaluated, financed, and managed economically."
  },
  {
    title: "Logistics Business Strategy & Planning",
    description:
      "This course focuses on the strategic and business side of logistics operations. Learners develop skills in market analysis, business planning, operational strategy, financial planning, and scaling logistics enterprises in competitive markets."
  },
  {
    title: "Sustainable Urban Transportation",
    description:
      "This course introduces climate-friendly transport systems and sustainable mobility planning. Learners explore low-emission transport options, policy tools, and global best practices for reducing environmental impact while improving urban mobility."
  },
  {
    title: "Transport Security & Risk Management",
    description:
      "This course addresses security risks in transport operations, including theft, accidents, cargo loss, and passenger safety. Learners gain skills in risk assessment, security planning, emergency response, and the use of technology to protect transport assets and operations."
  }
];


const CourseItem = ({ course, index, isOpen, setOpenIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleClick = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
<motion.div
  layout
  ref={ref}
  className={`course-item ${isOpen ? "open" : ""}`}
  initial={{ opacity: 0, x: -20 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
  transition={{ duration: 0.5, delay: index * 0.05 }}
  onClick={handleClick}
>

      <div className="course-number">
        Course {String(index + 1).padStart(2, "0")}
      </div>

      <h3>{course.title}</h3>

      <AnimatePresence>
        {isOpen && (
          <motion.div
          layout
            className="course-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{course.description}</p>

            <div className="course-action">
              <button>Enroll Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const Courses = () => {

  const [openIndex, setOpenIndex] = useState(null);

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
    <CourseItem
      key={index}
      course={course}
      index={index}
      isOpen={openIndex === index}
      setOpenIndex={setOpenIndex}
    />
  ))}
</div>

    </section>
  );
};

export default Courses;
