import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [course, setCourse] = useState("sap-s4hana-finance");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadVideo = async () => {
    if (!title || !videoUrl) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "videos"), {
        courseId: course,
        title,
        videoUrl,
        description,
        createdAt: serverTimestamp(),
      });

      alert("✅ Video added successfully");
      setTitle("");
      setVideoUrl("");
      setDescription("");
    } catch (error) {
      alert("❌ Error uploading video");
    }

    setLoading(false);
  };

  return (
    <div className="admin-page">
      <h1>🎥 Admin Video Upload</h1>

      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="sap-s4hana-finance">SAP S/4HANA Finance</option>
        <option value="sap-fico-workshop">SAP FICO Workshop</option>
      </select>

      <input
        type="text"
        placeholder="Module / Topic Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="YouTube Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      <textarea
        placeholder="Video Description"
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