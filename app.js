var table = document.getElementsByClassName("table1");
table.onclick = function(){
    if(player1){
    table.style.color = "blue";
    toggelPlayer(player1)
    }
    else{
    table.style.color = "red";
    toggelPlayer(player1)
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

