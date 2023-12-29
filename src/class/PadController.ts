import GameController from "./GameController.ts";

export default class PadController extends GameController {
    private controllerIndex : number | null = null;
    constructor() {
        super();
    }
    public GameControllerInit() : void {
        window.addEventListener("gamepadconnected", (event :GamepadEvent) => {
            console.log("gamepad connected");
            this.controllerIndex = event.gamepad.index;
        });

        window.addEventListener("gamepaddisconnected", () => {
            console.log("gamepad disconnected");
            this.controllerIndex =null;
        });
    }

    public ControllerInput() : void {
        const gamepads: (Gamepad | null)[] = navigator.getGamepads();
        const validGamepads: Gamepad[] = gamepads.filter((gamepad): gamepad is Gamepad => gamepad !== null) as Gamepad[];
        if (this.controllerIndex !== null && this.controllerIndex !== undefined) {
            const gamepad: Gamepad | undefined = validGamepads[this.controllerIndex];
            if (gamepad) {
                const buttons: GamepadButton[] = gamepad.buttons as GamepadButton[];

                this._upPressed = buttons[12].pressed;
                this._downPressed = buttons[13].pressed;
                this._leftPressed = buttons[14].pressed;
                this._rightPressed = buttons[15].pressed;

                this._redPressed = buttons[1].pressed;
                this._greenPressed = buttons[0].pressed;
                this._yellowPressed = buttons[3].pressed;
                this._bluePressed = buttons[2].pressed;

                const stickDeadZone : number = 0.8;

                const leftRightValue : number = gamepad.axes[0];

                if(leftRightValue >= stickDeadZone) {
                    this._rightPressed = true;
                } else if ( leftRightValue <= -stickDeadZone) {
                    this._leftPressed = true;
                }

                const upDownValue : number = gamepad.axes[1];

                if(upDownValue >= stickDeadZone) {
                    this._downPressed = true;
                }
                else if(upDownValue <= -stickDeadZone) {
                    this._upPressed = true;
                }

            }
        }
    }






}