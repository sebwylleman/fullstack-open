import { useState } from 'react'

const Heading = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, feedback }) => <button onClick={handleClick}>{feedback}</button>

const StatLine = ({ type, number }) => (
  <p>
    {type} {number}
  </p>
)
const Statistics = (props) => {
  if (props.calcTotal === 0) return <p>No feedback given</p>

  return (
    <div>
      <StatLine type="good" number={props.good} />
      <StatLine type="bad" number={props.neutral} />
      <StatLine type="neutral" number={props.bad} />
      <StatLine type="all" number={props.calcTotal} />
      <StatLine type="average" number={props.calcAverage} />
      <StatLine type="positive" number={props.calcPositive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (newNumber) => {
    setGood(newNumber)
  }

  const handleNeutral = (newNumber) => {
    setNeutral(newNumber)
  }

  const handleBad = (newNumber) => {
    setBad(newNumber)
  }

  const calcTotal = good + neutral + bad

  const calcAverage = calcTotal === 0 ? 0 : (good - bad) / calcTotal

  const calcPositive = calcTotal === 0 ? '0 %' : `${(good / calcTotal) * 100} %`

  return (
    <div>
      <Heading title="give feedback" />

      <Button handleClick={() => handleGood(good + 1)} feedback="good" />
      <Button handleClick={() => handleNeutral(neutral + 1)} feedback="neutral" />
      <Button handleClick={() => handleBad(bad + 1)} feedback="bad" />

      <Heading title="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        calcTotal={calcTotal}
        calcAverage={calcAverage}
        calcPositive={calcPositive}
      />
    </div>
  )
}

export default App
