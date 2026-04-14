function AboutPage() {
  return (
    <>
      <section className="section animate-in">
        <div className="container split-grid">
          <div>
            <p className="tag">About Us</p>
            <h2>Empowering Minds, Shaping Futures</h2>
            <p className="lead">
              Founded by Ashwaq Ulla Baig (BE CSE, MCA), Baigs Tutorial is built on the belief that every student has the potential to excel when given the right tools and guidance.
            </p>
            <p className="muted">
              Since our inception, we have dedicated ourselves to bridging the gap between classroom teaching and deep student understanding. We don't just prepare students for exams; we prepare them for a lifetime of logical thinking and academic curiosity.
            </p>
          </div>

          <figure className="image-card">
            <img src="/images/about_hero.png" alt="Baigs Tutorial Campus Life" />
          </figure>
        </div>
      </section>

      <section className="section alt animate-in">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <article className="glass-card">
            <div className="pillar-icon">🚀</div>
            <h3>Our Mission</h3>
            <p className="muted">
              To provide accessible, high-quality coaching that simplifies complex concepts and builds a strong foundation for future career paths in Science, Commerce, and Technology.
            </p>
          </article>
          <article className="glass-card">
            <div className="pillar-icon">🌟</div>
            <h3>Our Vision</h3>
            <p className="muted">
              To be the most trusted academic partner for students, recognized for our innovative teaching methods, consistent 100% results, and holistic student development.
            </p>
          </article>
        </div>
      </section>

      <section className="section animate-in">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="tag">The Baigs Philosophy</p>
            <h2>Our Teaching Approach</h2>
            <div style={{ display: 'grid', gap: '40px', marginTop: '30px' }}>
              <div>
                <h4>Concept over Calculations</h4>
                <p className="muted">
                  We believe that once a student understands the 'Core Concept', the numericals and problems become easy. Our sessions are heavily focused on theoretical depth before moving to application.
                </p>
              </div>
              <div>
                <h4>Personalized Pacing</h4>
                <p className="muted">
                  Different students learn at different speeds. Our small batch sizes allow Ashwaq Sir and our team to adapt the teaching speed to ensure no student is left behind.
                </p>
              </div>
              <div>
                <h4>The "Ask Why" Culture</h4>
                <p className="muted">
                  We encourage students to question everything. This builds critical thinking skills that are essential not just for Board exams, but for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section warm animate-in">
        <div className="container">
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="tag">Founder's Message</p>
            <h2>A Word from Ashwaq Ulla Baig</h2>
            <p className="lead">"Education is the most powerful tool which you can use to change the world."</p>
            <p className="muted">
              My journey with Baigs Tutorial started with a single goal: to make learning enjoyable and less stressful. With my background in Computer Science and years of experience, I’ve developed a methodology that focuses on making complex subjects intuitive. I personally supervise the progress of every student to ensure they are on the right track to success.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
