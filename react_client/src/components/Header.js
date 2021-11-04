import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import history from "../history";

class MenuExampleHeader extends Component {
  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item header>
          <Link className="ui link" to="/">
            Restaurant Directory
          </Link>
        </Menu.Item>
        <div className="right menu">
          {this.props.selected ? null : (
            <Link className="item" to="/restaurants/create">
              Add Restaurant
            </Link>
          )}
          {this.props.selected ? (
            this.props.selected.type === "menus" ? (
              <Link
                className="item"
                to={`/restaurants/${this.props.selected.id}/menus/create`}
              >
                Add Menu
              </Link>
            ) : null
          ) : null}
          {this.props.selected ? (
            this.props.selected.type === "items" ? (
              <Link
                className="item"
                to={`/menus/${this.props.selected.id}/menu-items/create`}
              >
                Add Item
              </Link>
            ) : null
          ) : null}
        </div>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
  };
};

export default connect(mapStateToProps)(MenuExampleHeader);
