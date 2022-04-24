// Lizard playable character prefab
class Lizard extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add object to the existing scene
        this.isJumping = false;          // jumping logic
        this.isDash = false;
        this.moveSpeed = 3;
        this.bottomOfScreen = game.config.height - borderUISize - borderpadding * 10;
    }

    update() {
        // horizontal movement
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            if(this.x === lane2) {
                this.x = lane1;
            } else if(this.x === lane3){
                this.x = lane2;
            }
        }
        
        else if(Phaser.Input.Keyboard.JustDown(keyD)){
            if(this.x === lane2){ 
                this.x = lane3;
            } else if(this.x === lane1){ 
                this.x = lane2;
            }
         }
    }
}