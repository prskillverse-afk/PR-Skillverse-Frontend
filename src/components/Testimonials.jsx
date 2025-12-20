import "../styles/Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials" id="Reviews">
      <div className="section-header">
        <div className="section-badge">Testimonials</div>
        <h2 className="section-title">Success Stories from Our Students</h2>
      </div>

      <div className="testimonials-grid">
        {/* CARD 1 */}
        <div className="testimonial-card">
          <div className="student-image">
            <img
              src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1747807900/m_Sridevi_zjzjdm.jpg"
              alt="M Sridevi"
            />
          </div>
          <div className="quote-icon">❝</div>
          <div className="testimonial-content">
            <p>
              "Ram is very knowledgeable in SAP. He explains concepts clearly
              with real-time examples and always supports students. This
              training made my career journey much easier."
            </p>
            <div className="student-info">
              <h4>M Sridevi</h4>
              <p>SAP FICO Consultant</p>
              <div className="rating">★★★★★</div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="testimonial-card">
          <div className="student-image">
            <img
              src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1747810024/lad_khlsmx.png"
              alt="V Anusha Reddy"
            />
          </div>
          <div className="quote-icon">❝</div>
          <div className="testimonial-content">
            <p>
              "The SAP FICO coaching was well structured and practical. Real-time
              examples and recorded sessions helped me understand concepts
              deeply."
            </p>
            <div className="student-info">
              <h4>V Anusha Reddy</h4>
              <p>SAP FICO Consultant</p>
              <div className="rating">★★★★★</div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="testimonial-card">
          <div className="student-image">
            <img
              src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1747809525/Pragada_Prasanth_kumar_bo9my0.jpg"
              alt="Pragada Prasanth"
            />
          </div>
          <div className="quote-icon">❝</div>
          <div className="testimonial-content">
            <p>
              "Real-time project training helped me crack interviews. Complex
              topics were explained in a simple and practical way."
            </p>
            <div className="student-info">
              <h4>Pragada Prasanth Kumar</h4>
              <p>SAP FICO Consultant</p>
              <div className="rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
