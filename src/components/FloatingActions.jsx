import { useEffect, useState } from "react";
import "../styles/FloatingActions.css";
function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to inquire about your SAP courses."
  );

  return (
    <div className="floating-wrapper">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/919381434341?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp-btn"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Scroll To Top */}
      {showTop && (
        <button
          className="float-btn top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
export default FloatingActions;
