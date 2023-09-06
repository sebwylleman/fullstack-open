import { useState } from "react"

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ vote, label }) => <button onClick={vote}>{label}</button>

const Stats = ({ label, feedback }) => (
  <p>
    {label} {feedback}
  </p>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text="give feedback" />
      <Button vote={() => setGood(good + 1)} label="good" />
      <Button vote={() => setNeutral(neutral + 1)} label="neutral" />
      <Button vote={() => setBad(bad + 1)} label="bad" />
      <Heading text="statistics" />
      <Stats label={"good"} feedback={good} />
      <Stats label={"neutral"} feedback={neutral} />
      <Stats label={"bad"} feedback={bad} />
    </div>
  )
}

export default App
