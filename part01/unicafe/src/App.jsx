import { useState } from "react"

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
)

const Stats = ({ feedbackScore }) => {
  if (feedbackScore.all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <p>good {feedbackScore.good}</p>
      <p>neutral {feedbackScore.neutral}</p>
      <p>bad {feedbackScore.bad}</p>
      <p>all {feedbackScore.all}</p>
      <p>average {feedbackScore.average}</p>
      <p>positive {feedbackScore.positive} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state

  const [feedbackScore, setfeedbackScore] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0,
  })

  const handleClick = (type) => {
    const updatedScore = feedbackScore[type] + 1
    const newAll =
      feedbackScore.good + feedbackScore.neutral + feedbackScore.bad + 1
    let newAverage = 0
    if (newAll !== 0) {
      newAverage =
        (feedbackScore.good * 1 +
          feedbackScore.neutral * 0 +
          feedbackScore.bad * -1 +
          (type === "good" ? 1 : type === "neutral" ? 0 : -1)) /
        newAll
    }

    const newPositive = (type) => {
      if (type === "good") {
        return 100 * ((feedbackScore.good + 1) / newAll)
      }
      return 100 * (feedbackScore.good / newAll)
    }

    setfeedbackScore({
      ...feedbackScore,
      [type]: updatedScore,
      all: newAll,
      average: newAverage,
      positive: newPositive(type),
    })
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={() => handleClick("good")} label="good" />
      <Button handleClick={() => handleClick("neutral")} label="neutral" />
      <Button handleClick={() => handleClick("bad")} label="bad" />
      <Title text="statistics" />
      <Stats feedbackScore={feedbackScore} />
    </div>
  )
}

export default App
