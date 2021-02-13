import React from "react";
import { Switch, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Navs from "./components/Navs"
import Home from "./components/pages/Home";
import Starred from "./components/pages/Starred";

function App() {
  return (<div>
    <Navs/>
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
  </div>
  );
}

export default App;
