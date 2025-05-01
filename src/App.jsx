import './App.css'
import { useState } from 'react'
import Card from './components/Card';

function App() {  
  const [bestScore, setBestScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);

  if (currScore > bestScore) {
    setBestScore(currScore);
  }

  return (
    <>
      <h1>Placeholder</h1>
      <button name='increase' onClick={() => setCurrScore(currScore + 1)}>Increase</button>
      <button name='reset' onClick={() => setCurrScore(0)}>Reset</button>
      <p>Score: {currScore}</p>
      <p>Best Score: {bestScore}</p>
      <Card />
    </>
  )
}

export default App
