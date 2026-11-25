const startScreen = document.querySelector(".start-screen")
const gameScreen = document.querySelector(".game-screen")
const endScreen = document.querySelector(".end-screen")
const winScreen = document.querySelector(".win-screen")
const startBtn = document.querySelector(".start-btn")
const restartBtn = document.querySelector(".restart-btn")
const musicButton = document.querySelector(".music-btn");


let game;


window.addEventListener("load", () => {

    startBtn.addEventListener("click", () => {

        game = new Game()
        game.startGame()
    })
    
    document.addEventListener("keydown", (e) => {
        console.log(e.key)
        if(e.key === "ArrowLeft"){
            game.player.moveLeft()
        }
        if(e.key === "ArrowRight") {
            game.player.moveRight()
        }
        if(e.key === " ") {
            game.shoot()
            shootSound.currentTime = 0
            shootSound.play()
        }
    
    })

    restartBtn.addEventListener("click", () => {
        console.log("restart click")
        game = new Game()
        game.startGame()
    })

    const winBtn = document.querySelector(".win-btn")
    winBtn.addEventListener("click", () => restartBtn.click())

})

const introMusic = new Audio("./audio/intromusic.mp3");
introMusic.loop = true;
introMusic.volume = 0.2;

const shootSound = new Audio("./audio/shoot.wav")
shootSound.volume =0.1;

const bossMusic = new Audio("./audio/finalboss.mp3")
bossMusic.loop = true
bossMusic.volume = 0.2

let currentMusic = introMusic


musicButton.addEventListener("click", () => {
    if (currentMusic.paused) {
        currentMusic.play();
    }
    else {
        currentMusic.pause()
    }
    musicButton.blur();

});
