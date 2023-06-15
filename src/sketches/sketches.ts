import { P5CanvasInstance, Sketch } from "@p5-wrapper/react";

export type ResponsiveSketchProps = {
  height: number;
  width: number;
};

export const templateResponsiveSketch: Sketch = (
  p5: P5CanvasInstance<ResponsiveSketchProps>
) => {
  let height = 600;
  let width = 600;

  p5.setup = () => p5.createCanvas(width, height, p5.WEBGL);

  p5.updateWithProps = (props: ResponsiveSketchProps) => {
    if (props.height) {
      height = props.height;
    }
    if (props.width) {
      width = props.width;
    }
  };

  p5.draw = () => {
    p5.resizeCanvas(width, height);
    p5.background(200);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
};

export const mousePositionSketch: Sketch = (
  p5: P5CanvasInstance<ResponsiveSketchProps>
) => {
  let height = 1200;
  let width = 900;

  p5.setup = () => p5.createCanvas(width, height, p5.WEBGL);

  p5.updateWithProps = (props: ResponsiveSketchProps) => {
    if (props.height) {
      height = props.height;
    }
    if (props.width) {
      width = props.width;
    }
  };

  p5.draw = () => {
    p5.resizeCanvas(width, height);
    p5.background(0);
    p5.fill(175);
    p5.circle(p5.mouseX - width / 2, p5.mouseY - height / 2, 200);
  };
};

export const invertingWavesSketch: Sketch = (
  p5: P5CanvasInstance<ResponsiveSketchProps>
) => {
  let height = 600;
  let width = 600;
  let startOffset = 0;

  p5.updateWithProps = (props: ResponsiveSketchProps) => {
    if (props.height) {
      height = props.height;
    }
    if (props.width) {
      width = props.width;
    }
  };
  p5.setup = () => p5.createCanvas(width, height, p5.WEBGL);

  p5.draw = () => {
    p5.resizeCanvas(width, height);
    p5.background(200);
    const increment = 0.01;

    p5.background(220);
    p5.fill(175);

    p5.stroke(255);

    p5.beginShape();

    let yoff = startOffset;

    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < width; i++) {
        const x = p5.noise(yoff) * height;
        p5.vertex(i - width / 2, x - height / 2 + j * 20 + 25);
        yoff += increment;
      }
    }

    p5.endShape();
    startOffset += increment;
  };
};

export const PerlinContourSketch: Sketch = (
  p5: P5CanvasInstance<ResponsiveSketchProps>
) => {
  let height = 600;
  let width = 600;

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);
  };

  p5.updateWithProps = (props: ResponsiveSketchProps) => {
    if (props.height) {
      height = props.height;
    }
    if (props.width) {
      width = props.width;
    }
  };

  p5.draw = () => {
    p5.resizeCanvas(width, height);

    const resolution = 0.01;
    p5.noStroke();
    p5.fill(0);

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const pixel = p5.noise(x * resolution, y * resolution);
        const bright = p5.map(pixel, 0, 1, 0, 255);

        if (bright > 200) {
          p5.fill(255);
        } else if (bright <= 200 && bright > 175) {
          p5.fill(0);
        } else if (bright <= 175 && bright > 150) {
          p5.fill(255, 50, 50);
        } else if (bright <= 150 && bright > 125) {
          p5.fill(200, 50, 50);
        } else if (bright <= 125 && bright > 100) {
          p5.fill(0);
        } else if (bright <= 100 && bright > 75) {
          p5.fill(255, 150, 150);
        } else if (bright <= 75 && bright > 50) {
          p5.fill(255);
        } else if (bright <= 50 && bright > 25) {
          p5.fill(255, 75, 75);
        } else if (bright <= 25 && bright >= 0) {
          p5.fill(0);
        } else {
          p5.fill(0);
        }

        p5.circle(x - width / 2, y - height / 2, 1);
      }

      p5.noLoop();
    }
  };
};
