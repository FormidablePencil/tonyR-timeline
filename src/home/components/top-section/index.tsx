import { useState, useEffect } from "react";
import "./index.scoped.sass";
import { animated, useSpring } from "react-spring";
import { FiArrowRightCircle } from "react-icons/fi";
import sideImages from "../../../staticData/floatingImgs";
import { animateScroll as scroll } from "react-scroll";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

function TopSection({ title, paragraph, image }) {
  const [props, set]: any = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 250, friction: 140 },
  }));

  const onClickHander = () =>
    scroll.scrollToBottom({
      duration: 6000,
      smooth: "easeOutCubic",
    });

  return (
    <div
      className="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <img className="center-img" src={image} alt="tony robbins" />
      <div className="block-of-text">
        <h1>{title}</h1>
        <p className="about">{paragraph}</p>
        <div className="action" onClick={onClickHander}>
          Explore
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
