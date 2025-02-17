function start(){
    alert("Welcome summoner ! wanna play a game ? :)");
}
function unlock(){
    document.getElementById("button1").disabled = true;
    difficulty = document.getElementById("difficulty").value;
    nbre=document.getElementById("nbre");
    choix = document.getElementById("choix");
    if(difficulty == "easy"){
        choix.disabled = false;
        choix.min=1;
        choix.max=10;
        alert("You chose easy difficulty 'You have 5 tries' ! Enter a number between 1 and 10 (To rechoose difficulty reload the page !)");
        nbre.innerHTML = 5;
    }
    else if(difficulty == "medium"){
        alert("You chose medium difficulty 'You have 10 tries' ! Enter a number between 1 and 50 (To rechoose difficulty reload the page !)");
        choix.disabled = false;
        choix.min=1;
        choix.max=50;
        nbre.innerHTML = 10;
    }
    else {
        alert("You chose hard difficulty  'You have 10 tries' ! Enter a number between 1 and 100 (To rechoose difficulty reload the page !)");
        choix.disabled = false;
        choix.min=1;
        choix.max=100;
        nbre.innerHTML = 10;
    }
    goal=Math.floor(Math.random() * (Number(choix.max) - Number(choix.min) + 1)) + Number(choix.min);

}
function check(){
    choix = document.getElementById("choix");
    guess =parseInt(choix.value);
    if(guess > parseInt(choix.max) || guess < parseInt(choix.min)){
        alert("You entered a number outside the range ! Try again !");
    }
    else{
        nbre.innerHTML = nbre.innerHTML - 1;
        message=document.getElementById("message");
        
        tries=parseInt(nbre.innerHTML);
        if(guess == goal){
            alert("You win ! You entered the right number !");
            //USED AI HERE
            message.classList.remove("alert-info", "alert-warning", "alert-danger");
            message.classList.add("alert" , "alert-success");
            message.innerHTML="WINNER WINNER !";
            alert("To play again , reload the page !");
            document.getElementById("button2").disabled = true;
        }
        else{
            if(tries == 0){
                alert("You lost !!!");
                location.reload(true);
            }
            else{
                if(guess < goal){
                    //USED AI HERE
                    message.classList.remove("alert-success", "alert-warning", "alert-danger");
                    message.classList.add("alert", "alert-warning");
                    message.innerHTML = "You entered a number lower than the goal! Try again!";
                }
                else{
                    //USED AI HERE
                    message.classList.remove("alert-success", "alert-warning", "alert-danger");
                    message.classList.add("alert", "alert-info");
                    message.innerHTML = "You entered a number higher than the goal! Try again!";
                }
            }
        }
    }
}