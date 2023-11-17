const Header = ({ title }) => <h1>{title}</h1>

const Total = ({ sum }) => (
  <p>
    <strong>total of {sum} exercises</strong>
  </p>
)

const Part = ({ coursePart }) => (
  <p>
    {coursePart.name} {coursePart.exercises}
  </p>
)

const Content = ({ content }) => (
  <>
    {content.map((part) => (
      <Part key={part.id} coursePart={part} />
    ))}
  </>
)

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content content={course.parts} />
      <Total sum={course.parts.reduce((sum, curr) => sum + curr.exercises, 0)} />
    </>
  )
}

export default Course
