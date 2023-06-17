import { ResponsiveSketchProps } from "./templateSketches";
import { P5CanvasInstance, Sketch } from "@p5-wrapper/react";

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

export default mousePositionSketch;
