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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default App
