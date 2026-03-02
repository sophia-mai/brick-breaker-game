import Block from "./model/block.js";

class Sprite extends Block {
  constructor(x, y, width, height, color, dx, dy) {
    super(x, y, width, height, color);
    this.dx = dx;
    this.dy = dy;
  }
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

export default Sprite;
