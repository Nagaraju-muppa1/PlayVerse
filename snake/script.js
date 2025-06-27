const playboard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highElement = document.querySelector(".high-score")
const controls =document.querySelectorAll(".controls i")
let foodX ;
let foodY;
let snakeX=11;
let snakeY=7;
let snakeBody =[];
let velocityX = 0, velocityY = 0;
let setIntervalid;
let gameOver = false;
let score=0;
let highscore = localStorage.getItem("high-score") || 0;
highElement.innerText=`High Score:${highscore}`
const changeFoodPosition = ()=>{
     foodX = Math.floor(Math.random()*30)+1
     foodY= Math.floor(Math.random()*30)+1
}
const changeDirection=(e)=>{
    // console.log(e);
    if(e.key === "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;

    }else if(e.key === "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;

    }else if(e.key === "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;

    }else if(e.key === "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;

    }
    initGame();
}
controls.forEach(key =>{
    key.addEventListener("click",()=>changeDirection({key:key.dataset.key}))
})
const handleGameOver=()=>{
    clearInterval(setIntervalid);
    alert("Game Over");
    location.reload();
}
const initGame =()=>{
   if(gameOver){
     handleGameOver();
   }
   let insertfood =`<div class="food" style="grid-area:${foodY}/${foodX}"></div>`;
   snakeX+=velocityX;
   snakeY+=velocityY;
   if(snakeX == foodX && snakeY == foodY){
       changeFoodPosition();
       snakeBody.push([foodX,foodY]);
       score++;
       highscore = score >= highscore ? score: highscore;
       localStorage.setItem("high-score",highscore);
       scoreElement.innerText=`Score:${score}`;
       highElement.innerText=`High Score:${highscore}`

   }
   for(let i=snakeBody.length-1;i>0;i--){
    snakeBody[i]=snakeBody[i-1];
   }
   snakeBody[0]=[snakeX,snakeY];
   if(snakeX <=0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
      gameOver = true;
   }
   for(let i=0;i<snakeBody.length;i++){
    insertfood+=`<div class="snake" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;
    if(i !==0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
        gameOver= true;
    }
   }
  
   playboard.innerHTML = insertfood;
}
changeFoodPosition();
initGame();
setIntervalid=setInterval(initGame,125)
document.addEventListener("keydown",changeDirection); 
