import "../styles/Home.css";
import "animate.css";

function Home() {
  return (
    <section className="home" id="home">
      {/* BACKGROUND OVERLAY */}
      <div className="home-overlay"></div>

      {/* FULL WIDTH CONTENT */}
      <div className="home-inner animate__animated animate__fadeInUp">

        {/* TEXT CONTENT */}
        <div className="home-text">
          <h1 className="home-title">
            Build Your SAP Career with <span>PR Skillverse</span>
          </h1>

          <p className="home-subtitle">
            Master SAP S/4HANA Finance and SAP FICO with industry-aligned online coaching.
            At PR Skillverse, we help you become job-ready with hands-on training and
            real-time project exposure.
          </p>

          {/* MAIN BUTTON */}
            <div className="home-buttons">
  <a href="#courses" className="btn-primary">Explore Courses</a>

  <div className="recording-wrapper">
    <a href="/login" className="btn-recording">
  🔒 Recording Classes
</a>

    <span className="recording-tagline">
      It’s only for Enrolled Students
    </span>
  </div>

  <a href="#contact" className="btn-contact">Contact Us</a>
</div>

        </div>

        {/* FEATURES */}
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>100% Online Coaching</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎥</div>
            <h3>Live Interactive Sessions</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Weekend & Weekday Batches</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>WhatsApp Support Available</h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
