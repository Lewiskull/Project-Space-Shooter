class bossBullet{
    constructor(x, y) {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.x = x
        this.y = y
        this.width = 10
        this.height = 30
        this.speed = 3

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundColor = "red"

        this.gameScreen.appendChild(this.element)

    }

    moveDown() {
        this.y += this.speed
        this.element.style.top = `${this.y}px`
    }

}