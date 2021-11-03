import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import RestaurantList from "./components/pages/restaurants/RestaurantList";
import RestaurantCreate from "./components/pages/restaurants/RestaurantCreate";
import RestaurantEdit from "./components/pages/restaurants/RestaurantEdit";

import history from "./history";

import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={RestaurantList} />
          <Route
            path="/restaurants/create"
            exact
            component={RestaurantCreate}
          />
          <Route
            path="/restaurants/edit/:id"
            exact
            component={RestaurantEdit}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
