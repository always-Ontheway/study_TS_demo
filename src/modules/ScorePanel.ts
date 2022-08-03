// ScorePanel class
export default class ScorePanel{
    score = 0
    level = 1
    scoreSpan : HTMLElement
    levelSpan : HTMLElement
    maxLevel : number

    constructor(maxLevel:number = 10){
        this.scoreSpan = document.getElementById('score')!
        this.levelSpan = document.getElementById('level')!
        this.maxLevel = maxLevel
    }

    addScore(){
        this.scoreSpan.innerHTML = ++this.score + ''
        if(this.score % 10 === 0){
            this.addLevel()
        }
    }
    addLevel(){
        if(this.level <= this.maxLevel){
            this.levelSpan.innerHTML = ++this.level + ''
        }
    }
}