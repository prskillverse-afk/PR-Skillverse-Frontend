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
    const unsub = onSnapshot(doc(db, "liveClasses", "status"), (snap) => {
      if (snap.exists()) {
        setLiveInfo(snap.data());
      } else {
        setLiveInfo({ isLive: false });
      }
    });

    return () => unsub();
  }, []);

  /* COURSES DATA */
  const courses = [
    {
      id: "sap-s4hana-finance",
      title: "SAP S/4HANA Finance",
      modules: "24 Modules",
      duration: "120+ Hours",
      image:
        "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766226307/ChatGPT_Image_Dec_20_2025_03_54_38_PM_tf3rvf.png",
      accent: "blue",
    },
    {
      id: "sap-fico-workshop",
      title: "SAP FICO Workshop",
      modules: "10 Modules",
      duration: "40+ Hours",
      image:
        "https://res.cloudinary.com/dvknx0hpm/image/upload/v1765889496/ChatGPT_Image_Dec_16_2025_06_21_19_PM_odptrs.png",
      accent: "green",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-page">
      {/* 🔴 HERO */}
      <div className="courses-hero">
        <div>
          <h2>
            {liveInfo.isLive
              ? "🔴 Live Schedule is Available"
              : "📌 Live Schedule Not Available"}
          </h2>
          <p>
            {liveInfo.isLive
              ? "Join today's live SAP session instantly"
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

      {/* 📚 COURSES */}
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div className={`course-card accent-${course.accent}`} key={course.id}>
            <div className="course-card-image">
              <img src={course.image} alt={course.title} />
            </div>

            <div className="course-card-body">
              <h3>{course.title}</h3>
              <div className="course-meta">
                <span>{course.modules}</span>
                <span>{course.duration}</span>
              </div>

              <button onClick={() => navigate(`/recordings/${course.id}`)}>
                Get Started →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
