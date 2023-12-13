import { useState } from "react"

const Button = ({ handleCLick, category }) => {
  return <button onClick={handleCLick}>{category}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleCLick={() => setGood(good + 1)} category="good" />
      <Button handleCLick={() => setNeutral(neutral + 1)} category="neutral" />
      <Button handleCLick={() => setBad(bad + 1)} category="bad" />
    </div>
  )
}

export default App
