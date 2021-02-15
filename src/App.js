import React from "react";
import { Switch, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars

import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
  <Switch>
     
    <Route exact path="/" >
        <Home/>
    </Route>
    <Route exact path="/Starred" >
        <Starred/>
    </Route>
    <Route>
      <div><h1 ><center>Page Not Found</center></h1></div>
    </Route>
    
  </Switch>
  );
};

export default App;
