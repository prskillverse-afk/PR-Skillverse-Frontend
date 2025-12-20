export default function CourseSidebar({ videos, activeId, onSelect }) {
  return (
    <div className="course-sidebar">
      {videos.map(video => (
        <div
          key={video.id}
          className={`video-item ${activeId === video.id ? "active" : ""}`}
          onClick={() => onSelect(video)}
        >
          {video.title}
        </div>
      ))}
    </div>
  );
}
