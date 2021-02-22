const sideImages = [
  {
    image: require('../assets/imgs/tony-6.jpeg').default,
    trans: (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`,
    style: { position: "absolute", top: "30%", left: -10 },
  },
  {
    image: require('../assets/imgs/TR.jpg').default,
    trans: (x, y) => `translate3d(${x / 9}px,${y / 9}px,0)`,
    style: { position: "absolute", top: 18, right: "10%" },
  },
  {
    image: require('../assets/imgs/tony.jpg').default,
    trans: (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`,
    style: { position: "absolute", top: 0, left: "40%" },
  },
  {
    image: require('../assets/imgs/tony-2.jpg').default,
    trans: (x, y) => `translate3d(${x / 10.0}px,${y / 10.0}px,0)`,
    style: { position: "absolute", top: "60%", right: "10%" },
  },
  {
    image: require('../assets/imgs/tony-3.jpeg').default,
    trans: (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`,
    style: { position: "absolute", bottom: 0, right: "60%" },
  },
];

export default sideImages;
