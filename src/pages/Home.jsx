import { Link } from 'react-router'
import Hero from '../components/Hero'

function Home() {
  const features = [
    ['01', 'Practical learning', 'Focus on concepts you can apply in real projects.'],
    ['02', 'Clear structure', 'Move from fundamentals to modern development skills.'],
    ['03', 'Project mindset', 'Build, test and improve instead of only reading theory.'],
  ]

  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHY STUDENTHUB</span>
            <h2>A simple path from learning to building.</h2>
          </div>
          <div className="feature-grid">
            {features.map(([number, title, text]) => (
              <article className="feature" key={number}>
                <span className="feature-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-box">
          <div><span className="eyebrow">START LEARNING</span><h2>Ready to build your next project?</h2></div>
          <Link className="btn btn-primary" to="/courses">View courses →</Link>
        </div>
      </section>
    </>
  )
}

export default Home
