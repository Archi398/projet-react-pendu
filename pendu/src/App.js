import './App.css';
import React, { useContext } from 'react';
import { map } from "lodash";
import { GetData } from './api/getData';
import { ThemeContext } from "./darkMode/ThemeContext";
import Word from './components/word.js';
import SwitchButton from "./darkMode/Button";


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const word = GetData('word');
  const score = GetData('score');

  console.log(word.data);
  console.log(score.data);
  

  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>Jeux du Pendu</h1>
      <div id="div-btn">
        <SwitchButton />
      </div>

      {/* <Word
        word={word.word}
        theme={darkMode}
      /> */}

      <p>{word.word}</p>


      <table className="TableScore">
        <thead>
          <tr>
            <th className={`para ${darkMode ? "para-dark" : "para-light"}`}>Ranking</th>
            <th className={`para ${darkMode ? "para-dark" : "para-light"}`}>Avatar</th>
            <th className={`para ${darkMode ? "para-dark" : "para-light"}`}>Username</th>
            <th className={`para ${darkMode ? "para-dark" : "para-light"}`}>Score</th>
          </tr>
        </thead>
        <tbody>
          {map(score.data, user => (
            <React.Fragment key={user.username}>
              <tr>
                <td className={`para ${darkMode ? "para-dark" : "para-light"}`}>{user.position}</td>
                <td><img src={user.avatar} alt={user.username} /></td>
                <td className={`para ${darkMode ? "para-dark" : "para-light"}`}>{user.username}</td>
                <td className={`para ${darkMode ? "para-dark" : "para-light"}`}>{user.score}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;