import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./index.scoped.sass";

function Navbar({ setSelectedNav }) {
  const [hideNavbar, setHideNavbar] = useState(false);
  let { pathname } = useLocation();
  let history = useHistory();

  useEffect(() => setSelectedNav(null), [pathname, setSelectedNav]);
  useEffect(() => setHideNavbar(false), [pathname, setHideNavbar]);

  const navigate = (navigateTo) => {
    if (navigateTo === "/") setHideNavbar(true);
    else setHideNavbar(false);
    setSelectedNav(navigateTo);
    setTimeout(() => history.push(navigateTo), 700);
  };

  return (
    <div className="outer-container">
      <div
        className={`${pathname === "/" && "isHidden"} ${
          hideNavbar ? "hide" : "show"
        } container`}
      >
        <img src={require("../../assets/imgs/TR.png").default} alt="T.R." />
        <div className="inner-container">
          <p className="nav-item" onClick={() => navigate("/")}>
            Home
          </p>
          <p className="nav-item" onClick={() => navigate("/biography")}>
            Biography
          </p>
          <p className="nav-item" onClick={() => navigate("/timeline")}>
            Timeline
          </p>
          <p className="nav-item" onClick={() => navigate("/books")}>
            Books
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
