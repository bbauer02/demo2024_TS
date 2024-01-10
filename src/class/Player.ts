import Sprite from "./Sprite.ts";
import {Position} from "./interfaces.ts";
import GameController from "./GameController.ts";

export default class Player extends Sprite {
    private gameController : GameController | null = null;
    super(
        _position : Position = {x:150, y:150},
        _width: number = 0,
        _height: number = 0,
        _color: string = 'orange',
        _velocity :number = 0
    ) {
    }


    public setupController(gameController : GameController) : void {
        this.gameController = gameController;
    }

    private move() : void {
        if(this.gameController) {
            if(this.gameController.upPressed) {
                this.position.y -= this.velocity;
            }
            if(this.gameController.downPressed) {
                this.position.y += this.velocity;
            }
            if(this.gameController.leftPressed) {
                this.position.x -= this.velocity;
            }
            if(this.gameController.rightPressed) {
                this.position.x += this.velocity;
            }
        }

    }

    private changePlayerColor() : void {
        if(this.gameController) {
            if(this.gameController.bluePressed) {
                this.color = "blue";
            }

            if(this.gameController.yellowPressed) {
                this.color = "yellow";
            }

            if(this.gameController.greenPressed) {
                this.color = "green";
            }

            if(this.gameController.redPressed) {
                this.color = "red";
            }
        }
    }

    public update(ctx: CanvasRenderingContext2D): void {
        this.draw(ctx);
        if(this.gameController) {
            this.gameController.ControllerInput();
        }
        this.move();
        this.changePlayerColor();
    }


}