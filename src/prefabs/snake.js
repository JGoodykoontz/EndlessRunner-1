class Snake extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // adds object to the current scene
        this.moveSpeed = 3;
        this.attack = false;
    }

    update() {
        // move snake down the screen
        this.y += this.moveSpeed;

        // move snake to top of screen
        if(this.y >= game.config.height) {
            this.y = 0 - game.config.height;
            this.x = -150;
            this.attack = false;
        }

        // snake attacks
        if(this.y === row1) {
            this.attack = true;
            this.x = lane2;
        }
    }
}