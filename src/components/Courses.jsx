import "../styles/Courses.css";
import "animate.css";

function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="courses-container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-badge animate__animated animate__fadeInUp">
            Our Courses
          </div>
          <h2 className="section-title animate__animated animate__fadeInDown">
            Professional SAP Training Programs
          </h2>
        </div>

        {/* COURSES GRID */}
        <div className="courses-grid">

          {/* COURSE 1 */}
          <div className="course-card animate__animated animate__fadeInUp">
            <div className="course-image">
              <img
                src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1747587352/WhatsApp_Image_2025-05-18_at_21.41.39_b95c966a_qsszdt.jpg"
                alt="SAP S/4HANA Finance"
              />
              <div className="course-duration">3 Months</div>
            </div>

            <div className="course-content">
              <h3>SAP S/4HANA Finance</h3>
              <div className="course-mode">Mode: Online</div>

              <div className="course-features">
                <h4>Features:</h4>
                <ul>
                  <li>In-depth Financial & Management Accounting concepts</li>
                  <li>Real-time project simulations</li>
                  <li>Resume & interview preparation</li>
                  <li>Access to recorded sessions</li>
                  <li>Reference materials provided</li>
                </ul>
              </div>

              <div className="course-ideal">
                <h4>Ideal For:</h4>
                <p>
                  Graduates, finance & non-finance professionals, MBA students,
                  and freshers from accounting or non-accounting backgrounds.
                </p>
              </div>

              <a href="#contact" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>

          {/* COURSE 2 */}
          <div className="course-card animate__animated animate__fadeInUp animate__delay-1s">
            <div className="course-image">
              <img
                src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1747587361/WhatsApp_Image_2025-05-18_at_21.41.38_04c0712c_dbriza.jpg"
                alt="SAP FICO Workshop"
              />
              <div className="course-duration">1 Month</div>
            </div>

            <div className="course-content">
              <h3>SAP FICO Workshop</h3>
              <div className="course-mode">Mode: Online</div>

              <div className="course-features">
                <h4>Features:</h4>
                <ul>
                  <li>Practice-oriented SAP FICO training</li>
                  <li>Real-time business scenarios</li>
                  <li>Hands-on exercises & case studies</li>
                  <li>Access to recorded sessions</li>
                  <li>Reference materials provided</li>
                </ul>
              </div>

              <div className="course-ideal">
                <h4>Ideal For:</h4>
                <p>
                  Candidates preparing for SAP FICO interviews and professionals
                  looking to upskill quickly in SAP FICO.
                </p>
              </div>

              <a href="#contact" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>

        </div>

        {/* TIMINGS */}
        <div className="timings-section animate__animated animate__fadeInUp animate__delay-2s">
          <div className="timings-card">
            <div className="timings-icon">🕒</div>
            <h3>Flexible Timings</h3>
            <ul>
              <li>Flexible Online Sessions</li>
              <li>Weekday & Weekend Batches</li>
              <li>Morning & Evening Slots</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Courses;
