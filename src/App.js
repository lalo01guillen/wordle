import './styles/App.css';  
import styled from "styled-components";
import { GameSection, Tile, TileContainer, TileRow } from './components/TileContiner';

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
  return (
    <Main>
      <Header>WORDLE</Header>
      <GameSection>
        <TileContainer>
          {[0,1,2,3,4,5].map((item) => (
            <TileRow key={item}>
              {[0,1,2,3,4].map((item)=>(
                <Tile key={item}></Tile>
              ))}
            </TileRow>
          ))}
        </TileContainer>
      </GameSection>
    </Main>
  );
}

export default App;
