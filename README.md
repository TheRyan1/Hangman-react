# ReactJS HangMan

## Overview
This was my first ReactJS project when I decided to take the React plunge. Simple passing of props to child components and changing state of parent components. No APIs were used. Plan to update it in the future to make it more dynamic as the words are hardcoded. 

## Technologies used
ReactJS. 

## Featured Code
```Javascript
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
  ```
  My first real use of map(). I was amazed
  
