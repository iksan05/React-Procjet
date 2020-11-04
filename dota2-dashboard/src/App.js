import React, { Fragment } from "react";
import Teams from "./Teams";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Team from "./Team";
import Nav from "./Nav";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
        <Switch>
          {/*  
            Path : /teams
            Child Component : Teams
          */}
          <Route exact path="/teams" component={Teams} />
          {/*  
            Path : /team
            Path Param: id -> Required
            Child Component : Team
          */}
          <Route exact path="/team/:id" component={Team} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
