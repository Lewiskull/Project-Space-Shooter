class Enemy{
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 40
        this.height = 40
        this.x = Math.floor(Math.random() * (this.gameScreen.offsetWidth - this.width))
        this.y = -this.height
        this.speed = 2
        this.image = "./imagery/Alien- Image.png"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundImage = `url("${this.image}")`
        this.element.style.backgroundPosition = `center`
        this.element.style.backgroundSize = `cover`

        this.gameScreen.appendChild(this.element)
    }

    moveDown() {
        this.y += this.speed
        this.element.style.top = `${this.y}px`
    }
}