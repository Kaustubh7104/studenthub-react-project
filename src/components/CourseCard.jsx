function CourseCard({ title, description, level, duration, icon }) {
  return (
    <article className="course-card">
      <div className="course-icon">{icon}</div>
      <div className="course-meta"><span>{level}</span><span>{duration}</span></div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="text-button" type="button">Learn more <span>→</span></button>
    </article>
  )
}

export default CourseCard
