class Game {
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.endScreen = document.querySelector(".end-screen")
        this.startScreen = document.querySelector(".start-screen")
        this.player = null
        this.enemies = []
        this.enemyInterval = null
        this.score = 0
        this.lives = 3
    }


startGame() {
    this.startScreen.style.display = "none"
    this.endScreen.style.display = "none"
    this.gameScreen.style.display = "flex"
    this.gameScreen.innerHTML = ""

    this.hud = document.createElement("div")
    this.hud.classList.add("hud")

    this.scoreElement = document.createElement("span")
    this.livesElement = document.createElement("span")
    this.hud.appendChild(this.scoreElement)
    this.hud.appendChild(this.livesElement)

    this.gameScreen.appendChild(this.hud)
    this.updateHud()

    this.player = new Player()


    this.enemyInterval = setInterval(() => {
        this.spawnEnemy()
    }, 2000);

    this.moveInterval = setInterval(() => {
        this.animate()
    }, 15);

}


updateHud() {
    this.scoreElement.innerText = `score: ${this.score}`
    this.livesElement.innerText = "🤍".repeat(Math.max(0, this.lives))
}


animate() {

    if(this.lives <= 0) return


    this.enemies = this.enemies.filter(enemy => {
        enemy.moveDown()

        if(this.player.isColliding(enemy)) {
            enemy.element.remove()
            this.lives--
            this.updateHud()
            if (this.lives <= 0) {
                this.gameOver()
            }
            return false
        }

        if (enemy.bottom + enemy.height < 0) {
            enemy.element.remove()
            return false
        }
        
        return true 
    })
}

gameOver() {
    clearInterval(this.enemyInterval)
    clearInterval(this.moveInterval)
    this.gameScreen.style.display = "none"
    this.endScreen.style.display = "flex"
}


spawnEnemy() {
    this.enemies.push(new Enemy())
 }

}