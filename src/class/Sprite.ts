import {Position} from './interfaces.ts';

export default class  Sprite {
    constructor(
        private _position : Position = {x:150, y:150},
        private _width: number = 0,
        private _height: number = 0,
        private _color: string = 'orange',
        private _velocity = 0
    ) {

    }

    get position(): Position {
        return this._position;
    }

    set position(value: Position) {
        this._position = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get velocity(): number {
        return this._velocity;
    }

    set velocity(value: number) {
        this._velocity = value;
    }

    public draw(ctx: CanvasRenderingContext2D) : void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}