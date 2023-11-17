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
    <Part coursePart={content[0]} />
    <Part coursePart={content[1]} />
    <Part coursePart={content[2]} />
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
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App
