import Sprite from "./sprite.js";

class Ball extends Sprite {
  constructor(x, y, width, height, color, dx, dy) {
    super(x, y, width, height, color, dx, dy);
  }
  bounce(canvasWidth, canvasHeight) {
    if (this.x < 0) {
      // checking if ball has hit the left edge
      this.dx *= -1;
    } else if (this.x + this.width > canvasWidth) {
      this.dx *= -1;
    }

    if (this.y < 0) {
      this.dy *= -1;
    } else if (this.y + this.height > canvasHeight) {
      this.dy *= -1;
    }
    // checking if the ball has hit the right
    // check if hit top
    // check if hit bottom
  }
}

export default Ball;
