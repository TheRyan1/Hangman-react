import { useState } from "react";

const Letters = (props) => {
  const word = props.word;
  var correctLetters = props.corrLet;
  
  //list of letters for the game
  var letters = "abcdefghijklmnopqrstuvwxyz".split("");

  //make the letters clickable and set their css
  var dispLet = letters.map((e, i) => {
    if (word.includes(e) && correctLetters.includes(e)) {
      return (
        <div className="letter Correct" onClick={props.clickFunc} key={i}>
          {e}
        </div>
      );
    } else if (!word.includes(e) && correctLetters.includes(e)) {
      return (
        <div className="letter wrong" onClick={props.clickFunc} key={i}>
          {e}
        </div>
      );
    } else {
      return (
        <div className="letter" onClick={props.clickFunc} key={i}>
          {e}
        </div>
      );
    }
  });
  console.log(props);

  return <div className="alpha">{dispLet}</div>;
};
export default Letters;
