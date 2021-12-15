import './App.css';
import React, { useContext, useEffect } from 'react';
import { GetData } from './api/getData';
import { ThemeContext } from "./darkMode/ThemeContext";
import Word from './components/word.js';
import Ranking from './components/ranking';
import Input from './components/inputLetter';
import SwitchButton from "./darkMode/Button";


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const word = GetData('word');
  const score = GetData('score');

  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <div id="div-header">
        <p className={`para ${theme ? "para-dark" : "para-light"} size3`}>Made by Archi with ❤️</p>
        <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"} size3`}>Hangman games</h1>
        <SwitchButton />
      </div>

      <div id="word-input">
        <div>
          {word !== undefined ? <Word
            word={word.data.word}
            theme={darkMode}
          /> : null}

          <div id="life">
            <p className={`para ${theme ? "para-dark" : "para-light"}`}>Your life : <span id="currentScore">10</span>/10</p>
          </div>
        </div>

        <Input
          theme={darkMode}
        />
      </div>

      {score !== undefined ? <Ranking
        score={score.data}
        theme={darkMode}
      /> : null}

    </div>
  );
}

export default App;