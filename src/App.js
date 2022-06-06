import './styles/App.css';  
import {useEffect, useState} from 'react';
import styled from "styled-components";
import { GameSection, Tile, TileContainer, TileRow } from './components/TileContainer';
import { KeyboardButton, KeyboardRow, KeyboardSection, Flex, BackspaceIcon} from './components/KeyBoardUI';

const Main = styled.main`
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #3a3a3c;
  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin: 20px;
  padding: 5px;
`;

function App() {

  const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
  ];
  const allKeys = keyboardRows.flat();
  const handleClick = (key) =>{};

  const wordLength = 5;

  const [guesses, setGuesses] = useState({
    0: Array.from({length: wordLength}).fill(""),
    1: Array.from({length: wordLength}).fill(""),
    2: Array.from({length: wordLength}).fill(""),
    3: Array.from({length: wordLength}).fill(""),
    4: Array.from({length: wordLength}).fill(""),
    5: Array.from({length: wordLength}).fill(""),
  });

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if(allKeys.includes(evt.key)){
        console.log(evt.key);
        console.log(Object.values(guesses));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  
  }, []);

  
  
  return (
    <Main>
      <Header>WORDLE</Header>
      <GameSection>
        <TileContainer>
         {Object.values(guesses).map((word, index) => (
           <TileRow key={index}>
             {word.map((letter, index) => (
               <Tile key={index}>
                 {letter}
               </Tile>
             ))}
           </TileRow>
         ))}
        </TileContainer>
      </GameSection>
      <KeyboardSection>
        <KeyboardRow>
          {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => (
            <KeyboardButton onClick={() => handleClick(key)}>{key}</KeyboardButton>
          ))}
        </KeyboardRow>
        <KeyboardRow>
        <Flex item={0.5} />
          {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => (
            <KeyboardButton onClick={() => handleClick(key)}>{key}</KeyboardButton>
          ))}
          <Flex item={0.5} />
        </KeyboardRow>
        <KeyboardRow>
          {["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"].map(
            (key) => (
              <KeyboardButton
              onClick={() => handleClick(key)}
              flex={["enter", "backspace"].includes(key) ? 1.5 : 1}
              >{key === "backspace" ? <BackspaceIcon /> : key}
              
              </KeyboardButton>
            )
          )}
        </KeyboardRow>
      </KeyboardSection>
    </Main>
  );
}

export default App;
