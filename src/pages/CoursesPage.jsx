// src/pages/CoursesPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/CoursesPage.css";

export default function CoursesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [liveInfo, setLiveInfo] = useState({
    isLive: false,
    zoomLink: "",
  });

  /* 🔴 FETCH LIVE STATUS */
  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "liveClasses", "status"),
      (snap) => {
        if (snap.exists()) setLiveInfo(snap.data());
        else setLiveInfo({ isLive: false });
      }
    );
    return () => unsub();
  }, []);

  const courses = [
    {
      id: "sap-s4hana-finance",
      title: "SAP S/4HANA Finance",
      modules: "24 Modules",
      duration: "120+ Hours",
    },
    {
      id: "sap-fico-workshop",
      title: "SAP FICO Workshop",
      modules: "10 Modules",
      duration: "40+ Hours",
    },
  ];

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-page">
      {/* 🔴 LIVE SCHEDULE HERO */}
      <div className="courses-hero">
        <div>
          <h2>
            {liveInfo.isLive
              ? "🔴 Live Schedule is Available Now"
              : "📌 Live Schedule Not Available"}
          </h2>

          <p>
            {liveInfo.isLive
              ? "Click below to view the live class schedule"
              : "Please continue with recorded classes"}
          </p>
        </div>

        {liveInfo.isLive && (
          <button
            className="live-btn"
            onClick={() => window.open(liveInfo.zoomLink, "_blank")}
          >
            View Schedule
          </button>
        )}
      </div>

      {/* SEARCH */}
      <div className="courses-search">
        <input
          placeholder="Search course"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* COURSES */}
      <div className="courses-grid">
        {filtered.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.modules} • {course.duration}</p>

            <button onClick={() => navigate(`/recordings/${course.id}`)}>
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
