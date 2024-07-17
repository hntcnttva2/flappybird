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
} from "cc";
import GameController from "./GameController";
const { ccclass, property } = _decorator;

@ccclass("pipe")
export class pipe extends Component {
  pressSpace: boolean;

  speed: number = 2;

  isPointed : boolean  = false;

  start() {

    this.pressSpace = false;
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
  }

  update(deltaTime: number) {
    
    if (this.pressSpace) {
      let pos = new Vec3(
        this.node.position.x - this.speed,
        this.node.position.y,
        0
      );
      this.node.position = pos;
    }
    if(this.node.position.x < 0 && this.isPointed == false ){
     
        this.isPointed = true;
        GameController.instance.IncreasePoint();
  
    }
    
    if (this.node.position.x < -1400) {
      this.node.destroy();
    }
  }

  onKeyDown(EventType: EventKeyboard) {
    this.pressSpace = true;
  }
}
