import './App.css';
import {useState} from 'react';


function App() {
  const [count, setCount] = useState(1)
  const [winner, setWinner] = useState('')
  const [char, setChar] = useState('X')
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])

  const getCellBgColor = (value) => {
    if(value ==='X') 
      return 'greenyellow';
    if(value ==='O')
     return 'royalblue';

    return '';
  }

  const checkWinner = () => {
    if(matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1]=== matrix[0][2]){
      setWinner(matrix[0][0] + ' is the winner');
    }
    if(matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1]=== matrix[1][2]){
      setWinner(matrix[1][0] + ' is the winner');
    }
    if(matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1]=== matrix[2][2]){
      setWinner(matrix[2][0] + ' is the winner');
    }
    if(matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0]=== matrix[2][0]){
      setWinner(matrix[0][0] + ' is the winner');
    }
    if(matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1]=== matrix[2][1]){
      setWinner(matrix[0][1] + ' is the winner');
    }
    if(matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2]=== matrix[2][2]){
      setWinner(matrix[0][2] + ' is the winner');
    }
    if(matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1]=== matrix[2][2]){
      setWinner(matrix[0][0] + ' is the winner');
    }
    if(matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1]=== matrix[2][0]){
        setWinner(matrix[0][2] + ' is the winner');
    }

      if(count === 9)
      setWinner('The match has been drawn');
    }
  

  const handleClick = (r,c) => {
    if(matrix[r][c])
     return;
    const tempMatrix = [...matrix];
    tempMatrix[r][c] = char;
    setMatrix(tempMatrix);
    setChar(char === 'X'? 'O' : 'X');
    setCount(count + 1);
    checkWinner();
  }

  return (
    <div className="App">
      <div className="header alignCentre">XO Game</div>
        <div className="board alignCentre">
          {!winner && <p>{char} turn now</p> }
          <div className="gameBoard">
            {
             winner ||
              matrix.map((row,rIndex) => (
              <div className="row">
                {
                  row.map((cell,cIndex) => (
                  <div 
                    onClick={() => handleClick(rIndex,cIndex)}  
                    className = {`cell alignCentre ${getCellBgColor(matrix[rIndex][cIndex])}`}
                  >
                    {matrix[rIndex][cIndex]}
                  </div>
                ))
                }
              </div>
              ))
            }
          </div>
          <button className="restart" onClick={() => {
            setWinner('');
            setMatrix([
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
              ]);
            }}>Restart
          </button>
        </div>
    
    </div>
  );
}

export default App;
