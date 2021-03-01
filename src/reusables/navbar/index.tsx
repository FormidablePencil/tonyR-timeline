import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./index.scoped.sass";

function Navbar({ setSelectedNav, selectedNav }) {
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

  const NavItem = ({ text, navigateTo, selected }) => {
    const navItemSelected =
      navigateTo === selectedNav ||
      (navigateTo === pathname && navigateTo !== selectedNav);
    return (
      <p
        className={`nav-item ${selected && "selected"}`}
        onClick={() => navigate(navigateTo)}
      >
        {text}
      </p>
    );
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
          <NavItem
            text="Home"
            navigateTo="/"
            selected={
              selectedNav === "/" || (selectedNav === null && pathname === "/")
            }
          />
          <NavItem
            text="Biography"
            navigateTo="/biography"
            selected={
              selectedNav === "/biography" ||
              (selectedNav === null && pathname === "/biography")
            }
          />
          <NavItem
            text="Timeline"
            navigateTo="/timeline"
            selected={
              selectedNav === "/timeline" ||
              (selectedNav === null && pathname === "/timeline")
            }
          />
          <NavItem
            text="Books"
            navigateTo="/books"
            selected={
              selectedNav === "/books" ||
              (selectedNav === null && pathname === "/books")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
