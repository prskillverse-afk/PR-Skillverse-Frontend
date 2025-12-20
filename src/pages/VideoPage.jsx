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

  /* FETCH VIDEOS */
  useEffect(() => {
    async function fetchVideos() {
      const q = query(
        collection(db, "videos"),
        where("courseId", "==", courseId)
      );

      const snap = await getDocs(q);
      const list = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      setVideos(list);
      if (list.length) setActiveVideo(list[0]);
    }

    fetchVideos();
  }, [courseId]);

  /* GROUP BY MODULE */
  useEffect(() => {
    const grouped = {};

    videos.forEach((v) => {
      if (!grouped[v.module]) {
        grouped[v.module] = {
          title: v.module,
          lessons: [],
          totalMinutes: 0,
        };
      }

      grouped[v.module].lessons.push(v);
      grouped[v.module].totalMinutes += v.duration || 0;
    });

    setModules(grouped);

    if (!openModule && Object.keys(grouped).length) {
      setOpenModule(Object.keys(grouped)[0]);
    }
  }, [videos]);

  return (
    <div className="video-page">
      {/* LEFT SIDE */}
      <div className="left">
        {/* 🏠 HOME BUTTON */}
        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          🏠 Home
        </button>

        <VideoPlayer video={activeVideo} />
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <h3 className="course-title">Course Content</h3>

        {Object.keys(modules).map((moduleKey, index) => {
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
                <div>
                  <strong>Module {index + 1}</strong>
                  <p>{module.title}</p>
                </div>

                <div className="module-meta">
                  <span>{module.lessons.length} lessons</span>
                  <span>
                    {Math.floor(module.totalMinutes / 60)} Hr{" "}
                    {module.totalMinutes % 60} mins
                  </span>
                </div>
              </div>

              {/* LESSONS */}
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
