import "../styles/ChooseUs.css";
import "animate.css";

export default function ChooseUs() {
  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="why-choose-overlay"></div>

      <div className="why-choose-container">
        {/* HEADER */}
        <div className="section-header">
          <span className="section-badge animate__animated animate__fadeInUp">
            Why Choose Us
          </span>
          <h2 className="section-title animate__animated animate__fadeInDown">
            Your Path to SAP Excellence
          </h2>
        </div>

        {/* BENEFITS */}
        <div className="benefits-grid">
          {/* CARD 1 */}
          <div className="benefit-card animate__animated animate__fadeInUp">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Expert Trainers"
            />
            <div className="benefit-content">
              <div className="benefit-icon">👨‍🏫</div>
              <h3>Expert Trainers</h3>
              <p>
                Learn from SAP-certified professionals with real-time project
                experience.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="benefit-card animate__animated animate__fadeInUp animate__delay-1s">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Industry Curriculum"
            />
            <div className="benefit-content">
              <div className="benefit-icon">💼</div>
              <h3>Industry-Aligned Curriculum</h3>
              <p>
                Curriculum designed based on real SAP business scenarios.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="benefit-card animate__animated animate__fadeInUp animate__delay-2s">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              alt="Hands-on Training"
            />
            <div className="benefit-content">
              <div className="benefit-icon">🎯</div>
              <h3>Hands-on Training</h3>
              <p>
                Work on real-time SAP systems with practical exercises.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="benefit-card animate__animated animate__fadeInUp animate__delay-3s">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Flexible Learning"
            />
            <div className="benefit-content">
              <div className="benefit-icon">🕒</div>
              <h3>Flexible Learning</h3>
              <p>
                Weekday & weekend batches with recorded session access.
              </p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="benefit-card animate__animated animate__fadeInUp animate__delay-4s">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
              alt="Career Support"
            />
            <div className="benefit-content">
              <div className="benefit-icon">📈</div>
              <h3>Career Support</h3>
              <p>
                Interview preparation, resume support & career guidance.
              </p>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="benefit-card animate__animated animate__fadeInUp animate__delay-5s">
            <img
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=800&q=80"
              alt="Lifetime Access"
            />
            <div className="benefit-content">
              <div className="benefit-icon">♾️</div>
              <h3>Lifetime Access</h3>
              <p>
                Lifetime access to recordings, materials & updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
