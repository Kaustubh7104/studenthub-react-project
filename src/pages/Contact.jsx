import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page-section">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>Have a question?<br />Let’s talk.</h1>
          <p className="lead">Send us a message and we’ll get back to you with the information you need.</p>
          <div className="contact-info"><strong>Email</strong><span>hello@studenthub.example</span></div>
          <div className="contact-info"><strong>Availability</strong><span>Monday – Friday · 9:00 AM – 6:00 PM</span></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} required />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="How can we help?" value={message} onChange={(event) => setMessage(event.target.value)} required />
          <button className="btn btn-primary form-submit" type="submit">Send message →</button>
          {submitted && <p className="success-message">Thank you, {name}! Your message has been received.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
