import Player from "./Player.ts";
export default class Game {
    private canvas: HTMLCanvasElement | null;
    private ctx: CanvasRenderingContext2D | null;
    constructor(canvasId : string, private player1 : Player) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
        this.ctx = this.canvas?.getContext("2d") || null;
        this.init();
        this.gameLoop();
    }

    private init() : void {
        this.setupCanvas();
        this.addEventListeners();

    }

    private setupCanvas() : void {
        if(this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.player1.width = this.canvas.width * 0.05;
            this.player1.height = this.canvas.height * 0.2;
            this.player1.velocity = this.canvas.width * 0.01;
        }

    }

    private addEventListeners() : void {
        window.addEventListener("resize", this.setupCanvas);
    }

    private gameLoop() : void {
        this.clearScreen();
        this.player1.update(<CanvasRenderingContext2D>this.ctx);

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private clearScreen() : void {
        if(this.ctx && this.canvas) {
            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
        }
    }



}