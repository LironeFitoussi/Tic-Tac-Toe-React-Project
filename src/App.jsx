import Player from "./components/Player"
function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initName="Player1" symbol="X" />
          <Player initName="Player2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  )
}

export default App
