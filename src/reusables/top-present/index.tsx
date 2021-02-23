import "./index.scoped.sass";

function TopPresent({ title, image }) {
  return (
    <div className="outer-container">
      <div style={{ backgroundImage: `url(${image})` }} className="container">
      </div>
        <h1>{title}</h1>
    </div>
  );
}

export default TopPresent;
