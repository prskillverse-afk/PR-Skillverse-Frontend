import "../styles/BlogMedia.css";

function BlogMedia() {
  return (
    <section className="blog-media" id="blog">
      {/* Overlay */}
      <div className="blog-overlay"></div>

      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <span className="blog-badge">Blog & Media</span>
          <h2 className="blog-title">Latest Updates & Resources</h2>
          <p className="blog-subtitle">
            Stay updated with SAP knowledge, career tips, and upcoming media
            content from PR Skillverse.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="blog-grid">
          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
              alt="SAP Finance"
            />
            <div className="blog-content">
              <span className="blog-category">SAP Finance</span>
              <h3>Key SAP S/4HANA Finance Concepts</h3>
              <p>
                Understand core SAP Finance configurations and real-time business
                processes explained simply.
              </p>
              <span className="blog-meta">5 min read</span>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="SAP Career"
            />
            <div className="blog-content">
              <span className="blog-category">Career</span>
              <h3>How to Build a Career in SAP FICO</h3>
              <p>
                Step-by-step roadmap for freshers and professionals to enter the
                SAP ecosystem confidently.
              </p>
              <span className="blog-meta">7 min read</span>
            </div>
          </div>
        </div>

        {/* YouTube / Media Section */}
        <div className="media-box">
          <div className="media-icon">▶</div>
          <div className="media-content">
            <h3>PR Skillverse on YouTube</h3>
            <p>
              SAP tutorials, interview guidance, real-time demos, and career
              tips. Subscribe and stay updated.
            </p>
            <ul>
              <li>✔ Real-time SAP demos</li>
              <li>✔ Interview preparation</li>
              <li>✔ Career guidance videos</li>
            </ul>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="media-btn"
            >
              Visit Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogMedia;
