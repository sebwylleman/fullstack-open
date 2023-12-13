import { useState } from "react"

const Button = ({ handleCLick, label }) => {
  return <button onClick={handleCLick}>{label}</button>
}

const Stats = ({ feedback, label }) => (
  <p>
    {label}: {feedback}
  </p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleCLick={() => setGood(good + 1)} label="good" />
      <Button handleCLick={() => setNeutral(neutral + 1)} label="neutral" />
      <Button handleCLick={() => setBad(bad + 1)} label="bad" />
      <h1>statistics</h1>
      <Stats feedback={good} label="good" />
      <Stats feedback={neutral} label="neutral" />
      <Stats feedback={bad} label="bad" />
      <Stats feedback={total} label="all" />
      <Stats feedback={(good - bad) / total} label="average" />
      <Stats feedback={(good / total) * 100 + " %"} label="positive" />
    </div>
  )
}

export default App
