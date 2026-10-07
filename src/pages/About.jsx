function About() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <span className="eyebrow">ABOUT STUDENTHUB</span>
        <h1>Learning should lead to something you can build.</h1>
        <p className="lead">
          StudentHub is a student-focused learning website designed around practical
          web development. It brings core concepts, structured courses and project-based
          learning into one simple experience.
        </p>
        <div className="about-grid">
          <div className="about-panel"><span>01</span><h3>Learn the fundamentals</h3><p>Understand HTML, CSS and JavaScript before moving into React.</p></div>
          <div className="about-panel"><span>02</span><h3>Practice continuously</h3><p>Use small exercises and projects to turn concepts into working skills.</p></div>
          <div className="about-panel"><span>03</span><h3>Build with confidence</h3><p>Combine reusable components and responsive layouts into complete applications.</p></div>
        </div>
      </div>
    </section>
  )
}

export default About
