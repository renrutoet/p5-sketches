import { ReactP5Wrapper, P5CanvasInstance, Sketch } from "@p5-wrapper/react";
import { useLayoutEffect, useRef, useState } from "react";

type MySketchProps = {
  height: number;
  width: number;
};

const sketch: Sketch = (p5: P5CanvasInstance<MySketchProps>) => {
  let height = 600;
  let width = 600;

  p5.setup = () => p5.createCanvas(width, height, p5.WEBGL);

  p5.updateWithProps = (props: MySketchProps) => {
    if (props.height) {
      height = props.height;
    }
    if (props.width) {
      width = props.width;
    }
  };

  p5.draw = () => {
    p5.resizeCanvas(width, height);
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
};

export default function App() {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(1000);

  useLayoutEffect(() => {
    if (container.current) {
      setWidth(container.current.clientWidth);
      setHeight(container.current.clientHeight);
    }

    const handleResize = () => {
      if (container.current) {
        setWidth(container.current.clientWidth);
        setHeight(container.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="page">
      <div className="flex-center">
        <div className="sketch-container" ref={container}>
          <ReactP5Wrapper sketch={sketch} height={height} width={width} />
        </div>
      </div>
    </div>
  );
}
