import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { db } from "../firebase";
import "./AdminVideoList.css";

function formatDate(timestamp) {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminVideoList() {
  const [financeVideos, setFinanceVideos] = useState([]);
  const [ficoVideos, setFicoVideos] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "videos"), snapshot => {
      const finance = [];
      const fico = [];

      snapshot.docs.forEach(docSnap => {
        const data = { id: docSnap.id, ...docSnap.data() };

        if (data.courseId === "sap-s4hana-finance") {
          finance.push(data);
        } else if (data.courseId === "sap-fico-workshop") {
          fico.push(data);
        }
      });

      setFinanceVideos(finance);
      setFicoVideos(fico);
    });

    return () => unsub();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this video?")) return;
    await deleteDoc(doc(db, "videos", id));
  }

  function renderList(title, videos) {
    return (
      <div className="video-section">
        <h3>{title}</h3>

        {videos.length === 0 && (
          <p className="empty-text">No videos uploaded yet.</p>
        )}

        {videos.map(v => (
          <div key={v.id} className="video-row">
            <div className="video-info">
              <h4>{v.title}</h4>
              <p>
                <strong>Module:</strong> {v.module}
              </p>
              <p>
                <strong>Trainer:</strong> {v.trainer}
              </p>
              <p className="date">
                Uploaded: {formatDate(v.createdAt)}
              </p>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDelete(v.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="admin-video-list">
      <h2>Admin Video Management</h2>

      {renderList("SAP S/4HANA Finance Videos", financeVideos)}
      {renderList("SAP FICO Workshop Videos", ficoVideos)}
    </div>
  );
}
