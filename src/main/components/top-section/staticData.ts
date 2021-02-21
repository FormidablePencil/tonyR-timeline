import TR from "../../../assets/imgs/tony-6.jpeg";
import TR2 from "../../../assets/imgs/TR.jpeg";
import TR3 from "../../../assets/imgs/tony.jpeg";
import TR4 from "../../../assets/imgs/tony-2.jpeg";
import TR5 from "../../../assets/imgs/tony-3.jpeg";

const sideImages = [
  {
    image: TR,
    trans: (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`,
    style: { position: "absolute", top: "30%", left: -10 },
  },
  {
    image: TR2,
    trans: (x, y) => `translate3d(${x / 9}px,${y / 9}px,0)`,
    style: { position: "absolute", top: 18, right: "10%" },
  },
  {
    image: TR3,
    trans: (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`,
    style: { position: "absolute", top: 0, left: "40%" },
  },
  {
    image: TR4,
    trans: (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`,
    style: { position: "absolute", top: "60%", right: 0 },
  },
  {
    image: TR5,
    trans: (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`,
    style: { position: "absolute", bottom: 0, right: "60%" },
  },
];

export default sideImages;
