import { BrowserRouter, Route, Switch } from "react-router-dom";
import Biography from "./biography";
import Books from "./books";
import Main from "./home";
import Timeline from "./timeline";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/biography" component={Biography} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/books" component={Books} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
