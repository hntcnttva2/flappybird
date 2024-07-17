import { _decorator, BoxCollider, Collider, Collider2D, Component, Contact2DType, director, EventKeyboard, Input, input, IPhysics2DContact, ITriggerEvent, KeyCode, Label, Node, RigidBody2D, Vec2 } from 'cc';
import GameController from './GameController';
const { ccclass, property } = _decorator;


@ccclass('bird')
export class bird extends Component {




  
   rigidbody : RigidBody2D;
   jumpForce : number = 10;
   levelStart : boolean = false;



   start() {
       this.node.setPosition(0,0,0);
     
       input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this);
       this.rigidbody = this.node.getComponent(RigidBody2D);
       if(this.rigidbody){
           this.rigidbody.gravityScale = 0;    
       }else{
           return;
       }
     
       let collider = this.getComponent(Collider2D);
       if (collider) {
           collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
       }
  
  
      

   }
 


   update(deltaTime: number) {

       if(this.levelStart == true){
          this.rigidbody.gravityScale = 4;
       }
    
      
      
   }
  
   onKeyDown(EventType : EventKeyboard){
       this.levelStart = true;
       if(EventType.keyCode === KeyCode.SPACE){
           if (this.rigidbody) {
               this.rigidbody.linearVelocity = new Vec2(0, this.jumpForce);
           }
      }
    
      
      
   }
   
   onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact ) {
         
            director.loadScene("flappybird");
         
      
   }
 

}
