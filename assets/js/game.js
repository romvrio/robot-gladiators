// Game states 
// WIN - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// Lose - Players robot's Health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Death Bringer", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {

    // repeat and execute as as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to Fight or SKIP this battle? Enter 'FIGHT' or ' SKIP' to choose.");

        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true) leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");

            //leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
console.log(enemyNames.length);

var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //let player know what round they are in, arrays atart t 0 so it needs 1 added to it
            window.alert("welcome to Robot Gladiators! Round " + (i + 1));
            // pick new enemy to fight based on the undex of enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
            enemyHealth = 50;
            // call fight function with enemy-robot
            fight(pickedEnemyName);
            // call endgame if player dies or is put of enemies
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        };
        endGame();

    }
}

var endGame = function () {
    // if player is still alive, player wins!

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }

    // ask player if theyd like to play again 
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }

    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};
startGame();






