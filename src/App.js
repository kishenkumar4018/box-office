import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (<Switch>
    <Route exact path="/" >
        This Is HomePage
    </Route>
    <Route exact path="/Starred" >
        This Is Starred
    </Route>
    <Route>
      <h1 ><center>Page Not Found</center></h1>
    </Route>

  </Switch>
  );
}

export default App;
