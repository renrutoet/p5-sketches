import { createNoise3D } from "simplex-noise";
import { ResponsiveSketchProps } from "./templateSketches";
import { P5CanvasInstance, Sketch } from "@p5-wrapper/react";

const SimplexContourSketch: Sketch = (
  p5: P5CanvasInstance<ResponsiveSketchProps>
) => {
  let height = 600;
  let width = 600;
  let timeoff = 0;
  const noise3D = createNoise3D();
  const timeincrement = 0.005;
  const scale = 1.5;

  p5.setup = () => {
    p5.createCanvas(width, height, p5.P2D);
    p5.pixelDensity(1);
    p5.loadPixels();
  };

  p5.updateWithProps = (props: ResponsiveSketchProps) => {
    if (props.height) {
      height = props.height;
    }
    if (props.width) {
      width = props.width;
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(width, height);
    p5.loadPixels();
  };

  p5.draw = () => {
    const increment = 0.002;

    let xoff = 0;
    for (let x = 0; x < width / scale; x++) {
      let yoff = 0;
      for (let y = 0; y < height / scale; y++) {
        const pixel = noise3D(xoff, yoff, timeoff);
        const bright = p5.map(pixel, 0, 1, 0, 255);
        const index = (x + y * width) * 4;

        if (bright > 200) {
          p5.pixels[index] = 255;
          p5.pixels[index + 1] = 255;
          p5.pixels[index + 2] = 255;
        } else if (bright <= 200 && bright > 175) {
          p5.pixels[index] = 0;
          p5.pixels[index + 1] = 0;
          p5.pixels[index + 2] = 0;
        } else if (bright <= 175 && bright > 150) {
          p5.pixels[index] = 255;
          p5.pixels[index + 1] = 50;
          p5.pixels[index + 2] = 50;
        } else if (bright <= 150 && bright > 125) {
          p5.pixels[index] = 200;
          p5.pixels[index + 1] = 50;
          p5.pixels[index + 2] = 50;
        } else if (bright <= 125 && bright > 100) {
          p5.pixels[index] = 0;
          p5.pixels[index + 1] = 0;
          p5.pixels[index + 2] = 0;
        } else if (bright <= 100 && bright > 75) {
          p5.pixels[index] = 255;
          p5.pixels[index + 1] = 150;
          p5.pixels[index + 2] = 150;
        } else if (bright <= 75 && bright > 50) {
          p5.pixels[index] = 255;
          p5.pixels[index + 1] = 255;
          p5.pixels[index + 2] = 255;
        } else if (bright <= 50 && bright > 25) {
          p5.pixels[index] = 255;
          p5.pixels[index + 1] = 75;
          p5.pixels[index + 2] = 75;
        } else if (bright <= 25 && bright >= 0) {
          p5.pixels[index] = 0;
          p5.pixels[index + 1] = 0;
          p5.pixels[index + 2] = 0;
        } else {
          p5.pixels[index] = 0;
          p5.pixels[index + 1] = 0;
          p5.pixels[index + 2] = 0;
        }

        p5.pixels[index + 3] = 255;
        yoff += increment;
      }
      xoff += increment;
    }

    p5.updatePixels();
    // p5.noLoop();

    //upscale canvas
    const g = p5.get(0, 0, width / scale, height / scale);
    p5.image(g, 0, 0, width, height);

    timeoff += timeincrement;
  };
};

export default SimplexContourSketch;
