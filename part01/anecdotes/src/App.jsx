import { useState } from "react"

const Title = ({ text }) => <h1>{text}</h1>

const Anecdote = ({ text, votesCount }) => {
  return (
    <>
      <p>{text}</p>
      <p>has {votesCount} votes</p>
    </>
  )
}

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
)

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]

  const getrandomIndex = () => Math.floor(Math.random() * anecdotes.length)

  const [selected, setSelected] = useState(getrandomIndex)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleAnecdoteClick = () => {
    const newRandomIndex = getrandomIndex()
    setSelected(newRandomIndex)
  }

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  return (
    <>
      <Title text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votesCount={votes[selected]} />
      <Button handleClick={handleVoteClick} label="vote" />
      <Button handleClick={handleAnecdoteClick} label="next anecdote" />
      <Title text="Anecdote with most votes" />
    </>
  )
}

export default App
