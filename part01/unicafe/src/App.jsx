import { useState } from "react"

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
)

const Feedback = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={handleGoodClick} label="good" />
      <Button handleClick={handleNeutralClick} label="neutral" />
      <Button handleClick={handleBadClick} label="bad" />
      <Title text="statistics" />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
