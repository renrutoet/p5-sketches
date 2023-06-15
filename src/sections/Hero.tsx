import { ReactP5Wrapper } from "@p5-wrapper/react";
import {
  templateResponsiveSketch,
  mousePositionSketch,
  invertingWavesSketch,
  PerlinContourSketch,
} from "../sketches/sketches";
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

  return (
    <div className="flex-center">
      <div className="sketch-container" ref={container}>
        <ReactP5Wrapper
          sketch={PerlinContourSketch}
          height={height}
          width={width}
        />
      </div>
    </div>
  );
};
