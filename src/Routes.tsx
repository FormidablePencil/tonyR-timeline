import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Biography from "./biography";
import Books from "./books";
import Home from "./home";
import TonyImageLogo from "./home/components/tony-image-logo";
import FadeAnim from "./reusables/fade-anim";
import Navbar from "./reusables/navbar";
import ScrollToTop from "./reusables/scroll-to-top";
import Timeline from "./timeline";

function Routes() {
  const [selectedNav, setSelectedNav] = useState(null);
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" ? (
        <Navbar setSelectedNav={setSelectedNav} />
      ) : (
        <TonyImageLogo selectedNav={selectedNav} />
      )}
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path="/"
          render={(props: any) => (
            <Home {...props} setSelectedNav={setSelectedNav} />
          )}
        />
        <Route
          path="/biography"
          render={(props: any) => (
            <FadeAnim
              fadeOut={
                selectedNav === "/biography" ||
                (selectedNav === null && pathname === "/biography")
                  ? false
                  : true
              }
            >
              <Biography {...props} />
            </FadeAnim>
          )}
        />
        <Route
          path="/timeline"
          render={(props: any) => (
            <FadeAnim
              fadeOut={
                selectedNav === "/timeline" ||
                (selectedNav === null && pathname === "/timeline")
                  ? false
                  : true
              }
            >
              <Timeline {...props} />
            </FadeAnim>
          )}
        />
        <Route
          path="/books"
          render={(props: any) => (
            <FadeAnim
              fadeOut={
                selectedNav === "/books" ||
                (selectedNav === null && pathname === "/books")
                  ? false
                  : true
              }
            >
              <Books {...props} />
            </FadeAnim>
          )}
        />
      </Switch>
    </div>
  );
}

export default Routes;
