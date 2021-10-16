console.log('Hello');
let ting = new Audio("ting.mpeg");

let turn = "X";
let gameOver = false;

const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 1, 4],
    ]
    win.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "" )){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameOver = true;
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "500px"
        }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

btn.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px"
})