// GameController.ts
import {
    _decorator,
    Component,
    EventKeyboard,
    Input,
    input,
    instantiate,
    Label,
    Node,
    Prefab,
    Vec3,
    game,
    Collider2D,
    Contact2DType,
    IPhysics2DContact,
    Button,
    EventHandler,
    Vec2
  } from "cc";
import { pipe } from "./pipe";
import { bird } from "./bird";
const { ccclass, property } = _decorator;
@ccclass
export default class GameController extends Component {
    @property({type: Label})
    score: Label = null;

    isStart: boolean = false;

    @property(bird)
    bird: bird = null;

    scorePlayer: number = 0;

    private static _instance: GameController = null;

    public static get instance(): GameController {
        return GameController._instance;
    }

    onLoad() {
        if (GameController._instance) {
            this.destroy();
            return;
        }
        GameController._instance = this;
        game.addPersistRootNode(this.node);
       
    }

    SetScoreUI() {
        if (this.score) {
            this.score.string = "SCORE: " + this.scorePlayer.toString();
        }
    }

    IncreasePoint() {
        this.scorePlayer++;
        this.SetScoreUI();
    }


    start() {
        this.scorePlayer = 0; 
        this.SetScoreUI();
    }

    
}
