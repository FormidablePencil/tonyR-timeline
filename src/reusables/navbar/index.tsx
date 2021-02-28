import { Link, useLocation } from "react-router-dom";
import "./index.scoped.sass";

function Navbar() {
  let location = useLocation();

  return (
    <div className="outer-container">
      <div className={`${location.pathname === "/" && "isHidden"} container`}>
        <div className="inner-container">
          <Link className="nav-item" to={"/"}>
            <p>Home</p>
          </Link>
          <Link className="nav-item" to={"/biography"}>
            <p>biography</p>
          </Link>
          <Link className="nav-item" to={"/timeline"}>
            <p>timeline</p>
          </Link>
          <Link className="nav-item" to={"/books"}>
            <p>books</p>
          </Link>
        </div>
      </div>
      <img src={require("../../assets/imgs/TR.png").default} alt="T.R." />
    </div>
  );
}

export default Navbar;
