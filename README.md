<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tic Tac Toe</title>

<style>

body{
margin:0;
font-family:Arial;
background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);
color:white;
display:flex;
flex-direction:column;
height:100vh;
}

/* GAME AREA */

.game-area{
flex:1;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
}

.container{
width:100%;
max-width:420px;
padding:20px;
}

h1{margin-bottom:20px}

button{
width:100%;
padding:14px;
margin:8px 0;
font-size:18px;
border:none;
border-radius:10px;
cursor:pointer;
}

.start{background:#00c8ff}
.mode{background:#7c4dff}
.restart{background:#ff5252}

.hidden{display:none}

/* BOARD */

.board{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:10px;
margin-top:20px;
}

.cell{
height:90px;
font-size:40px;
display:flex;
justify-content:center;
align-items:center;
background:rgba(255,255,255,0.1);
border-radius:10px;
cursor:pointer;
}

.cell:hover{
background:rgba(255,255,255,0.25)
}

.win{
background:#00ff9c;
color:black;
}

.score{
display:flex;
justify-content:space-between;
margin-top:10px;
font-size:18px;
}

.status{
margin-top:15px;
font-size:20px;
}

/* AD BANNER */

.ad-banner{
width:100%;
height:50px;
display:flex;
justify-content:center;
align-items:center;
background:#111;
position:fixed;
bottom:0;
left:0;
z-index:999;
}

</style>
</head>

<body>

<div class="game-area">

<div class="container">

<div id="home">
<h1>Tic Tac Toe</h1>
<button class="start" id="startBtn">Start Game</button>
</div>

<div id="mode" class="hidden">
<h2>Select Mode</h2>
<button class="mode" id="pvpBtn">Player vs Player</button>
<button class="mode" id="aiBtn">Player vs Computer</button>
</div>

<div id="game" class="hidden">

<div class="score">
<div>O : <span id="scoreO">0</span></div>
<div>X : <span id="scoreX">0</span></div>
</div>

<div id="board" class="board"></div>

<div id="status" class="status"></div>

<button class="restart" id="restartBtn">Restart</button>

</div>

</div>

</div>

<!-- AD AREA BOTTOM -->

<div class="ad-banner">

<script>
atOptions = {
'key' : 'f4fb58d3a8d3531cbccd06c5e08464b2',
'format' : 'iframe',
'height' : 50,
'width' : 320,
'params' : {}
};
</script>

<script src="https://www.highperformanceformat.com/f4fb58d3a8d3531cbccd06c5e08464b2/invoke.js"></script>

</div>

<script>

/* DOM */

const home=document.getElementById("home")
const mode=document.getElementById("mode")
const game=document.getElementById("game")

const startBtn=document.getElementById("startBtn")
const pvpBtn=document.getElementById("pvpBtn")
const aiBtn=document.getElementById("aiBtn")
const restartBtn=document.getElementById("restartBtn")

const boardDiv=document.getElementById("board")
const status=document.getElementById("status")

const scoreOspan=document.getElementById("scoreO")
const scoreXspan=document.getElementById("scoreX")

/* GAME */

let board=["","","","","","","","",""]
let current="O"
let modeType=""
let active=true

let scoreO=0
let scoreX=0

const win=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
]

startBtn.onclick=()=>{
home.classList.add("hidden")
mode.classList.remove("hidden")
}

pvpBtn.onclick=()=>{
modeType="pvp"
startGame()
}

aiBtn.onclick=()=>{
modeType="ai"
startGame()
}

function startGame(){

mode.classList.add("hidden")
game.classList.remove("hidden")

createBoard()
updateStatus()

}

function createBoard(){

boardDiv.innerHTML=""

board.forEach((v,i)=>{

let cell=document.createElement("div")

cell.className="cell"

cell.onclick=()=>clickCell(i)

boardDiv.appendChild(cell)

})

}

function clickCell(i){

if(board[i]!=="" || !active) return

move(i,current)

if(checkWin()){
finish(current+" Wins")
updateScore(current)
return
}

if(board.every(c=>c!="")){
finish("Draw")
return
}

current=current=="O"?"X":"O"

updateStatus()

if(modeType=="ai" && current=="X"){
setTimeout(aiMove,400)
}

}

function move(i,p){

board[i]=p
document.querySelectorAll(".cell")[i].innerText=p

}

function aiMove(){

let empty=board.map((v,i)=>v==""?i:null).filter(v=>v!=null)

let moveIndex=empty[Math.floor(Math.random()*empty.length)]

move(moveIndex,"X")

if(checkWin()){
finish("Computer Wins")
updateScore("X")
return
}

if(board.every(c=>c!="")){
finish("Draw")
return
}

current="O"
updateStatus()

}

function checkWin(){

for(let p of win){

let[a,b,c]=p

if(board[a] && board[a]==board[b] && board[a]==board[c]){

let cells=document.querySelectorAll(".cell")

cells[a].classList.add("win")
cells[b].classList.add("win")
cells[c].classList.add("win")

return true
}

}

return false

}

function finish(text){

status.innerText=text
active=false

}

function updateStatus(){

status.innerText="Turn : "+current

}

function updateScore(p){

if(p=="O"){
scoreO++
scoreOspan.innerText=scoreO
}else{
scoreX++
scoreXspan.innerText=scoreX
}

}

restartBtn.onclick=()=>{

board=["","","","","","","","",""]
current="O"
active=true

createBoard()
updateStatus()

}

</script>

</body>
</html>
