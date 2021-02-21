import { useState, useEffect } from "react";
import "./topSection.scoped.sass";
import { animated, useSpring } from "react-spring";
import { FiArrowRightCircle } from "react-icons/fi";
import sideImages from "./staticData";
import TR from "../../../assets/imgs/tony-clap.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

function TopSection() {
  const [props, set]: any = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const onClickHander = () => console.log("jump to timeline");

  return (
    <div
      className="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <img className="center-img" src={TR} alt="tony robbins" />
      <div className="block-of-text">
        <h1>Tony Robbins' legacy</h1>
        <p className="about">
          Dolor architecto voluptate magni maxime quis ab. Fuga molestias ex cum
          quas blanditiis amet unde Assumenda aperiam totam sapiente ea itaque
          fugiat nam. Sapiente nobis autem quibusdam molestias quas, totam.
        </p>
        <div className="action" onClick={onClickHander}>
          Timeline
          <FiArrowRightCircle className="icon" />
        </div>
      </div>

      {sideImages.map((item, index) => (
        <SideImage
          key={item.image.toString()}
          index={index}
          props={props}
          image={item.image}
          styles={item.style}
          trans={item.trans}
        />
      ))}
    </div>
  );
}

const SideImage = ({ props, image, styles, trans, index }) => {
  const [transitionReady, setTransitionReady] = useState(false);
  const animDelay = `${500 * index}ms`;

  const transitionOpacity = {
    opacity: transitionReady ? 1 : 0,
    transition: `opacity 3000ms ${animDelay}`,
  };

  useEffect(() => {
    setTimeout(() => {
      setTransitionReady(true);
    }, 2000);
  }, []);

  return (
    <animated.div
      style={{
        transform: props.xy.interpolate(trans),
        ...styles,
        ...transitionOpacity,
      }}
      className="h"
    >
      <img className="side-img" src={image} alt="tony robbins" />
    </animated.div>
  );
};

export default TopSection;
