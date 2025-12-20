import "../styles/Contact.css";
import "animate.css";
import API_URL from "../utils/api";
function Contact() {
  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const course = e.target.course.value;
    const message = e.target.message.value;

    const text = `Hello PR Skillverse,%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Course: ${course}%0A
Message: ${message}`;

    window.open(
      `https://wa.me/919381434341?text=${text}`,
      "_blank"
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <div className="section-badge animate__animated animate__fadeInUp">
          Contact Us
        </div>
        <h2 className="section-title animate__animated animate__fadeInDown">
          Get in Touch
        </h2>
      </div>

      <div className="contact-container">
        {/* CONTACT INFO */}
        <div className="contact-card animate__animated animate__fadeInLeft">
          <h3>Contact Information</h3>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Location</h4>
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <p>+91 93814 34341</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>ramlakshmica5@gmail.com</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://t.me/+1KhtqmQ5vsplYzY1"><i className="fab fa-telegram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://chat.whatsapp.com/Kl8HEMMgoAE24ABRWLxYRE">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form animate__animated animate__fadeInUp">
          <form onSubmit={sendWhatsAppMessage}>
            <input name="name" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <input name="phone" placeholder="Your Phone" required />

            <select name="course" required>
              <option value="">Select Course</option>
              <option value="SAP S/4HANA Finance – 3 Months">
                SAP S/4HANA Finance – 3 Months
              </option>
              <option value="SAP FICO Workshop – 1 Month">
                SAP FICO Workshop – 1 Month
              </option>
            </select>

            <textarea name="message" placeholder="Your Message" required />

            <button type="submit" className="submit-btn">
              <i className="fab fa-whatsapp"></i> Send via WhatsApp
            </button>
          </form>
        </div>

        {/* MAP */}
        <div className="map-container animate__animated animate__fadeInUp">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=Bangalore&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}


export default Contact;  // ✅ REQUIRED LINE