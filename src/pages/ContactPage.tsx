import { useState, type FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus('Sending your message...')

    try {
      const response = await fetch('https://formsubmit.co/ajax/ashwaqullabaig4@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _subject: 'New Enquiry - Baigs Tutorial Website (React)',
        }),
      })

      const result = await response.json()

      if (response.ok && result.success === 'true') {
        setStatus('Message sent successfully!')
        setForm(initialState)
      } else {
        throw new Error('Failed to send')
      }
    } catch {
      setStatus('Could not send right now. Please email ashwaqullabaig4@gmail.com directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="section animate-in">
        <div className="container split-grid">
          <div>
            <p className="tag">Contact Us</p>
            <h2>Start Your Learning Journey Today</h2>
            <p className="lead">
              We're here to answer any questions you have about our batches, subjects, and admission process.
            </p>
            <div className="glass-card" style={{ marginTop: '30px' }}>
              <h4>Admission Procedure</h4>
              <ul className="feature-list" style={{ marginTop: '15px' }}>
                <li>Step 1: Consultation & Batch Availability Check</li>
                <li>Step 2: Admission Form Submission</li>
                <li>Step 3: Diagnostic Assessment (Optional)</li>
                <li>Step 4: Orientation & Class Schedule Finalization</li>
              </ul>
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <h4>Office Hours</h4>
              <p className="muted">Monday - Friday: 4:00 PM - 9:00 PM</p>
              <p className="muted">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-header">
              <p className="tag">Online Enquiry</p>
            </div>
            
            <div className="form-group">
              <label>Full Name</label>
              <input
                required
                value={form.name}
                placeholder="Ex: Sameer Ahmed"
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                placeholder="Ex: sameer@email.com"
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                required
                value={form.phone}
                placeholder="Ex: +91 91234 56789"
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                placeholder="Tell us about the subject or batch you are interested in..."
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
            </div>

            <button className="btn btn-primary" disabled={submitting} type="submit" style={{ width: '100%', marginTop: '10px' }}>
              {submitting ? 'Sending...' : 'Submit Enquiry'}
            </button>
            <p className="status-text">{status}</p>
          </form>
        </div>
      </section>

      <section className="section alt animate-in">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="tag">Campus Location</p>
          <h2>Visit Our Tutorial</h2>
          <p className="muted" style={{ maxWidth: '600px', margin: '0 auto 30px' }}>
            We are located in a safe, quiet, and student-friendly environment. Come visit us during our office hours to see our classrooms and meet the mentor.
          </p>
          <div className="glass-card" style={{ padding: '60px', background: 'var(--bg-alt)', borderRadius: '24px' }}>
            <p className="muted" style={{ marginBottom: '20px' }}>Click below to navigate directly to our tutorial via Google Maps.</p>
            <a
              href="https://maps.app.goo.gl/noMLCUHzM7AXF1aC7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
