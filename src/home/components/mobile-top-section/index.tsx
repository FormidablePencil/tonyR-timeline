import "./index.scoped.sass";

function MobileTopSection({ title, paragraph, image }) {
  return (
    <div className="container">
      <img className="center-img" src={image} alt="tony robbins" />
      <h1>{title}</h1>
      <p className="paragraph">{paragraph}</p>
    </div>
  );
}

export default MobileTopSection;
