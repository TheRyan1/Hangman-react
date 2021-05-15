import { useState } from "react";
import Guess from "../components/Guess";
import Lives from "../components/Lives";
import Letters from "../components/Letters";


const wordList = ["tree", "book", "plane"];

const Main = (props) => {
    //all states and functions
  const [word, setWord] = useState(
    wordList[Math.floor(Math.random() * wordList.length)].split("")
  );
  const [currentLetter, setCurrentLetter] = useState("");
  const [correctLetters, setcorrectLetters] = useState([]);
  const [win, setWin] = useState(null);
  const gameReset = () => {
    setWin(null);
    setWord(wordList[Math.floor(Math.random() * wordList.length)].split(""));
    setCurrentLetter("");
    setcorrectLetters([]);
  };
  if (!correctLetters.includes(currentLetter)) {
    setcorrectLetters([...correctLetters, currentLetter]);
  }

  const handleClick = (e) => {
    setCurrentLetter(e.target.innerHTML);
  };

  // win lose scenario
  switch (win) {
    case false:
      alert("You Lose");
      gameReset();
      break;
    case true:
      alert("You Win");
      gameReset();
      break;
  }
  return (
    <div className="main">
      <Guess word={word} corrLet={correctLetters} setWin={setWin} />
      <Lives word={word} corrLet={correctLetters} setWin={setWin} />
      <Letters word={word} corrLet={correctLetters} clickFunc={handleClick} />
    </div>
  );
};
export default Main;
