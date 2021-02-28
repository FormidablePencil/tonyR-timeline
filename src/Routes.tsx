import { BrowserRouter, Route, Switch } from "react-router-dom";
import Biography from "./biography";
import Books from "./books";
import Main from "./home";
import Navbar from "./reusables/navbar";
import Timeline from "./timeline";
import ScrollToTop from "./reusables/scroll-to-top";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/biography" component={Biography} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/books" component={Books} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
