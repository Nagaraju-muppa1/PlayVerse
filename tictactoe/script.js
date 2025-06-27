let currentPlayer = 'X';
let count =0;
const handle =(element) => {
     if(element.innerText !="") return;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
   
    element.innerText = `${currentPlayer}`;
    
    checking();
    count++;
    if(count==9){
       alert(`Match Drawn`);
       resetBoard();
    }
};

const winningCombos = [
  ['c1', 'c2', 'c3'],
  ['c4', 'c5', 'c6'],
  ['c7', 'c8', 'c9'],
  ['c1', 'c4', 'c7'],
  ['c2', 'c5', 'c8'],
  ['c3', 'c6', 'c9'],
  ['c1', 'c5', 'c9'],
  ['c3', 'c5', 'c7']
];

const checking = () => {
  for (const combo of winningCombos) {
    const [a, b, c] = combo.map(id => document.querySelector(`#${id}`).innerText);
    if (a && a === b && b === c) {
      alert(`Player ${a} wins!`);
      console.log(`Player ${a} wins`);
      resetBoard();
      return;
    }
  }
};

function resetBoard() {
  for (let i = 1; i <= 9; i++) {
    document.querySelector(`#c${i}`).innerText = "";
  }
  currentPlayer = 'X';
  count = 0;
}

setTimeout(resetBoard, 2000); // Call this after win/draw
