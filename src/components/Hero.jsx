import { Link } from 'react-router'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">STUDENT LEARNING PLATFORM</span>
          <h1>Learn skills that turn ideas into <span>real projects.</span></h1>
          <p>
            StudentHub helps students learn web development through clear lessons,
            practical courses and project-focused learning.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/courses">Explore courses</Link>
            <Link className="btn btn-secondary" to="/about">Learn about us</Link>
          </div>
        </div>
        <div className="hero-card" aria-label="StudentHub learning summary">
          <div className="hero-card-top">
            <span>Learning dashboard</span>
            <span className="status-dot">●</span>
          </div>
          <div className="progress-ring">
            <div><strong>72%</strong><small>Progress</small></div>
          </div>
          <div className="hero-stats">
            <div><strong>12</strong><span>Lessons</span></div>
            <div><strong>04</strong><span>Projects</span></div>
            <div><strong>03</strong><span>Courses</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
