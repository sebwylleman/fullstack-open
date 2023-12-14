const Header = ({ title }) => <h1>{title}</h1>

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (sum, current) => (sum += current.exercises),
    0
  )
  console.log(totalExercises)
  return (
    <div>
      <Header title={course.name} />
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <strong>total of {totalExercises} exercises</strong>
    </div>
  )
}

export default Course
