class Game {
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.endScreen = document.querySelector(".end-screen")
        this.startScreen = document.querySelector(".start-screen")
        this.winScreen = document.querySelector(".win-screen")
        this.player = null
        this.enemies = []
        this.bullets = []
        this.boss = null
        this.bossBullets = []
        this.bossDefeated = false
        this.enemyInterval = null
        this.score = 0
        this.lives = 3
    }


startGame() {

    this.changeMusic(introMusic)

    this.startScreen.style.display = "none"
    this.endScreen.style.display = "none"
    this.winScreen.style.display = "none"
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

        if (enemy.y > this.gameScreen.offsetHeight) {
            enemy.element.remove()
            return false
        }
        
        return true 
    })

     this.bullets = this.bullets.filter(bullet => {
        bullet.moveUp()

        const hitEnemy = this.enemies.find(enemy => bullet.isColliding(enemy))

        if(hitEnemy) {
            bullet.element.remove()
            hitEnemy.element.remove()
            this.enemies = this.enemies.filter(enemy => enemy !== hitEnemy)
            this.score++
            this.updateHud()
            return false
        }

        if (this.boss !== null && bullet.isColliding(this.boss)) {
            bullet.element.remove()
            this.boss.health--  

            if(this.boss.health <= 0) {
                this.defeatBoss()
            }

            return false
        }


        if (bullet.y + bullet.height < 0) {
            bullet.element.remove()
            return false
        }

        return true
    })

    if (this.score >= 20 && this.boss === null && !this.bossDefeated) {
        clearInterval(this.enemyInterval)
        this.enemies.forEach(enemy => enemy.element.remove())
        this.enemies = []
        this.boss = new finalBoss()
        this.changeMusic(bossMusic)
    }

    if (this.boss !== null) {
        this.boss.move()

        if (this.boss.y >= 10 && Math.random() < 0.02) {
            this.bossShoot()
        }
    }

    this.bossBullets = this.bossBullets.filter(bullet => {
        bullet.moveDown()

        if (this.player.isColliding(bullet)) {
            bullet.element.remove()
            this.lives--
            this.updateHud()
            if (this.lives <= 0) {
                this.gameOver()
            }
            return false

        }

        if (bullet.y > this.gameScreen.offsetHeight) {
            bullet.element.remove()
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


 shoot() {
    const bulletWidth = 10
    const bulletHeight = 20
    const x = this.player.x + (this.player.width - bulletWidth) / 2
    const y = this.player.y - bulletHeight
    this.bullets.push(new Bullet(x, y))

 }


 bossShoot() {
    const x = this.boss.x + (this.boss.width - 10) / 2
    const y = this.boss.y + this.boss.height
    this.bossBullets.push(new bossBullet(x, y))
 }


 winGame() {
    clearInterval(this.enemyInterval)
    clearInterval(this.moveInterval)
    this.gameScreen.style.display = "none"
    this.winScreen.style.display = "flex"
}


 defeatBoss() {
    this.boss.element.remove()
    this.boss = null
    this.bossDefeated = true
    this.winGame()
}


 changeMusic(newMusic) {
    if (currentMusic === newMusic) return

    const wasPlaying = !currentMusic.paused
    currentMusic.pause()
    currentMusic.currentTime = 0
    currentMusic = newMusic

    if (wasPlaying) currentMusic.play()
 }

}