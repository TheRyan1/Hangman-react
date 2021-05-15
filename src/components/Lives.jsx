import React from "react";
import Heart from "../images/heart.JPG";
export default function Lives(props) {
  let correctLetters = props.corrLet;

  // lives logic (probably should have used state)
  let livesLeft = 6;
  let dispLives = [];
  correctLetters.map((e) => {
    if (!props.word.includes(e)) {
      livesLeft -= 1;
    }
  });
  for (let i = 0; i <= livesLeft; i++) {
    dispLives.push(<img key={i} className="heart" src={Heart} alt="Logo" />);
  }
  // update state of win lose
  if (livesLeft === -1) {
    props.setWin(false);
  }
  console.log(livesLeft);
  return <div className="lives">{dispLives}</div>;
}
