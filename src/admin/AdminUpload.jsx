import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import "./AdminUpload.css";

/* ================= COURSES & MODULES ================= */

const courses = {
  "SAP S/4HANA Finance": {
    id: "sap-s4hana-finance",
    modules: [
      "S/4HANA Finance Basics",
      "Enterprise Structure",
      "Global Parameters",
      "GL Accounting",
      "Accounts Payable",
      "APP & DMEE",
      "Accounts Receivable",
      "Dunning",
      "EBS",
      "Asset Accounting",
      "Other Topics",
    ],
  },
  "SAP FICO Workshop": {
    id: "sap-fico-workshop",
    modules: [
      "FICO Basics",
      "GL Accounting",
      "Accounts Payable",
      "Accounts Receivable",
      "Asset Accounting",
      "Other Topics",
    ],
  },
};

/* ================= YOUTUBE ================= */

function getEmbedUrl(url) {
  if (url.includes("youtu.be")) {
    return `https://www.youtube.com/embed/${url.split("/").pop()}`;
  }
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

/* ================= COMPONENT ================= */

export default function AdminUpload() {
  const [course, setCourse] = useState("SAP S/4HANA Finance");

  const [batch, setBatch] = useState("");
  const [module, setModule] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState(""); // ✅ NEW

  /* TRAINER */
  const [trainerType, setTrainerType] = useState("Ram");
  const [customTrainer, setCustomTrainer] = useState("");

  const [groupedModules, setGroupedModules] = useState({});
  const [activeModule, setActiveModule] = useState("");

  /* ================= SAFE FETCH ================= */

  useEffect(() => {
    let unsubscribe = () => {};

    const orderedQuery = query(
      collection(db, "videos"),
      where("courseId", "==", courses[course].id),
      orderBy("createdAt", "asc")
    );

    const fallbackQuery = query(
      collection(db, "videos"),
      where("courseId", "==", courses[course].id)
    );

    const subscribe = (q, allowFallback = false) => {
      unsubscribe = onSnapshot(
        q,
        (snap) => {
          const grouped = {};
          snap.docs.forEach((d) => {
            const data = d.data();
            if (!grouped[data.module]) grouped[data.module] = [];
            grouped[data.module].push({ id: d.id, ...data });
          });

          setGroupedModules(grouped);
          setActiveModule((prev) =>
            prev && grouped[prev] ? prev : Object.keys(grouped)[0] || ""
          );
        },
        (error) => {
          if (error.code === "failed-precondition" && !allowFallback) {
            unsubscribe();
            subscribe(fallbackQuery, true);
          }
        }
      );
    };

    subscribe(orderedQuery);
    return () => unsubscribe();
  }, [course]);

  /* ================= UPLOAD ================= */

  async function handleUpload() {
    if (!batch || !module || !title || !videoUrl || !description) {
      alert("All fields including description are required");
      return;
    }

    const trainer =
      trainerType === "Ram" ? "Ram" : customTrainer.trim();
    if (!trainer) {
      alert("Trainer name required");
      return;
    }

    await addDoc(collection(db, "videos"), {
      courseId: courses[course].id,
      courseTitle: course,
      batch,
      module,
      title,
      description, // ✅ STORED
      trainer,
      videoUrl: getEmbedUrl(videoUrl),
      createdAt: serverTimestamp(),
    });

    /* RESET */
    setBatch("");
    setModule("");
    setTitle("");
    setVideoUrl("");
    setDescription(""); // ✅ RESET
    setTrainerType("Ram");
    setCustomTrainer("");

    setActiveModule(module);
  }

  /* ================= DELETE ================= */

  async function handleDelete(id) {
    if (window.confirm("Delete this video permanently?")) {
      await deleteDoc(doc(db, "videos", id));
    }
  }

  /* ================= UI ================= */

  return (
    <div className="admin-layout">
      {/* COURSE SELECTOR */}
      <div className="course-selector">
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          {Object.keys(courses).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* MODULE LIST */}
      <div className="admin-modules">
        <h3>{course}</h3>
        {Object.keys(groupedModules).map((m, i) => (
          <div
            key={m}
            className={`admin-module-card ${
              activeModule === m ? "active" : ""
            }`}
            onClick={() => setActiveModule(m)}
          >
            <strong>Module {i + 1}</strong>
            <p>{m}</p>
            <span>{groupedModules[m].length} lessons</span>
          </div>
        ))}
      </div>

      {/* VIDEO LIST */}
      <div className="admin-videos">
        <h3>{activeModule || "Select Module"}</h3>
        {groupedModules[activeModule]?.map((v) => (
          <div key={v.id} className="admin-video-row">
            <div>
              <strong>{v.title}</strong>
              <p>
                {v.batch} • Trainer: {v.trainer}
              </p>
            </div>
            <button onClick={() => handleDelete(v.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* UPLOAD FORM */}
      <div className="admin-upload">
        <h3>Upload Video</h3>

        <input
          placeholder="Batch (Jan 2025)"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />

        <select value={module} onChange={(e) => setModule(e.target.value)}>
          <option value="">Select Module</option>
          {courses[course].modules.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        <input
          placeholder="Lesson Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* ✅ DESCRIPTION */}
        <textarea
          placeholder="Lesson Description (shown to students)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />

        <select
          value={trainerType}
          onChange={(e) => setTrainerType(e.target.value)}
        >
          <option value="Ram">RAM</option>
          <option value="Others">Others</option>
        </select>

        {trainerType === "Others" && (
          <input
            placeholder="Enter Trainer Name"
            value={customTrainer}
            onChange={(e) => setCustomTrainer(e.target.value)}
          />
        )}

        <input
          placeholder="YouTube URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        <button onClick={handleUpload}>Upload Video</button>
      </div>
    </div>
  );
}
