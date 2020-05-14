"use strict";
class Snake {
  constructor() {
    this.posX = 0;
    this.posY = 5;
    this.direction = [0, -1];
    this.position = this.posY * 10 + this.posX;
  }
  step() {
    randomDiv[this.position].className = "block";
    if (this.posX == 0 && this.posY == 0) {
      this.direction = [1, 0];
    } else if (this.posX == 9 && this.posY == 0) {
      this.direction = [0, 1];
    } else if (this.posX == 9 && this.posY == 9) {
      this.direction = [-1, 0];
    } else if (this.posX == 0 && this.posY == 9) {
      this.direction = [0, -1];
    }

    this.posX += this.direction[0];
    this.posY += this.direction[1];

    console.log(this.posX, this.posY);
    this.position = this.posY * 10 + this.posX;
    randomDiv[this.position].className = "block-black";
  }
}
let randomDiv = document.querySelector("#field").querySelectorAll("div");
let newSnake = new Snake();
console.log(newSnake);
setInterval(() => newSnake.step(), 1000);



function randomBlock() {
  let randomNum = Math.round(Math.random() * 100);
  return randomNum;
}
//setInterval(() => randomDiv[randomBlock()].className = "block-black", 100);
