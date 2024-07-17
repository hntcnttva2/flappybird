import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    @property({type: Label})
   score: Label = null;

   @property({type: Label})
   highScore: Label = null;

   scorePlayer: number ;
   highScorePlayer : number ;
   gainScore(){
       return  this.scorePlayer+= 1;
      }
    start() {
     this.scorePlayer = 0;
       const storedHighScore = localStorage.getItem("highScore");
       if (storedHighScore) {
           this.highScorePlayer = parseInt(storedHighScore);
           this.highScore.string = "HIGH SCORE: " + this.highScorePlayer.toString();
       }
    }

    update(deltaTime: number) {
        if(this.node.position.x == 0){
            this.scorePlayer = this.gainScore();
             this.score.string =  "SCORE: " + this.scorePlayer.toString();
           }
           this.highScorePlayer = Math.max(this.highScorePlayer,this.scorePlayer);
         
           this.highScore.string = "HIGH SCORE: "+ this.highScorePlayer.toString();
           localStorage.setItem('highScore', this.highScorePlayer.toString());
    }
      
}

