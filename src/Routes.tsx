import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./main";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
