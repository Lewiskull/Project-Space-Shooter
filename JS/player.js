class Player {
    constructor(){
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.x = 500
        this.width = 50
        this.height = 70
        this.y = this.gameScreen.offsetHeight - this.height - 10
        this.image = "./imagery/spaceship-megalovania.png"
        

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

    moveRight() {
        if(this.x + 10 + this.width <= this.gameScreen.offsetWidth){
            this.x += 10
            this.element.style.left = `${this.x}px`
        }        
    }

    moveLeft() {
        if(this.x - 10 >= 0){
        this.x -= 10
        this.element.style.left = `${this.x}px`
        }
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