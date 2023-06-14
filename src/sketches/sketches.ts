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

export const perlinSketch: Sketch = (
  p5: P5CanvasInstance<ResponsiveSketchProps>
) => {
  let height = 600;
  let width = 600;
  let startOffset = 0;

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
