function start(){
    alert("Welcome summoner ! let's play !");
    diff=prompt("First of all you have to choose the difficulty of the game ! ('easy'-'medium'-'hard') :");
    while(diff != "easy" && diff != "medium" && diff != "hard"){
        alert("You entered a wrong value ! Try again !");
        diff=prompt("First of all you have to choose the difficulty of the game ! ('easy'-'medium'-'hard') :");
    }
    alert("You chose " + diff + " difficulty !");
    if(diff == "easy"){
        alert("You have 5 tries to guess a number between 1 and 10 !");
        nbre=5;
        min=1;
        max=10;
    }
    else if(diff == "medium"){
        alert("You have 10 tries to guess a number between 1 and 50 !");
        nbre=10;
        min=1;
        max=50;
    }
    else{
        alert("You have 10 tries to guess a number between 1 and 100 !");
        nbre=10;
        min=1;
        max=100;
    }
    goal=Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    do{
        guess=parseInt(prompt("Enter a number between " + min + " and " + max + " :"));
        nbre=nbre-1;
        if(guess > goal){
            alert("You entered a number higher than the goal ! Try again ! ("+nbre+ " tries left)");
        }
        else if(guess < goal){
            alert("You entered a number lower than the goal ! Try again ! ("+nbre+ " tries left)");
        }
        else{
            alert("You won ! You entered the right number !");
            replay=prompt("Do you want to play again ? (yes/no) :");
            while(replay.toLowerCase() != "yes" && replay.toLowerCase() != "no"){
                replay=prompt("YES OR NO ??");
            }
            if(replay.toLowerCase() == "yes"){
                start();
            }
            else{
                guess=goal;
            }
        }
    }while(guess!=goal);
}