import Player from "./components/Player"
import GameBoard from "./components/GamBoard"
import Log from "./components/Log";
import { useState } from "react"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [turns, setGameTurns] = useState([]);
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns();
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initName="Player1" symbol="X" isActive={activePlayer === 'X' ? true : false} />
          <Player initName="Player2" symbol="O" isActive={activePlayer === 'O' ? true : false} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
