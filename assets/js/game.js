var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this

console.log(playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var enemyMoney = 10;

//console.log(enemyNames);
//console.log(enemyNames[2]);
//console.log(enemyNames.length)

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
}

console.log("apple " + i)

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

console.log(enemyHealth, enemyAttack, enemyMoney);

var fight = function (enemyNames) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // Alert players that they are starting the round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //var alertFight = window.alert("Welcome to Robot Gladiators!");

        //__________________________________________________________________________________________________________________________
        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //__________________________________________________________________________________________________________________________        
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
            );
            //__________________________________________________________________________________________________________________________  
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");
                break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }
            //__________________________________________________________________________________________________________________________  
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            )
            //console.log(enemyHealth);
            //__________________________________________________________________________________________________________________________  
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;   
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
            //__________________________________________________________________________________________________________________________        
            // if player choses to skip
            if (promptFight === "skip" || promptFight === "SKIP") {
            //__________________________________________________________________________________________________________________________       
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //__________________________________________________________________________________________________________________________  
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
              }
            //__________________________________________________________________________________________________________________________        
             //if no (false), ask question again by running fight() again
        }
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
}
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyNames = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyNames);
}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots