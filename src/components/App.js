import React from "react";
import Search from "../containers/Search";
import News from "../containers/News";
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <Search user="" />
    <Switch>
      <Route path="/" exact component={News} />
      <Route path="/Politica" exact component={News} />
      <Route path="/Internacionales" component={News} />
      <Route path="/Tecnologia" component={News} />
      <Route path="/Espectaculos" component={News} />
      <Route path="/Deportes" component={News} />
      <Route path="/Diseno" component={News} />
    </Switch>
  </div>
);

export default App;
