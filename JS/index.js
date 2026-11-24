const startScreen = document.querySelector(".start-screen")
const gameScreen = document.querySelector(".game-screen")
const endScreen = document.querySelector(".end-screen")
const startBtn = document.querySelector(".start-btn")
const restartBtn = document.querySelector(".restart-btn")

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
        }
    
    })

    restartBtn.addEventListener("click", () => {
        console.log("restart click")
        game = new Game()
        game.startGame()
    })

})
