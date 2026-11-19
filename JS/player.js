class Player {
    constructor(){
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.x = 500
        this.bottom = 10
        this.width = 50
        this.height = 50
        this.image = "../imagery/spaceship.svg"

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

    moveRight() {
        if(this.x + 10 <= 910){
            this.x += 10
            this.element.style.left = `${this.x}px`
        }        
    }

    moveLeft() {
        if(this.x - 5 >= 0){
        this.x -= 10
        this.element.style.left = `${this.x}px`
        }
    }
}