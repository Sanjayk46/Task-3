// let score1 = document.getElementById("currentscore1");;
// let score2 = document.getElementById("currentscore2");
// function Rolldice(){
//     const randomNumber = Math.floor(Math.random()* 6) + 1;
//     //  randomNumber = document.getElementsByTagName("h2");
//     let randomImg = "dice"+ randomNumber +".png";
//     let randomImgsrc = "img/"+randomImg;
//     let image1 = document.querySelectorAll("img")[0];
//     image1.setAttribute("src",randomImgsrc);
//     document.querySelectorAll("h2").innerText = randomNumber;
//     let currentscore = 0;
//     if (randomNumber !==6){
       
//       currentscore += randomNumber;
//     //   score1.textContent = currentscore;
//       console.log(currentscore);
//     }
    
// }
let currentPlayer = Math.floor(Math.random() * 2) + 1; // Randomly select starting player (1 or 2)
    let player1Score = 0;
    let player2Score = 0;
    let gameOver = false;

    const player1Element = document.getElementById("player1");
    const player2Element = document.getElementById("player2");
    const rollButton1 = document.getElementById("rollButton1");
    // const rollButton2 = document.getElementById("rollButton2");
    const resetButton = document.getElementById("resetButton");
    const resultElement = document.getElementById("result");

    rollButton1.addEventListener("click", () => {
      if (!gameOver) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        let randomImg = "dice"+diceRoll+".png";
    let randomImgsrc = "./"+randomImg;
     let image1 = document.querySelectorAll("img")[0];
     image1.setAttribute("src",randomImgsrc);

        if (currentPlayer === 1) {
          player1Score += diceRoll;
          player1Element.textContent = `${player1Score}`;
          currentPlayer = 2;
        } else {
          player2Score += diceRoll;
          player2Element.textContent = `${player2Score}`;
          currentPlayer = 1;
        }

        if (player1Score >= 30) {
          resultElement.textContent = "Player 1 Wins!";
          gameOver = true;
          rollButton1.disabled = true;
          resetButton.disabled = false;
        } else if (player2Score >= 30) {
          resultElement.textContent = "Player 2 Wins!";
          gameOver = true;
          rollButton1.disabled = true;
          resetButton.disabled = false;
        }
      }
    });

    resetButton.addEventListener("click",() => {
      player1Score = 0;
      player2Score = 0;
      currentPlayer = Math.floor(Math.random() * 2) + 1;
      player1Element.textContent = `${player1Score}`;
      player2Element.textContent = `${player2Score}`;
      resultElement.textContent = "";
      rollButton1.disabled = false;
      resetButton.disabled = true;
      gameOver = false;
    });


// var button = document.createElement("button");
// button.innerHTML = "Click Me";
// button.addEventListener("click",foo);

// document.body.append(button)
// function foo(){
//     ans = prompt("enter your input!!")
    
// }
 
// var pardiv = document.createElement("div");
// pardiv.style.textAlign = "center"
// pardiv.style.paddingTop = "30px"

// //this is the input for the date
// var inputdate = document.createElement("input");
// inputdate.setAttribute("type","date");
// inputdate.setAttribute("id","dob");
// inputdate.style.width = "30%";
// inputdate.style.margin = "10px";
// //this is for the button
// var button = document.createElement("button");
// button.innerHTML = "Display date"
// button.className = "btn btn-primary"
// button.addEventListener("click",displaydata);
// //Append it to parent div
// pardiv.append(inputdate,button)
// var displaydiv = document.createElement("div");
// displaydiv.id = "displaydata"
// document.body.append(pardiv)

// function displaydata(){

//     var input= document.getElementById("dob").value;
//     var inpdate = new Date(input); 
//     console.log(inpdate);
    
//     var currdate =new Date()
    
//     console.log(currdate)
    
//     var millisecdiff = currdate.getTime() - inpdate.getTime() 
//     console.log(millisecdiff)
//     var seconddiff= Mathfloor(millisecdiff, 1000)
//      console.log(seconddiff)
//     var minutesdiff= Mathfloor(seconddiff,60);
//     console.log(minutesdiff);
//     var hourdiff = Mathfloor(minutesdiff,60);
//     console.log(hourdiff);
//     var daydiff = Mathfloor(hourdiff, 24); 
//     console.log(daydiff);   
//     var monthdiff = getmonthdiff(inpdate,currdate)
//      console.log(monthdiff);
    
//     var yeardiff = getYear(inpdate, currdate) 
//     console.log(yeardiff);
//     }
    
//  function Mathfloor(value1, value2){
//      return Math.floor(value1/value2);
//  }
    
// function getYear(value1, value2){
//          var d1 = new Date(value1);
//          var d2 = new Date(value2);
    
//     return d2.getFullYear()-d1.getFullYear();
// }
    
// function getmonthdiff(valuel, value2)
// {    
//     var year = getYear(valuel, value2)
    
//     var month = (year*12)+(value2.getMonth()-valuel.getMonth())
    
//     return month
// }
// var pardiv1 = document.createElement("div");
// pardiv1.style.textAlign = "center";
// pardiv1.style.paddingTop = "30px";

// var p = document.createElement(p);
// p.innerHTML =  `${millisecdiff}`;
// document.append(p)
