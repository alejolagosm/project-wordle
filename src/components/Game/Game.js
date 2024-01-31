import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "./Form";
import GuessList from "./GuessList";
import Banner from "./Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const resultArray = Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => []);

function Game() {
  const [userGuessList, setUserGuessList] = React.useState(resultArray);
  const [guessNumber, setGuessNumber] = React.useState(0);
  const [isWinner, setIsWinner] = React.useState(false);

  const addNewGuess = (wordGuess) => {
    const numOfGuess = userGuessList.filter((word) => word.length === 5).length;
    setGuessNumber(numOfGuess + 1);
    const newGuesses = [...userGuessList];
    const guess_object = checkGuess(wordGuess, answer);
    if (wordGuess === answer) {
      setIsWinner(true);
    }
    newGuesses[numOfGuess] = guess_object;
    setUserGuessList(newGuesses);
  };

  return (
    <>
      <GuessList userGuessList={userGuessList} />
      <Form addNewGuess={addNewGuess} />
      {guessNumber === NUM_OF_GUESSES_ALLOWED || isWinner ? (
        <Banner winner={isWinner} guess_number={guessNumber} answer={answer} />
      ) : null}
    </>
  );
}

export default Game;
