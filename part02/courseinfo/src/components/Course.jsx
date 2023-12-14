const Header = ({ title }) => <h1>{title}</h1>

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )
}

export default Course
