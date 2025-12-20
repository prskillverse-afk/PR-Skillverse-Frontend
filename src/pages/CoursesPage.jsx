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

  /* 🔴 FETCH LIVE STATUS FROM FIRESTORE */
  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "liveClasses", "status"),
      (snap) => {
        if (snap.exists()) {
          setLiveInfo(snap.data());
        } else {
          setLiveInfo({ isLive: false });
        }
      }
    );

    return () => unsub();
  }, []);

  /* COURSES DATA WITH IMAGES */
  const courses = [
    {
      id: "sap-s4hana-finance",
      title: "SAP S/4HANA Finance",
      modules: "24 Modules",
      duration: "120+ Hours",
      image:
        "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766226307/ChatGPT_Image_Dec_20_2025_03_54_38_PM_tf3rvf.png",
    },
    {
      id: "sap-fico-workshop",
      title: "SAP FICO Workshop",
      modules: "10 Modules",
      duration: "40+ Hours",
      image:
        "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766226448/ChatGPT_Image_Dec_20_2025_03_57_00_PM_flaqqo.png",
    },
  ];

  /* SEARCH FILTER */
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-page">
      {/* 🔴 LIVE CLASS HERO */}
      <div className="courses-hero">
        <div className="hero-text">
          <h2>
            {liveInfo.isLive
              ? "🔴 Live Schedule is Available Now"
              : "📌 Live Schedule Not Available"}
          </h2>
          <p>
            {liveInfo.isLive
              ? "Click below to view today's live SAP class schedule"
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

      {/* 🔍 SEARCH */}
      <div className="courses-search">
        <input
          type="text"
          placeholder="Search course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 📚 COURSES GRID */}
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>

            <div className="course-body">
              <h3>{course.title}</h3>
              <p>
                {course.modules} • {course.duration}
              </p>

              <button
                onClick={() => navigate(`/recordings/${course.id}`)}
              >
                Get Started →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
