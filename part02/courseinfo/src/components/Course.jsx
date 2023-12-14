const Header = ({ title }) => <h2>{title}</h2>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (sum, current) => (sum += current.exercises),
    0
  )
  return <strong>total of {totalExercises} exercises</strong>
}

const Course = ({ course, name }) => {
  return (
    <div>
      <Header title={name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
