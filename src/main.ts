import './style.css';
import Player from "./class/Player.ts";
import PadController from "./class/PadController.ts";

import Game from "./class/Game.ts";

const player1 = new Player();
const padcontroller : PadController = new PadController();
player1.setupController(padcontroller);


const game = new Game("gameArea", player1);




/*
const canvas: HTMLCanvasElement | null = document.getElementById("gameArea") as HTMLCanvasElement | null;



if (canvas) {
  const ctx = canvas.getContext("2d");

  if (ctx) {
    let playerWidth : number = 0;
    let playerHeight : number = 0;
    let playerX : number =0;
    let playerY : number =0;
    let playerColor : string = 'orange';
    let velocity : number = 0;

    let controllerIndex  : number | null = null;
    let leftPressed : boolean = false;
    let rightPressed : boolean = false;
    let upPressed : boolean = false;
    let downPressed : boolean = false;

    let bluePressed : boolean = false;
    let redPressed : boolean = false;
    let greenPressed : boolean = false;
    let yellowPressed : boolean = false;

    const setupCanvas = () : void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      playerWidth = canvas.height * 0.1;
      playerHeight = canvas.width * 0.1;
      velocity = canvas.width * 0.01;

      playerX = (canvas.width - playerWidth) / 2;
      playerY = (canvas.height - playerHeight) / 2;

    }

    setupCanvas();

    window.addEventListener("resize", setupCanvas);
    window.addEventListener("gamepadconnected", (event :GamepadEvent) => {
      console.log("gamepad connected");
       controllerIndex = event.gamepad.index;
    });

    window.addEventListener("gamepaddisconnected", () => {
      console.log("gamepad disconnected");
      controllerIndex =null;
    });


    const clearScreen = () : void => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0,0, canvas.width, canvas.height);
    }

    const drawPlayer = () : void => {
      ctx.fillStyle = playerColor;
      ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    }

    const controllerInput = (): void => {
      const gamepads: (Gamepad | null)[] = navigator.getGamepads();
      // Filtrer les éléments null
      const validGamepads: Gamepad[] = gamepads.filter((gamepad): gamepad is Gamepad => gamepad !== null) as Gamepad[];
      // Vérifier si controllerIndex est défini
      if (controllerIndex !== null && controllerIndex !== undefined) {
        const gamepad: Gamepad | undefined = validGamepads[controllerIndex];
        if (gamepad) {
          const buttons: GamepadButton[] = gamepad.buttons as GamepadButton[];
          upPressed = buttons[12].pressed;
          downPressed = buttons[13].pressed;
          leftPressed = buttons[14].pressed;
          rightPressed = buttons[15].pressed;

          const stickDeadZone : number = 0.8;

          const leftRightValue : number = gamepad.axes[0];

          if(leftRightValue >= stickDeadZone) {
            rightPressed = true;
          } else if ( leftRightValue <= -stickDeadZone) {
            leftPressed = true;
          }

          const upDownValue : number = gamepad.axes[1];

          if(upDownValue >= stickDeadZone) {
            downPressed = true;
          }
          else if(upDownValue <= -stickDeadZone) {
            upPressed = true;
          }

          redPressed = buttons[1].pressed;
          greenPressed = buttons[0].pressed;
          yellowPressed = buttons[3].pressed;
          bluePressed = buttons[2].pressed;



        }
      }
    };

  const movePlayer = (): void => {

    if(upPressed) {
      playerY -= velocity;
    }
    if(downPressed) {
      playerY += velocity;
    }
    if(leftPressed) {
      playerX -= velocity;
    }
    if(rightPressed) {
      playerX += velocity;
    }
  }

  const changePlayerColor = () : void => {
    if(bluePressed) {
      playerColor = "blue";
    }

    if(yellowPressed) {
      playerColor = "yellow";
    }

    if(greenPressed) {
      playerColor = "green";
    }

    if(redPressed) {
      playerColor = "red";
    }

  }

  const updatePlayer = (): void => {
    movePlayer();
    changePlayerColor();
  }

    const gameLoop  = () : void => {
      clearScreen();
      drawPlayer();
      controllerInput();
      updatePlayer();
      requestAnimationFrame(gameLoop)
    }

    gameLoop();



  } else {
    console.error("Le contexte 2D n'est pas disponible.");
  }
} else {
  console.error("L'élément canvas avec l'ID 'gameArea' n'a pas été trouvé.");
}
*/