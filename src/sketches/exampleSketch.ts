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

export const testSketch: Sketch = (
  p5: P5CanvasInstance<ResponsiveSketchProps>
) => {
  let height = 1200;
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
    p5.background(0);
    p5.fill(175);
    p5.circle(0, 0, 200);
  };
};

export const testSketch2: Sketch = (
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

  //   p5.draw = abstractDraw(p5, width, height);
  p5.draw = () => {
    p5.resizeCanvas(width, height);
    p5.background(0);
    p5.fill(175);
    p5.circle(0, 0, 200);
  };
};
// function abstractDraw(p5: any, width: number, height: number) {
//   return () => {
//     p5.resizeCanvas(width, height);
//     p5.background(0);
//     p5.fill(175);
//     p5.circle(0, 0, 200);
//   };
// }
