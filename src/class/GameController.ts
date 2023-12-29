export default abstract class GameController {
    protected _leftPressed: boolean = false;
    protected _rightPressed : boolean = false;
    protected _upPressed : boolean = false;
    protected _downPressed : boolean = false;



    protected _bluePressed : boolean = false;
    protected _redPressed : boolean = false;
    protected _greenPressed : boolean = false;
    protected _yellowPressed : boolean = false;

     get bluePressed() :boolean {
        return this._bluePressed;
    }

    get redPressed() :boolean {
        return this._redPressed;
    }

    get greenPressed() :boolean {
        return this._greenPressed;
    }

    get yellowPressed() :boolean {
        return this._yellowPressed;
    }

    get upPressed() :boolean {
        return this._upPressed;
    }

    get downPressed() :boolean {
        return this._downPressed;
    }

    get rightPressed() :boolean {
        return this._rightPressed;
    }

    get leftPressed() :boolean {
        return this._leftPressed;
    }


    protected constructor() {
        this.GameControllerInit();
    }
    public abstract GameControllerInit() : void;
    public abstract ControllerInput() : void;



}