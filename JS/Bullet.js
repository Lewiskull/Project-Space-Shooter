class Bullet {
    constructor(x, y){
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.x = x
        this.y = y
        this.width = 2
        this.height = 15
        this.speed = 5

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundColor = "red"

        this.gameScreen.appendChild(this.element)

    }


    moveUp() {
        this.y -= this.speed
        this.element.style.top = `${this.y}px`
    }

    isColliding(enemy) {
        const separated = 
        this.x + this.width < enemy.x ||
        this.x > enemy.x + enemy.width ||
        //this.y + this.height < enemy.y || 
        this.y > enemy.y + enemy.height

        return !separated
    }
}