import { useState, useEffect } from "react";

const Guess = (props) => {
  const word = props.word;
 //make the word show like I want it to 
  var mainword = word.map((e, i) => {
    return props.corrLet.includes(e) ? (
      <span key={i}>{e}</span>
    ) : (
      <span key={i}>_</span>
    );
  });

// check if we won
  if (
    word.join("") ===
    mainword
      .map((e, i) => {
        return e.props.children;
      })
      .join("")
  ) {
    props.setWin(true)
  }

  return <div>{mainword}</div>;
};
export default Guess;
