import { useState } from "react"

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ vote, label }) => <button onClick={vote}>{label}</button>

const StatisticLine = ({ feedback, value }) => (
  <table>
    <tbody>
      <tr>
        <td>{feedback}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  </table>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return "No feedback given"
  }
  return (
    <div>
      <StatisticLine feedback="good" value={props.good} />
      <StatisticLine feedback="neutral" value={props.neutral} />
      <StatisticLine feedback="bad" value={props.bad} />
      <StatisticLine feedback="all" value={props.all} />
      <StatisticLine feedback="average" value={props.average} />
      <StatisticLine feedback="positive" value={props.positive} />
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
