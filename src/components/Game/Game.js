import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from './Form';
import GuessList from './GuessList';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuessList, setUserGuessList] = React.useState([])

  const addNewGuess = (wordGuess) => { 
    const newGuesses = [...userGuessList, wordGuess];
    setUserGuessList(newGuesses);
  }

  return (<>
    <GuessList userGuessList={userGuessList} />
    <Form addNewGuess={addNewGuess}/>
  </>);
}

export default Game;
