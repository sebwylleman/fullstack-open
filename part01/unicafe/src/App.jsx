import { useState } from "react"

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {}

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={handleGoodClick} label="good" />
      <Button handleClick={handleGoodClick} label="neutral" />
      <Button handleClick={handleGoodClick} label="bad" />
      <Title text="statistics" />
    </div>
  )
}

export default App
