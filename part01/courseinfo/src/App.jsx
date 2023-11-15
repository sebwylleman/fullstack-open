const Header = (props) => <h1>{props.course.name}</h1>

const Part = (props) => (
  <p>
    {props.part} : {props.exercises}
  </p>
)

const Content = (props) => (
  <>
    <Part
      part={props.parts[0].name}
      exercises={props.parts[0].exercises}
    />
    <Part
      part={props.parts[1].name}
      exercises={props.parts[1].exercises}
    />
    <Part
      part={props.parts[2].name}
      exercises={props.parts[2].exercises}
    />
  </>
)

const Total = (props) => (
  <p>
    Total:{' '}
    {props.sum[0].exercises +
      props.sum[1].exercises +
      props.sum[2].exercises}
  </p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts} />
    </div>
  )
}

export default App
