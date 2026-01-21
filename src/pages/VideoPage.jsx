// src/pages/VideoPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

import VideoPlayer from "../components/VideoPlayer";
import "./VideoPage.css";

export default function VideoPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  const [modules, setModules] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);
  const [openModule, setOpenModule] = useState(null);

  /* ================= FETCH VIDEOS ================= */
  useEffect(() => {
    async function fetchVideos() {
      try {
        const q = query(
          collection(db, "videos"),
          where("courseId", "==", courseId)
        );

        const snap = await getDocs(q);
        const list = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setVideos(list);
        if (list.length) setActiveVideo(list[0]);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, [courseId]);

  /* ================= GROUP VIDEOS BY MODULE ================= */
  useEffect(() => {
    const grouped = {};

    videos.forEach((video) => {
      if (!grouped[video.module]) {
        grouped[video.module] = {
          title: video.module,
          lessons: [],
          totalMinutes: 0,
        };
      }

      grouped[video.module].lessons.push(video);
      grouped[video.module].totalMinutes += video.duration || 0;
    });

    setModules(grouped);

    if (!openModule && Object.keys(grouped).length > 0) {
      setOpenModule(Object.keys(grouped)[0]);
    }
  }, [videos, openModule]);

  return (
    <div className="video-page">
      {/* ================= LEFT SIDE ================= */}
      <div className="left">
        {/* 🔙 BACK TO HOME / COURSES */}
        <button
          className="back-to-home"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <VideoPlayer video={activeVideo} />
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="right">
        <h3 className="course-title">Course Content</h3>

        {Object.keys(modules).map((moduleKey) => {
          const module = modules[moduleKey];
          const isOpen = openModule === moduleKey;

          return (
            <div
              key={moduleKey}
              className={`module ${isOpen ? "open" : ""}`}
            >
              {/* MODULE HEADER */}
              <div
                className="module-header"
                onClick={() =>
                  setOpenModule(isOpen ? null : moduleKey)
                }
              >
                <div className="module-title">
                  <strong>{module.title}</strong>
                </div>

                <div className="module-meta">
                  <span>{module.lessons.length} lessons</span>
                  <span>
                    {Math.floor(module.totalMinutes / 60)} Hr{" "}
                    {module.totalMinutes % 60} mins
                  </span>
                </div>
              </div>

              {/* LESSON LIST */}
              {isOpen && (
                <div className="lesson-list">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`lesson-item ${
                        activeVideo?.id === lesson.id ? "active" : ""
                      }`}
                      onClick={() => setActiveVideo(lesson)}
                    >
                      <div className="lesson-left">
                        ▶ <span>{lesson.title}</span>
                      </div>

                      <div className="lesson-right">
                        {Math.floor(lesson.duration / 60)} Hr{" "}
                        {lesson.duration % 60} mins
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
