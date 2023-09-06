import { useState } from "react"

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ vote, label }) => <button onClick={vote}>{label}</button>

const Statistics = (props) => {
  if (props.all === 0) {
    return "No feedback given"
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  const average = () => {
    if (all === 0) {
      return 0
    }
    return (good * 1 + neutral * 0 - bad * 1) / all
  }

  const positive = () => {
    if (all === 0) {
      return 0
    }
    return `${good / all} %`
  }

  return (
    <div>
      <Heading text="give feedback" />
      <Button vote={() => setGood(good + 1)} label="good" />
      <Button vote={() => setNeutral(neutral + 1)} label="neutral" />
      <Button vote={() => setBad(bad + 1)} label="bad" />
      <Heading text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average()}
        positive={positive()}
      />
    </div>
  )
}

export default App
