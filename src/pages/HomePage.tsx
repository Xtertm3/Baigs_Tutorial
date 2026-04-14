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
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div className="pulse-badge" style={{ marginBottom: 0 }}>
                <span className="pulse-dot"></span>
                Admissions Open 2026
              </div>
              <p className="tag">Empowering the Future since 2018</p>
            </div>
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
                <div className="avatar-stack">
                  <div className="avatar"><img src="https://i.pravatar.cc/150?u=1" alt="Student" /></div>
                  <div className="avatar"><img src="https://i.pravatar.cc/150?u=2" alt="Student" /></div>
                  <div className="avatar"><img src="https://i.pravatar.cc/150?u=3" alt="Student" /></div>
                  <div className="avatar"><img src="https://i.pravatar.cc/150?u=4" alt="Student" /></div>
                  <span className="avatar-count">+24 this week</span>
                </div>
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

      <section className="section alt reveal">
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

      <section className="section reveal">
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

      <section className="section alt animate-in">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', textAlign: 'center' }}>
            <article className="glass-card">
              <p className="tag" style={{ border: 'none', padding: 0, marginBottom: '15px' }}>Our Mission</p>
              <h3>Empowering Conceptual Clarity</h3>
              <p className="muted">
                Our mission is to provide an uncompromising standard of personalized coaching that translates complex academic challenges into intuitive learning experiences. Since 2018, we have been committed to ensuring no student is left behind in the pursuit of logical mastery and academic excellence.
              </p>
            </article>
            <article className="glass-card">
              <p className="tag" style={{ border: 'none', padding: 0, marginBottom: '15px' }}>Our Vision</p>
              <h3>Shaping Critical Thinkers</h3>
              <p className="muted">
                Our vision is to evolve into a global benchmark for conceptual education, where academic results are a natural byproduct of a student's genuine curiosity. We aim to ignite minds to see beyond the syllabus and develop a profound, lasting passion for Information Science and Mathematics.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section warm reveal">
        <div className="container split-grid">
          <article className="glass-card">
            <p className="tag">Visionary Leadership</p>
            <h2>Ashwaq Ulla Baig</h2>
            <div className="qual-list">
              <span className="qual-tag">Information Science & Engineering</span>
              <span className="qual-tag">MCA</span>
              <span className="qual-tag">BA in Hindi</span>
            </div>
            <p className="lead" style={{ fontWeight: 700, marginTop: '5px' }}>Founder & Chief Mentor</p>
            <p className="muted">
              With 8+ years in tutorial leadership, Ashwaq Ulla Baig has a mission to democratize quality education.
              His "students-first" approach has led to 500+ success stories and a culture of academic curiosity at the tutorial.
            </p>
            <Link to="/about" className="btn btn-ghost" style={{ marginTop: '20px', display: 'inline-block' }}>Read Full Bio</Link>
          </article>

          <article className="glass-card" style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div className="avatar" style={{ margin: 0, width: '50px', height: '50px', border: '2px solid var(--accent2)' }}>
                <img src="https://i.pravatar.cc/150?u=5" alt="Student Sameer" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Student Reviews</h3>
                <div style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>★★★★★ Verified Student</div>
              </div>
            </div>
            <p className="lead" style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text)' }}>
              "The conceptual teaching at Baigs Tutorial changed how I look at Mathematics. I went from 60% to 95% in just one year!"
            </p>
            <p className="muted" style={{ fontWeight: 700, marginTop: '15px' }}>— Sameer Ahmed, CBSE XII</p>
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
