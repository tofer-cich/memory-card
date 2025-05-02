import './App.css'
import { useEffect, useState } from 'react'
import Card from './components/Card';

//PokeApi has 1025 pokemon entries to choose from

function App() {  
  const [bestScore, setBestScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);
  const [pokemonData, setPokemonData] = useState(null);

  if (currScore > bestScore) {
    setBestScore(currScore);
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1025");
      const data = await response.json();
      setPokemonData({
        id: Date.now(),
        name: data.name,
        spriteUrl: data.sprites.front_default,
      });
    };

    fetchPokemon();
  }, []);

  if (!pokemonData) {
    return <p>Loading Pokemon...</p>;
  }

  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <div className='header'>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
        <div className='score-board'>
          <p>Current Score: {currScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>

      </div>
      <div id='game-board'>
        <Card name={pokemonData.name} imgUrl={pokemonData.spriteUrl}/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
