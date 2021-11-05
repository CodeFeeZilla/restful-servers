import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import RestaurantList from "./components/pages/restaurants/RestaurantList";
import RestaurantCreate from "./components/pages/restaurants/RestaurantCreate";
import RestaurantEdit from "./components/pages/restaurants/RestaurantEdit";

import MenuList from "./components/pages/menus/MenuList";
import MenuCreate from "./components/pages/menus/MenuCreate";
import MenuEdit from "./components/pages/menus/MenuEdit";

import ItemList from "./components/pages/menuItems/ItemList";
import ItemCreate from "./components/pages/menuItems/ItemCreate";
import ItemEdit from "./components/pages/menuItems/ItemEdit";

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
          <Route path="/restaurants/:id/menus" exact component={MenuList} />
          <Route
            path="/restaurants/:id/menus/create"
            exact
            component={MenuCreate}
          />
          <Route
            path="/restaurants/:id/menus/:menuId/edit"
            exact
            component={MenuEdit}
          />
          <Route
            path="/restaurants/:id/menus/:menuId"
            exact
            component={ItemList}
          />
          <Route
            path="/restaurants/:id/menus/:menuId/menu-items/create"
            exact
            component={ItemCreate}
          />
          <Route
            path="/restaurants/:id/menus/:menuId/menu-items/:itemId/edit"
            exact
            component={ItemEdit}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
