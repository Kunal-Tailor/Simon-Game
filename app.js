let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started")
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    } 
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns(randIdx);
    let randbtn=document.querySelector(`.${randColor}`)
    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);
    btnFlash(randbtn);
}

function btnPress(){
    let btn=this;
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",{ btnPress})
}