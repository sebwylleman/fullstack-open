import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomInt = () => Math.floor(Math.random() * anecdotes.length)

  const addVote = (index) => {
    // REWRITE THIS BIT AS IT IS SO THAT YOU MANAGED ON YOUR OWN TO TRULY UNDERSTAND WHY A COPY IS NECESSARY!
    const copy = [...votes]
    copy[index]++
    setVotes(copy)
  }

  const getMostVoted = () => {
    const maxIndex = votes.indexOf(Math.max(...votes))
    return maxIndex
  }
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => setSelected(randomInt)}>next anecdote</button>
      <button onClick={() => addVote(selected)}>vote</button>
      <h1>Anecdote with most Votes</h1>
      <p>{anecdotes[getMostVoted()]}</p>
    </div>
  )
}

export default App
