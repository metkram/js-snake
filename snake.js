"use strict";
class Snake {
  constructor() {
    this.snakeCoordinates = [[0, 5], [0, 6], [0, 7], [1, 7], [1, 8]];
    this.field = document.createElement("div");
    this.field.id = "field";
    for (let i = 0; i < 100; i++) {
      let block = document.createElement("div");
      block.className = "empty-block";
      block.innerHTML = i;
      this.field.append(block);
    }
    this.blocks = this.field.querySelectorAll("div");
    // this.posX = 0;
    // this.posY = 5;
    // this.tail = [[this.posX, this.posY + 1], [this.posX, this.posY + 2]];
    this.direction = [0, -1];
    // this.position = this.snakeCoordinates[0][1] * 10 + this.snakeCoordinates[0][0];
    for (let i of this.snakeCoordinates) {
      this.blocks[i[1] * 10 + i[0]].className = "snake-block";
    }

    document.body.append(this.field);
    // for (let i of this.tail) {
    //   randomDiv[10 * i[1] + i[0]].className = "block-black";
    // }
  }
  step() {
    // randomDiv[this.snakeCoordinates[1][1] * 10 + this.snakeCoordinates[1][0]].className = "block";
    this.blocks[this.snakeCoordinates[this.snakeCoordinates.length - 1][1] * 10 + this.snakeCoordinates[this.snakeCoordinates.length - 1][0]].className = "empty-block";
    //corner turn
    if (this.snakeCoordinates[0][0] == 0 && this.snakeCoordinates[0][1] == 0) {
      this.direction = [1, 0];
    } else if (this.snakeCoordinates[0][0] == 9 && this.snakeCoordinates[0][1] == 0) {
      this.direction = [0, 1];
    } else if (this.snakeCoordinates[0][0] == 9 && this.snakeCoordinates[0][1] == 9) {
      this.direction = [-1, 0];
    } else if (this.snakeCoordinates[0][0] == 0 && this.snakeCoordinates[0][1] == 9) {
      this.direction = [0, -1];
    }

    //move all coordinates
    for (let i = this.snakeCoordinates.length - 1; i > 0 ; i--) {
      this.snakeCoordinates[i][0] = this.snakeCoordinates[i - 1][0];
      this.snakeCoordinates[i][1] = this.snakeCoordinates[i - 1][1];
      //console.log(i);
    }
    this.snakeCoordinates[0][0] += this.direction[0];
    this.snakeCoordinates[0][1] += this.direction[1];
    //teleport move
    if (this.snakeCoordinates[0][0] == -1) {
      this.snakeCoordinates[0][0] = 9;
    }
    if (this.snakeCoordinates[0][0] == 10) {
      this.snakeCoordinates[0][0] = 0;
    }
    if (this.snakeCoordinates[0][1] == 10) {
      this.snakeCoordinates[0][1] = 0;
    }
    if (this.snakeCoordinates[0][1] == -1) {
      this.snakeCoordinates[0][1] = 9;
    }


    // this.position = this.snakeCoordinates[0][1] * 10 + this.snakeCoordinates[0][0];
    //rendering of snake coordinates
    for (let i = 0; i < this.snakeCoordinates.length; i++) {
      if (i == 0) {
        this.blocks[this.snakeCoordinates[0][1] * 10 + this.snakeCoordinates[0][0]].className = "head-snake-block";
      } else {
        this.blocks[this.snakeCoordinates[i][1] * 10 + this.snakeCoordinates[i][0]].className = "snake-block";
      }
    }
    // for (let i of this.snakeCoordinates) {
    //   randomDiv[i[1] * 10 + i[0]].className = "snake-block";
    // }
  }
}

function changeDirection(event) {
  switch(event.code) {
    case "ArrowUp":
      console.log("up");
      newSnake.direction = [0, -1];
      break;
    case "ArrowDown":
      newSnake.direction = [0, 1];
      break;
    case "ArrowLeft":
      newSnake.direction = [-1, 0];
      break;
    case "ArrowRight":
      newSnake.direction = [1, 0];
      break;
  }
}

let newSnake = new Snake();
setInterval(() => newSnake.step(), 1000);
document.addEventListener("keydown", changeDirection);

function randomBlock() {
  let randomNum = Math.round(Math.random() * 100);
  return randomNum;
}
//setInterval(() => randomDiv[randomBlock()].className = "block-black", 100);
