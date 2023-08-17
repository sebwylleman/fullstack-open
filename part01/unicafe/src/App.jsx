import { useState } from "react"

const Heading = ({ text }) => <h1>{text}</h1>

const Button = (props) => {
  return <button>{props.label} </button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    console.log("clicked the button")
  }
  return (
    <div>
      <Heading text="give feedback" />
      <Button label="good" onClick={goodClick} />
      <Button label="neutral" />
      <Button label="bad" />
      <Heading text="statistics" />
    </div>
  )
}

export default App
