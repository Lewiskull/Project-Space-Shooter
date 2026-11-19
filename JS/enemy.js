class Enemy{
    constructor() {
            this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.x = 10
        this.bottom = 500 
        this.width = 50
        this.height = 50
        this.image = "./imagery/enemy.png"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.bottom = `${this.bottom}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundImage = `url("${this.image}")`
        this.element.style.backgroundPosition = `center`
        this.element.style.backgroundSize = `cover`

        this.gameScreen.appendChild(this.element)
    }
}