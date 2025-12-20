import "../styles/Trainer.css";

function Trainer() {
  return (
    <section className="trainer-profile" id="trainer">
      <div className="trainer-card animate__animated animate__fadeInUp">

        <div className="trainer-image">
          <img
            src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1747906461/mama_djalmo.jpg"
            alt="SAP Trainer"
          />
        </div>

        <div className="trainer-info">
          <h3>Ram Y</h3>
          <p className="trainer-designation">
            Lead SAP S/4HANA Finance & FICO Trainer
          </p>

          <div className="trainer-stats">
            <div className="stat">
              <span className="number">8+</span>
              <span className="label">Years Experience</span>
            </div>

            <div className="stat">
              <span className="number">100+</span>
              <span className="label">Students Trained</span>
            </div>
          </div>

          <div className="trainer-expertise">
            <h4>Expertise</h4>
            <div className="expertise-tags">
              <span>SAP S/4HANA Finance</span>
              <span>SAP FICO</span>
              <span>SAP BCM</span>
              <span>SAP ABAP Debug</span>
              <span>Financial Accounting</span>
              <span>Management Accounting</span>
            </div>
          </div>

          <div className="trainer-certifications">
            <h4>Certifications</h4>
            <ul>
              <li>SAP Certified Application Professional – Financial Accounting</li>
              <li>SAP S/4HANA Finance Certified</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Trainer;  // ✅ REQUIRED LINE
