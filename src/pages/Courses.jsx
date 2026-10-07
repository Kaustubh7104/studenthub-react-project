import CourseCard from '../components/CourseCard'

const courses = [
  { id: 1, title: 'HTML & CSS', description: 'Learn the foundations of modern web pages, semantic HTML and responsive styling.', level: 'Beginner', duration: '4 weeks', icon: '</>' },
  { id: 2, title: 'JavaScript', description: 'Learn variables, functions, arrays, events and the programming concepts behind web apps.', level: 'Intermediate', duration: '5 weeks', icon: 'JS' },
  { id: 3, title: 'React', description: 'Build modern interfaces using components, props, state, events and routing.', level: 'Intermediate', duration: '6 weeks', icon: '⚛' },
]

function Courses() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <div><span className="eyebrow">LEARNING PATH</span><h1>Courses</h1></div>
          <p>Three focused courses to take you from web fundamentals to React applications.</p>
        </div>
        <div className="course-grid">
          {courses.map((course) => <CourseCard key={course.id} {...course} />)}
        </div>
      </div>
    </section>
  )
}

export default Courses
