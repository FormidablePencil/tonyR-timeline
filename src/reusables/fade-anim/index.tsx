import "./index.scoped.sass";

function FadeAnim({ children, fadeOut }) {
  return <div className={`${fadeOut && "fade-out"}`}>{children}</div>;
}

export default FadeAnim;
