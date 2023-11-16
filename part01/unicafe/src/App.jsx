import { useState } from 'react'

const Heading = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, feedback }) => <button onClick={handleClick}>{feedback}</button>

const StatLine = ({ feedback, count }) => (
  <p>
    {feedback} {count}
  </p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (newValue) => {
    setGood(newValue)
  }

  const handleNeutral = (newValue) => {
    setNeutral(newValue)
  }

  const handleBad = (newValue) => {
    setBad(newValue)
  }

  return (
    <div>
      <Heading title="give feedback" />

      <Button handleClick={() => handleGood(good + 1)} feedback="good" />
      <Button handleClick={() => handleNeutral(neutral + 1)} feedback="neutral" />
      <Button handleClick={() => handleBad(bad + 1)} feedback="bad" />

      <Heading title="statistics" />
      <StatLine feedback="good" count={good} />
      <StatLine feedback="bad" count={neutral} />
      <StatLine feedback="neutral" count={bad} />
    </div>
  )
}

export default App
