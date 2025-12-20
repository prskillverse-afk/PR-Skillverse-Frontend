import "../styles/About.css";
import "animate.css/animate.min.css";

function About() {
  return (
    <section className="about" id="about">
      {/* Background Overlay */}
      <div className="about-overlay"></div>

      <div className="about-container">
        {/* HEADER */}
        <div className="about-header">
          <span className="about-badge animate__animated animate__fadeInUp">
            About Us
          </span>
          <h2 className="about-title animate__animated animate__fadeInDown">
            Empowering Careers in SAP Finance
          </h2>
        </div>

        {/* GRID */}
        <div className="about-grid">
          {/* IMAGE */}
          <div className="about-image animate__animated animate__fadeInLeft">
            <div className="about-image-card">
              <img
                src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1747594581/SAP_students_wtgbd1.png"
                alt="SAP Training"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="about-content animate__animated animate__fadeInRight">
            <div className="about-card">
              <p>
                <strong>PR Skillverse</strong> is a premier online training institute
                specializing in <strong>SAP S/4HANA Finance</strong> and
                <strong> SAP FICO</strong>. We deliver practical, job-oriented
                coaching tailored for professionals, freshers, and aspiring SAP
                consultants looking to build strong ERP careers.
              </p>

              <p>
                With over <strong>2 years of success</strong> and
                <strong> 100+ trained students</strong>, PR Skillverse has earned
                a reputation for quality SAP education. Our training is led by
                <strong> Mr. Ram</strong>, an SAP expert with
                <strong> 7+ years of real-time experience</strong> in
                Implementation, Rollout, AMS Support, and Enhancement projects.
              </p>

              <p>
                Our mission is to equip learners with practical SAP skills through
                expert mentorship, real-time business scenarios, and hands-on
                project simulations. We focus on preparing you not just for
                certifications — but for <strong>real job success</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER BOX */}
        <div className="about-footer animate__animated animate__fadeInUp">
          <p>
            Start your SAP career with confidence. Learn with{" "}
            <strong>PR Skillverse</strong> — your trusted partner in SAP excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
