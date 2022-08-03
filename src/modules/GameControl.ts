import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import Food from "./Food";

class GameControl{
    snake : Snake
    scorePanel : ScorePanel
    food : Food
    direction : string = 'Right'
    isLive = true
    constructor(){
        this.snake = new Snake
        this.scorePanel = new ScorePanel
        this.food = new Food
        this.init()
    }
    init(){
        document.addEventListener('keydown',this.keyDownHandle.bind(this))
        this.run()
    }

    keyDownHandle(event : KeyboardEvent){
        this.direction = event.key
    }

    run(){
        let X = this.snake.X
        let Y = this.snake.Y

        switch(this.direction){
            case 'ArrowUp':
            case 'Up':
                Y -= 10
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10
                break;
        }
        this.checkEat(X,Y)
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e : any) {
            alert(e.message)
            this.isLive = false
        }
        

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level-1) * 30);
    }
    
    checkEat(X: number,Y: number){

        if( X === this.food.X && Y === this.food.Y ){
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl