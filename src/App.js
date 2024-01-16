import './App.css';
import React, { useState } from 'react';

const alphabet = [
  "B", "C", "D",
  "F", "G", "H", "J", "K", "L", "M", "N",
  "P", "Q", "R", "S", "T", "V", "W", "X",
  "Z"];

const vowel = ["A", "E", "I", "O", "U", "Y"]

function App() {

  const [counter, setCounter] = useState(0);
  const [letter1, setLetterS] = useState('S');
  const [letter2, setLetterC] = useState('C');
  const [letter3, setLetterR] = useState('R');
  const [letter4, setLetterM] = useState('M');
  const [letter5, setLetterB] = useState('B');
  const [letter6, setLetterL] = useState('L');

  const handleScramble1 = () => {
    const letter1 = alphabet[Math.floor(Math.random() * alphabet.length)]
    setLetterS(letter1);
  }

  const handleScramble2 = () => {
    const letter2 = vowel[Math.floor(Math.random() * vowel.length)]
    setLetterC(letter2);
  }

  const handleScramble3 = () => {
    const letter3 = alphabet[Math.floor(Math.random() * alphabet.length)]
    setLetterR(letter3);
  }

  const handleScramble4 = () => {
    const letter4 = alphabet[Math.floor(Math.random() * alphabet.length)]
    setLetterM(letter4);
  }

  const handleScramble5 = () => {
    const letter5 = vowel[Math.floor(Math.random() * vowel.length)]
    setLetterB(letter5);
  }

  const handleScramble6 = () => {
    const letter6 = alphabet[Math.floor(Math.random() * alphabet.length)]
    setLetterL(letter6);
  }

  const darkmode = () => {
    handleScramble1();
    handleScramble2();
    handleScramble3();
    handleScramble4();
    handleScramble5();
    handleScramble6();
  }


  const increment = () => {
    setCounter(counter + 1);
  };
  if (counter === 2) { setCounter(0) };

  const myBackground = {
    backgroundColor: counter === 0 ? "#1b1b1b" : "white"
  };

  const myText = {
    color: counter === 0 ? "white" : "black"
  };

  const combinedStyles = {
    ...myBackground,
    ...myText,
  };

  return (
    <div style={combinedStyles} className="main">
      <button className="darkmode-btn" onClick={increment}>Dark / Light Mode</button>
      <div className='scramble' onClick={darkmode}>
        <div className='text-1'>{letter1}</div>
        <div className='text-2'>{letter2}</div>
        <div className='text-3'>{letter3}</div>
        <div className='text-4'>{letter4}</div>
        <div className='text-5'>{letter5}</div>
        <div className='text-6'>{letter6}</div>
      </div>
      <div className='word-checker'>
        <input className='word-input'></input>
        <input className='word-submit' type='submit' value="SUBMIT"></input>
        <div className='points'>0 POINTS</div>
      </div>
    </div>
  );
}

export default App;
