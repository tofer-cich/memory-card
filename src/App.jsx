import './App.css'
import { useEffect, useState } from 'react'
import Card from './components/Card';

//PokeApi has 1025 pokemon entries to choose from

function App() {  
  const [bestScore, setBestScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [guesses, setGuesses] = useState([]);

  let randomInts = []

  if (currScore > bestScore) {
    setBestScore(currScore);
  }

  if (selectedId > 0 && guesses.length > 0) {
    if (guesses.includes(selectedId) === true) {
      setCurrScore(0);
    } else {
      setCurrScore(prev => prev + 1);
      setGuesses(prev => [...prev, selectedId]);
    }
  }

  function getRandomInt(max) {
    let num = Math.floor(Math.random() * (max - 1)) + 1;
    while (randomInts.includes(num) === true) {
      num = Math.floor(Math.random() * (max - 1)) + 1;
    }
    randomInts.push(num);
    return num;
  }

  console.log(selectedId);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const promises = [];
      for (let i = 1; i <= 12; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1025)}`));
      }
      
      const responses = await Promise.all(promises);
      const pokemonArray = await Promise.all(
        responses.map(res => res.json())
      );
      
      setPokemonData(pokemonArray.map(data => ({
        id: data.id,
        name: data.name,
        spriteUrl: data.sprites.front_default,
      })));

    };
  
    fetchAllPokemon();
  }, []);

  if (pokemonData.length < 12) {
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
        {pokemonData.map(pokemon => {
          return <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} imgUrl={pokemon.spriteUrl} setSelectedId={setSelectedId} />
        })}
      </div>
    </>
  )
}

export default App
