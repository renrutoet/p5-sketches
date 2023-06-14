import { ReactP5Wrapper, P5CanvasInstance, Sketch } from "@p5-wrapper/react";
import {
  templateResponsiveSketch,
  testSketch,
  testSketch2,
} from "../sketches/exampleSketch";
import { useLayoutEffect, useRef, useState } from "react";

export const Hero = (): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1500);
  const [height, setHeight] = useState(1500);

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

  // I do I make multiple sketches all repsonsive?
  // Can I use Higher order components to wrap the Wrapper component with this functionality
  return (
    <div className="flex-center">
      {/* <div className="sketch-container" ref={container}> */}
      {/* <ReactP5Wrapper
          sketch={templateResponsiveSketch}
          height={height}
          width={width}
        />
      </div> */}
      <div className="sketch-container" ref={container}>
        <ReactP5Wrapper sketch={testSketch2} height={height} width={width} />
      </div>
      {/* <div className="sketch-container" ref={container}>
        <ReactP5Wrapper sketch={sketch} height={height} width={width} />
      </div>
      <div className="sketch-container" ref={container}>
        <ReactP5Wrapper sketch={sketch} height={height} width={width} />
      </div> */}
    </div>
  );
};
