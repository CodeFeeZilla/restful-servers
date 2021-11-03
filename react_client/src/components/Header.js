import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class MenuExampleHeader extends Component {
  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item header>Restaurant Directory</Menu.Item>
        <div className="right menu">
          <Link className="item" to="/restaurants/create">
            Add Restaurant
          </Link>
          <Menu.Item name="Add Menu" onClick={this.handleItemClick} />
          <Menu.Item name="Add Menu Item" onClick={this.handleItemClick} />
        </div>
      </Menu>
    );
  }
}
