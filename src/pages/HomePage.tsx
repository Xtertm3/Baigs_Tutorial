import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <section className="hero section animate-in">
        <div className="container hero-grid">
          <div>
            <div className="hero-logo-container">
              <img src="/logo.png" alt="Baigs Tutorial" className="hero-logo" />
              <div className="logo-placeholder large">BT</div>
            </div>
            <p className="tag">Empowering the Future</p>
            <h1>
              Learn Smarter, Score Higher, <span>Grow Faster</span>
            </h1>
            <p className="lead">
              Baigs Tutorial is a premier coaching destination where deep conceptual teaching meets personal mentorship.
              We don't just teach subjects; we build academic confidence.
            </p>

            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-value">500+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Results</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">8+ Yrs</span>
                <span className="stat-label">Expertise</span>
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hero-founder-card">
            <img src="/founder.png" alt="Founder Ashwaq Ulla Baig" className="founder-img" />
            <div className="founder-badge">Founder: Ashwaq Ulla Baig</div>
          </div>
        </div>
      </section>

      <section className="section alt animate-in">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <p className="tag">Our Pillars</p>
            <h2>Academic Excellence at Baigs</h2>
            <p className="muted">
              We focus on a comprehensive educational ecosystem that prioritizes the student’s learning journey.
            </p>
          </div>

          <div className="courses-grid">
            <article className="glass-card pillar-card">
              <div className="pillar-icon">🎯</div>
              <h3>Concept Clarity</h3>
              <p className="muted">
                Moving away from rote learning. We ensure every student understands the 'why' behind the 'what'.
              </p>
            </article>
            <article className="glass-card pillar-card">
              <div className="pillar-icon">📊</div>
              <h3>Regular Analysis</h3>
              <p className="muted">
                Weekly tests and detailed report cards for every student to track progress and identify gaps.
              </p>
            </article>
            <article className="glass-card pillar-card">
              <div className="pillar-icon">👥</div>
              <h3>Small Batches</h3>
              <p className="muted">
                Limited students per batch to ensure personalized attention and interactive doubt-clearing sessions.
              </p>
            </article>
            <article className="glass-card pillar-card">
              <div className="pillar-icon">📞</div>
              <h3>Parent Connect</h3>
              <p className="muted">
                Transparent feedback loops with parents through monthly meetings and performance updates.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section animate-in">
        <div className="container split-grid">
          <article>
            <p className="tag">The Roadmap</p>
            <h2>The Baigs Methodology</h2>
            <p className="lead">
              Our 3-step pedagogical approach designed for consistent student growth.
            </p>
            <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
              <div className="method-step">
                <h4>01. Assessment & Planning</h4>
                <p className="muted">We identify each student’s current standing and create a custom study roadmap.</p>
              </div>
              <div className="method-step" style={{ borderColor: 'var(--accent2)' }}>
                <h4>02. Interactive Mastery</h4>
                <p className="muted">Engaging classroom sessions with real-world examples and intensive problem solving.</p>
              </div>
              <div className="method-step" style={{ borderColor: 'var(--gold)' }}>
                <h4>03. Evaluation & Output</h4>
                <p className="muted">Timed mock exams and strategy sessions to ensure absolute readiness for the finals.</p>
              </div>
            </div>
          </article>

        </div>
      </section>

      <section className="section warm animate-in">
        <div className="container split-grid">
          <article className="glass-card">
            <p className="tag">Visionary Leadership</p>
            <h2>Ashwaq Ulla Baig</h2>
            <p className="lead">BE in CSE, MCA | Founder & Chief Mentor</p>
            <p className="muted">
              With 8+ years in tutorial leadership, Ashwaq Ulla Baig has a mission to democratize quality education.
              His "students-first" approach has led to 500+ success stories and a culture of academic curiosity at the tutorial.
            </p>
            <Link to="/about" className="btn btn-ghost" style={{ marginTop: '20px', display: 'inline-block' }}>Read Full Bio</Link>
          </article>

          <article className="glass-card">
            <h3>Student Reviews</h3>
            <p className="lead" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
              "The conceptual teaching at Baigs Tutorial changed how I look at Mathematics. I went from 60% to 95% in just one year!"
            </p>
            <p className="muted" style={{ fontWeight: 700 }}>— Sameer Ahmed, CBSE XII</p>
            <div style={{ borderTop: '1px solid var(--line)', marginTop: '20px', paddingTop: '20px' }}>
              <p className="muted" style={{ fontSize: '0.85rem' }}>
                Join 500+ happy students who discovered their true potential with us.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default HomePage
