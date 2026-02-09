import React from "react";
import "./Instructors.css";

const instructors = [
  { name: "Makinde Damilare", credentials: "TPL, Multp" },
  { name: "Pedro Akinnubi", credentials: "TPL, Multp" },
  { name: "Fagbohun Boluwatife", credentials: "TPL, Multp" },
  { name: "Akinlagun Ololade", credentials: "TPL, Multp" }
];

const Instructors = () => {
  return (
    <section className="instructors">
      <div className="instructors-container">

        {/* Founder Section */}
        <div className="founder-section">
          <div className="section-label">Founder & Head of Academy</div>
          <h2>Abideen Olamilekan</h2>
          <p className="founder-qualification">
            Master of Urban Logistics & Transport Policy
          </p>
          <p className="founder-university">
            University of Lagos
          </p>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Instructors Grid */}
        <div className="instructors-section">
          <div className="section-label">Instructors</div>

          <div className="instructors-grid">
            {instructors.map((instructor, index) => (
              <div key={index} className="instructor-card">
                <h3>{instructor.name}</h3>
                <p>{instructor.credentials}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Instructors;
