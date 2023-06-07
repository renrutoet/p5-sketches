import p5 from "p5";
import { useRef } from "react";

export const SketchCanvas = () => {
  function sketch(p) {
    // p is a reference to the p5 instance this sketch is attached to
    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.background(0);
    };

    p.draw = function () {
      // your draw code here
      p.background(0);

      p.circle(p.mouseX, p.mouseY, 100);
    };
  }

  // create a reference to the container in which the p5 instance should place the canvas
  const p5ContainerRef = useRef();

  const p5Instance = new p5(sketch, p5ContainerRef.current);
  // useEffect(() => {
  //   // On component creation, instantiate a p5 object with the sketch and container reference

  //   // On component destruction, delete the p5 instance
  //   return () => {
  //     p5Instance.remove();
  //   };
  // }, []);

  return <div className="App" ref={p5ContainerRef} />;
};
