new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    method: {
        startGame: {
            this.gameIsRunning = true;
this.playerHealth = 100;
this.monsterHealth = 100;

},
attack:{
    var max = 12;
    var min = 5;
    var damage = Math.floor(Math.random() * (max - min + 1)) + min;
    this.playerHealth -= damage;

    if (this.playerHealth <= 0) {
        alert("You won");
        this.gameIsRunning = false;
        return;

    }

    var max = 10;
    var min = 3;
    var damage = Math.floor(Math.random() * (max - min + 1)) + min;
    this.monsterHealth -= damage;


    if (this.monsterHealth <= 0) {
        alert("You lost");
        this.gameIsRunning = false;

    }

}
,

specialAttack: {

}
,
heal: {

}
,
giveUp:  {

}
}


})