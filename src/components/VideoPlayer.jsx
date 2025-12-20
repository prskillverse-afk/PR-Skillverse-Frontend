import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoPlayer.css";

export default function VideoPlayer({ video }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const embedUrl = useMemo(() => {
    if (!video?.videoUrl) return null;
    return video.videoUrl.includes("youtube.com/embed/")
      ? video.videoUrl
      : null;
  }, [video]);

  /* NO VIDEO */
  if (!video) {
    return <div className="video-placeholder">▶ Select a lesson</div>;
  }

  /* INVALID URL (DATABASE ISSUE) */
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

      <div className="video-wrapper">
        <iframe
          src={`${embedUrl}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <h2>{video.title}</h2>
      <p>👨‍🏫 {video.trainer || "Trainer"}</p>

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
    </div>
  );
}
