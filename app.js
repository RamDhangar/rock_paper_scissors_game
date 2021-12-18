var inputValue=0;
var computerPoint=0;
var userPoint=0;
var round=0;
var fix=0;

document.getElementById("play").addEventListener('click',()=>{
            document.getElementById("winner").innerHTML="";
            computerPoint=0;
            userPoint=0;
            round=0;
            inputValue=document.getElementById("input").value;
            fix=inputValue;
    if(inputValue>0){
        
    document.getElementsByClassName("showResult")[0].innerHTML="";
    document.getElementById('btnshow').style="display:block";
    document.getElementById("round").innerHTML=`Round is ${round}/${fix}`;
    }
    else {
        document.getElementsByClassName("showResult")[0].innerHTML="Please enter teruns";
        document.getElementById("input").focus();
    }
});

        document.getElementById("rock"). addEventListener('click', rockFun);
        document.getElementById("scissors").addEventListener('click', scissorsFun);
        document.getElementById("paper").addEventListener('click', paperFun);
        

let showResult=document.getElementsByClassName("showResult");

function generateRandom(){
    let rd= Math.floor(Math.random()*3);
    if(rd===0)return "rock";
    else if(rd===1) return "paper";
    else return "scissors";
}

function clear(){
    setTimeout(()=>{
        showResult[0].innerHTML=""
        showResult[1].innerHTML=""
        showResult[2].innerHTML=""
        document.getElementById("round").innerHTML=""
        document.getElementById("input").value="";
        document.getElementById("input").focus();
    },3000)
}

function winnerResult(){
    round++;
    inputValue--;
    document.getElementById("round").innerHTML=`Round is ${round}/${fix}`;
    if(inputValue<=0){
        document.getElementById("btnshow").style="display:none"
        if(computerPoint>userPoint){
            document.getElementById("winner").innerHTML="Computer win the game"
            clear();
        }
        else if(computerPoint<userPoint){
            
            document.getElementById("winner").innerHTML="User win the game"
            clear();
        }
        else if(computerPoint===userPoint) {
            document.getElementById("winner").innerHTML="No one win the game (Game is drow)"
            clear();
        }
    }
}

function rockFun(){
    let computerchoice=generateRandom();
    if(computerchoice==="scissors"){
        userPoint++;
        showResult[0].innerHTML="Computer choice is Scissors"
        showResult[1].innerHTML="User choice is Rock";
        showResult[2].innerHTML="User win";
        document.getElementById("user-point").innerHTML=userPoint;
        document.getElementById("computer-point").innerHTML=computerPoint;
    }
    else {
        showResult[0].innerHTML=`Computer choice is ${computerchoice}`
        showResult[1].innerHTML="User choice is Rock";
        showResult[2].innerHTML="game drow";
        
        document.getElementById("user-point").innerHTML=userPoint;
        document.getElementById("computer-point").innerHTML=computerPoint;
    }
    winnerResult();
}

function scissorsFun(){
    let computerchoice=generateRandom();
    if(computerchoice==="rock"){
        computerPoint++;
        showResult[0].innerHTML="Computer choice is Rock"
        showResult[1].innerHTML="User choice is Scissors";
        showResult[2].innerHTML="Computer win";
        document.getElementById("user-point").innerHTML=userPoint;
        document.getElementById("computer-point").innerHTML=computerPoint;
    }
    else if(computerchoice==="paper"){
        userPoint++;
        showResult[0].innerHTML="Computer choice is Paper"
        showResult[1].innerHTML="User choice is Scissors";
        showResult[2].innerHTML="User win";
        document.getElementById("user-point").innerHTML=userPoint;
        document.getElementById("computer-point").innerHTML=computerPoint;
    }
    else {
        showResult[0].innerHTML="Computer choice is Scissors"
        showResult[1].innerHTML="User choice is Scissors";
        showResult[2].innerHTML="game drow";
        document.getElementById("user-point").innerHTML=userPoint;
        document.getElementById("computer-point").innerHTML=computerPoint;
    }
    winnerResult();
}

function paperFun(){
    let computerchoice=generateRandom();
    if(computerchoice==="scissors"){
        computerPoint++;
        showResult[0].innerHTML="Computer choice is Scissors"
        showResult[1].innerHTML="User choice is Paper";
        showResult[2].innerHTML="Computer win";
        document.getElementById("user-point").innerHTML=userPoint;
        document.getElementById("computer-point").innerHTML=computerPoint;
    }
    else {
        
        showResult[0].innerHTML=`Computer choice is ${computerchoice}`
        showResult[1].innerHTML="User choice is Paper";
        showResult[2].innerHTML="game drow";
        document.getElementById("user-point").innerHTML=userPoint;
        document.getElementById("computer-point").innerHTML=computerPoint;
    }
    winnerResult();
}