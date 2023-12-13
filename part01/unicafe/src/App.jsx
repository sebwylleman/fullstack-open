import { useState } from "react"

const Button = ({ handleCLick, label }) => {
  return <button onClick={handleCLick}>{label}</button>
}

const StatisticLine = ({ feedback, label }) => (
  <p>
    {label}: {feedback}
  </p>
)

const Statistics = ({ good, neutral, bad, average, positive }) => {
  return (
    <div>
      <StatisticLine feedback={good} label="good" />
      <StatisticLine feedback={neutral} label="neutral" />
      <StatisticLine feedback={bad} label="bad" />
      <StatisticLine feedback={good + neutral + bad} label="all" />
      <StatisticLine feedback={average} label="average" />
      <StatisticLine feedback={positive} label="positive" />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  const handleAverage = () => {
    return total === 0 ? 0 : (good - bad) / total
  }

  const handlePositive = () => {
    return total === 0 ? 0 : (good / total) * 100 + " %"
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleCLick={() => setGood(good + 1)} label="good" />
      <Button handleCLick={() => setNeutral(neutral + 1)} label="neutral" />
      <Button handleCLick={() => setBad(bad + 1)} label="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={handleAverage()}
        positive={handlePositive()}
      />
    </div>
  )
}

export default App
