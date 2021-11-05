import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import history from "../history";

const MenuExampleHeader = (props) => {
  console.log(history);
  return (
    <Menu pointing secondary>
      <Menu.Item header>
        <Link className="ui link" to="/">
          Restaurant Directory
        </Link>
      </Menu.Item>
      <div className="right menu">
        {props.selected ? null : (
          <Link className="ui green basic button" to="/restaurants/create">
            Add Restaurant
          </Link>
        )}
        {props.selected ? (
          props.selected.type === "menus" ? (
            <Link
              className="ui green basic button"
              to={`/restaurants/${props.selected.id}/menus/create`}
            >
              Add Menu
            </Link>
          ) : null
        ) : null}
        {props.selected ? (
          props.selected.type === "items" ? (
            <Link
              className="ui green basic button"
              to={`/restaurants/${props.selected.id}/menus/${props.selected.menuId}/menu-items/create`}
            >
              Add Item
            </Link>
          ) : null
        ) : null}
      </div>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
  };
};

export default connect(mapStateToProps)(MenuExampleHeader);
