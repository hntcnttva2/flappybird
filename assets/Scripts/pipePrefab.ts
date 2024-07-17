import { _decorator, Component, instantiate, Prefab, Node, Vec3, random, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipePrefab')
export class PipePrefab extends Component {
    @property({type: Prefab})
    public pipePrefab: Prefab | null = null;
   
    
    start() {
       this.node.setPosition(0,0,0);
      
      
    }

    update(deltaTime: number) {

    }

    onLoad() {
        this.schedule(this.spawnPrefab, 3, Number.MAX_VALUE);
    }

    spawnPrefab() {
        if (this.pipePrefab) {
            var newPipe = instantiate(this.pipePrefab);
            var randomX = 800;
            var randomY = this.getRandomArbitrary(-150,200);
            newPipe.setPosition(new Vec3(randomX,randomY,this.node.position.z));
            this.node.addChild(newPipe);
        }
        
    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
}
