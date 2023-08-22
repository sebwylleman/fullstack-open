import { useState } from "react"

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
)

const Feedback = ({ feedbackScore }) => {
  return (
    <div>
      <p>good {feedbackScore.good}</p>
      <p>neutral {feedbackScore.neutral}</p>
      <p>bad {feedbackScore.bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state

  const [feedbackScore, setfeedbackScore] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleClick = (type) => {
    setfeedbackScore({ ...feedbackScore, [type]: feedbackScore[type] + 1 })
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={() => handleClick("good")} label="good" />
      <Button handleClick={() => handleClick("neutral")} label="neutral" />
      <Button handleClick={() => handleClick("bad")} label="bad" />
      <Title text="statistics" />
      <Feedback feedbackScore={feedbackScore} />
    </div>
  )
}

export default App
