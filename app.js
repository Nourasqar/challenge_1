var number1 = document.getElementById("num1")
var number2 = document.getElementById("num2")
var number3 = document.getElementById("num3")
var number4 = document.getElementById("num4")
var number5 = document.getElementById("num5")
var number6 = document.getElementById("num6")
var number7 = document.getElementById("num7")
var number8 = document.getElementById("num8")
var number9 = document.getElementById("num9")


number1.onclick =asd(number1)
number2.onclick =asd(number2)
number3.onclick =asd(number3)
number4.onclick =asd(number4)
number5.onclick =asd(number5)
number6.onclick =asd(number6)
number7.onclick =asd(number7)
number8.onclick =asd(number8)
number9.onclick =asd(number9)



function asd(idnumber){
    if(player1){
    idnumber.style.color = "blue";
    toggelPlayer(player1)
    }
    else{
    idnumber.style.color = "red";
    toggelPlayer(player1)
    }
    
    if (
       (number1.style.color && number2.style.color && number3.style.color === "red") || (number4.style.color && number5.style.color && number6.style.color === "red") || (number7.style.color && number8.style.color && number9.style.color === "red")
       (number1.style.color && number4.style.color && number7.style.color === "red") || (number2.style.color && number5.style.color && number8.style.color === "red") || (number3.style.color && number6.style.color && number9.style.color === "red")
       (number3.style.color && number5.style.color && number7.style.color === "red") || (number1.style.color && number5.style.color && number9.style.color === "red")
       )
       {
        var btn = document.createElement("P");
        btn.innerHTML = "player 1 won";
        document.body.appendChild(btn);
       }
    else if (
        (number1.style.color && number2.style.color && number3.style.color === "blue") || (number4.style.color && number5.style.color && number6.style.color === "blue") || (number7.style.color && number8.style.color && number9.style.color === "blue")
        (number1.style.color && number4.style.color && number7.style.color === "blue") || (number2.style.color && number5.style.color && number8.style.color === "blue") || (number3.style.color && number6.style.color && number9.style.color === "blue")
        (number3.style.color && number5.style.color && number7.style.color === "blue") || (number1.style.color && number5.style.color && number9.style.color === "blue")
        ) 
        {
         var help = document.createElement("P");
         help.innerHTML = "player 2 won";
         document.body.appendChild(help);
        }
}
var player1 = true;
function toggelPlayer(player){
    if (player){
        player=false
    }
    else{
        player = true
    }
}

