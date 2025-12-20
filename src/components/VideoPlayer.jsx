import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoPlayer.css";

export default function VideoPlayer({ video }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [play, setPlay] = useState(false); // ✅ NEW

  /* VALIDATE EMBED URL */
  const embedUrl = useMemo(() => {
    if (!video?.videoUrl) return null;
    if (video.videoUrl.includes("youtube.com/embed/")) {
      return video.videoUrl;
    }
    return null;
  }, [video]);

  /* NO VIDEO */
  if (!video) {
    return <div className="video-placeholder">▶ Select a lesson</div>;
  }

  /* INVALID URL */
  if (!embedUrl) {
    return (
      <div className="video-error">
        ⚠ Invalid YouTube URL detected in database<br />
        Please re-upload this video from Admin Panel.
      </div>
    );
  }

  return (
    <div className="video-player-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* VIDEO AREA */}
      <div className="video-wrapper">
        {!play ? (
          <div className="video-overlay">
            <button className="play-btn" onClick={() => setPlay(true)}>
              ▶ Click to Play
            </button>
          </div>
        ) : (
          <iframe
            src={`${embedUrl}?rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <h2>{video.title}</h2>
      <p>👨‍🏫 {video.trainer || "Trainer"}</p>

      {/* TABS */}
      <div className="lesson-tabs">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "discussions" ? "active" : ""}
          onClick={() => setActiveTab("discussions")}
        >
          Discussions
        </button>
        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className="lesson-content">
        {activeTab === "overview" && (
          <p>{video.description || "No description available."}</p>
        )}
        {activeTab !== "overview" && (
          <p className="muted">Coming soon…</p>
        )}
      </div>

      {/* FALLBACK */}
      <div className="yt-fallback">
        <a
          href={embedUrl.replace("/embed/", "/watch?v=")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in YouTube
        </a>
      </div>
    </div>
  );
}