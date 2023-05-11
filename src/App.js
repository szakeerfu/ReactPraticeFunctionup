
import './App.css';

import { useEffect, useState } from 'react';
import Cell from './components/atom/game/Cell';

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMaessage] = useState(null);


  const message = "it is now" + go + " 's go."
  console.log(cells)

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], /* Hor WINW*/
      [0, 3, 6], [1, 4, 7], [2, 5, 8], /* VERTICAL WIN*/
      [0, 4, 8,], [2, 4, 6] /* cros Win*/

    ]
    winningCombos.forEach(array => {
      let winningCricle = array.every(cell => cells[cell] === "cricle")

      if (winningCricle) {
        setWinningMaessage("Cricle wins")
        return

      }

    })

    winningCombos.forEach(array => {
      let winningCross = array.every(cell => cells[cell] === "cross")

      if (winningCross) {
        setWinningMaessage("cross wins")
        return

      }

    })

  }


  useEffect(() => {
    checkScore();
  }, [cells])



  return (
    <div className="app">
      <div className='gameboard'>
        {
          cells.map((cell, index) =>
            <Cell key={index} id={index}
              cell={cell}
              setCells={setCells}
              go={go}
              setGo={setGo}
              cells={cells}
              winningMessage={winningMessage}
            />)
        }


      </div>
      <p>{winningMessage || message}</p>




    </div>
  );
}

export default App;
