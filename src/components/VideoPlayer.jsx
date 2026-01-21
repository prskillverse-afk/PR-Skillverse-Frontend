import { useMemo, useState } from "react";
import "./VideoPlayer.css";

export default function VideoPlayer({ video }) {
  const [play, setPlay] = useState(false);

  /* ================= VALIDATE EMBED URL ================= */
  const embedUrl = useMemo(() => {
    if (!video?.videoUrl) return null;

    // Allow only YouTube embed URLs
    if (video.videoUrl.includes("youtube.com/embed/")) {
      return video.videoUrl;
    }

    return null;
  }, [video]);

  /* ================= NO VIDEO ================= */
  if (!video) {
    return <div className="video-placeholder">▶ Select a lesson</div>;
  }

  /* ================= INVALID URL ================= */
  if (!embedUrl) {
    return (
      <div className="video-error">
        ⚠ Invalid YouTube embed URL detected<br />
        Please re-upload this video from Admin Panel
      </div>
    );
  }

  /* ================= SECURE EMBED PARAMS ================= */
  const secureEmbedUrl = `${embedUrl}?rel=0&modestbranding=1&controls=1&disablekb=1&fs=0&iv_load_policy=3`;

  return (
    <div className="video-player-container">
      {/* ================= VIDEO PLAYER ================= */}
      <div
        className="video-wrapper"
        onContextMenu={(e) => e.preventDefault()}
      >
        {!play ? (
          <div className="video-overlay">
            <button className="play-btn" onClick={() => setPlay(true)}>
              ▶ Click to Play
            </button>
          </div>
        ) : (
          <iframe
            src={secureEmbedUrl}
            title={video.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
          />
        )}
      </div>

      {/* ================= VIDEO DETAILS ================= */}
      <h2 className="video-title">{video.title}</h2>

      <p className="trainer">
        👨‍🏫 {video.trainer || "Trainer"}
      </p>

      {/* ================= DESCRIPTION (DIRECT) ================= */}
      <div className="lesson-description">
        {video.description ? (
          <p>{video.description}</p>
        ) : (
          <p className="muted">No description available for this lesson.</p>
        )}
      </div>
    </div>
  );
}
