import { ResponsiveSketchProps } from "./templateSketches";
import { P5CanvasInstance, Sketch } from "@p5-wrapper/react";

export const InvertingWavesSketch: Sketch = (
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

export default InvertingWavesSketch;
