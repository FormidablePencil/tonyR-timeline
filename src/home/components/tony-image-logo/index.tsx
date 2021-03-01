import "./index.scoped.sass";

function TonyImageLogo({ selectedNav }) {
  return (
    <img
      className={`${
        selectedNav !== "/" && selectedNav !== null
          ? "que-fade-anim"
          : "que-fadein-anim"
      }`}
      src={require("../../../assets/imgs/TR.png").default}
      alt="T.R."
    />
  );
}

export default TonyImageLogo;
