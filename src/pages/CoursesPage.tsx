import { Link } from 'react-router-dom'

const courses = [
  {
    title: 'Primary & Secondary',
    subtitle: 'Standard 1st - 10th',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Regional Languages'],
    text: 'Building a rock-solid foundation for young minds. We combine conceptual clarity with consistent practice sessions to ensure students excel in school exams and develop a genuine interest in learning.',
    board: 'CBSE | ICSE | State Board',
  },
  {
    title: 'Senior Secondary Science',
    subtitle: 'Standard 11th & 12th',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science'],
    text: 'Mastering the core principles of Science. Our expert-led sessions focus on deep conceptual understanding, laboratory concepts, and rigorous preparation for board exams and medical/engineering foundation.',
    board: 'CBSE | State Board',
  },
  {
    title: 'Senior Secondary Commerce',
    subtitle: 'Standard 11th & 12th',
    subjects: ['Accountancy', 'Economics', 'Business Studies', 'Applied Mathematics', 'English'],
    text: 'Preparing future leaders of the business world. We provide specialized coaching for complex accountancy problems, economic theories, and business case studies to ensure top-tier results.',
    board: 'CBSE | State Board',
  },
  {
    title: 'Engineering & Specialized',
    subtitle: 'University & Degree Level',
    subjects: ['Mathematics', 'Engineering DSA', 'Computer Science', 'Technical Foundation'],
    text: 'Advanced coaching for technical degrees. We simplify complex engineering mathematics and Data Structures & Algorithms (DSA) to help students excel in their university curriculum and placement rounds.',
    board: 'University Syllabus',
  },
]

function CoursesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="tag">Level Up Your Knowledge</p>
        <h2>Redefining Academic Success</h2>
        <p className="lead">
          From basic foundations to specialized career streams, our programs are tailored to help every student shine.
        </p>

        <div className="courses-grid">
          {courses.map((course) => (
            <article key={course.title} className="glass-card course-card">
              <div className="card-header">
                <h3>{course.title}</h3>
                <p className="tag">{course.board}</p>
              </div>
              <p className="lead" style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '8px' }}>
                {course.subtitle}
              </p>

              <div className="subject-tags">
                {course.subjects.map((sub) => (
                  <span key={sub} className="subject-tag">
                    {sub}
                  </span>
                ))}
              </div>

              <p className="muted" style={{ marginBottom: '24px' }}>
                {course.text}
              </p>

              <Link to="/contact" className="btn-enquire">
                Enquire Now <span style={{ fontSize: '1.2rem' }}>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesPage
