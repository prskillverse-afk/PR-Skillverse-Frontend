import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/AdminDashboard.css";

/* ================= MODULE LIST ================= */
const MODULES = [
  "S/4HANA Finance Basics",
  "Enterprise Structure",
  "Global Parameters",
  "GL Accounting",
  "Accounts Payable",
  "Accounts Receivable",
  "Asset Accounting",
  "Cost Center Accounting",
  "Profit Center Accounting",
  "Withholding Tax",
  "GST / VAT",
  "Other Topics",
];

/* ================= YOUTUBE URL CLEANER ================= */
function convertToEmbedUrl(url) {
  if (!url) return null;

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("youtube.com/embed/")) {
    return url.split("?")[0];
  }

  return null;
}

/* ================= COMPONENT ================= */
function AdminDashboard() {
  const [course, setCourse] = useState("sap-s4hana-finance");
  const [module, setModule] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadVideo = async () => {
    if (!module || !title || !videoUrl) {
      alert("❌ Please fill all required fields");
      return;
    }

    const embedUrl = convertToEmbedUrl(videoUrl);

    if (!embedUrl) {
      alert("❌ Invalid YouTube URL");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "videos"), {
        courseId: course,
        module,
        title,
        videoUrl: embedUrl,
        description,
        createdAt: serverTimestamp(),
      });

      alert("✅ Video uploaded successfully");

      setModule("");
      setTitle("");
      setVideoUrl("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed");
    }

    setLoading(false);
  };

  return (
    <div className="admin-page">
      <h1>🎥 Admin Video Upload</h1>

      {/* COURSE */}
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="sap-s4hana-finance">SAP S/4HANA Finance</option>
        <option value="sap-fico-workshop">SAP FICO Workshop</option>
      </select>

      {/* MODULE */}
      <select value={module} onChange={(e) => setModule(e.target.value)}>
        <option value="">Select Module</option>
        {MODULES.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      {/* VIDEO TITLE */}
      <input
        type="text"
        placeholder="Lesson / Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* YOUTUBE URL */}
      <input
        type="text"
        placeholder="YouTube Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      {/* DESCRIPTION */}
      <textarea
        placeholder="Video Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={uploadVideo} disabled={loading}>
        {loading ? "Uploading..." : "Upload Video"}
      </button>
    </div>
  );
}

export default AdminDashboard;
