import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">
        {/* ABOUT */}
        <div className="footer-column">
          <h3 className="footer-logo">PR Skillverse</h3>
          <p className="footer-desc">
            PR Skillverse is a premier online SAP training institute focused on
            SAP S/4HANA Finance and SAP FICO. We help students become job-ready
            with real-time training and expert mentorship.
          </p>

          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://chat.whatsapp.com/Kl8HEMMgoAE24ABRWLxYRE">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#Reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* COURSES */}
        <div className="footer-column">
          <h4>Our Courses</h4>
          <ul>
            <li>SAP S/4HANA Finance (3 Months)</li>
            <li>SAP FICO Workshop (1 Month)</li>
            <li>Real-time Project Training</li>
            <li>Recorded Classes</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Contact Info</h4>
          <p><i className="fas fa-map-marker-alt"></i> Bangalore, India</p>
          <p><i className="fas fa-phone"></i> +91 93814 34341</p>
          <p><i className="fas fa-envelope"></i> ramlakshmica5@gmail.com</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PR Skillverse. All Rights Reserved. Developed by sasindra
        </p>
      </div>
    </footer>
  );
}

export default Footer;
