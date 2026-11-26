class finalBoss{
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 180
        this.height = 180
        this.x = (this.gameScreen.offsetWidth - this.width) / 2
        this.y = -this.height
        this.direction = 1
        this.speed = 3
        this.health = 30
        this.image = "./imagery/Andross_boss.png"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundImage = `url("${this.image}")`
        this.element.style.backgroundPosition = `center`
        this.element.style.backgroundSize = `contain`
        this.element.style.backgroundRepeat = `no-repeat`

        this.gameScreen.appendChild(this.element)

    }

    move() {

        if (this.y < 10) {
            this.y += 1
            this.element.style.top = `${this.y}px`
            return
        }

        this.x += this.speed * this.direction

        const rightLimit = this.gameScreen.offsetWidth - this.width

        if (this.x <= 0 || this.x >= rightLimit) {
            this.direction *= -1
        }

        this.element.style.left = `${this.x}px`
    }
}