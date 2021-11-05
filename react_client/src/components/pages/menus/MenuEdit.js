import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import MenuForm from "../../MenuForm";

import { editMenu, fetchMenu } from "../../../redux/actions/menu";

class MenuCreate extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    const { id, menuId } = this.props.match.params;
    this.props.editMenu(id, menuId, formValues);
  };

  render() {
    return (
      <div className="ui container">
        <h3>Enter Menu Details</h3>
        <MenuForm
          initialValues={_.pick(this.props.menu, "title", "restaurant_id")}
          onSubmit={this.onSubmit}
          selectLabel="Select Which Restaurant Menu Belongs To"
          selectFieldName="restaurant_id"
          options={this.props.options}
          id={this.props.match.params.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.menus[ownProps.match.params.menuId],
    options: Object.values(state.restaurants).map((restaurant) => {
      return {
        key: restaurant.id,
        label: restaurant.name,
        value: restaurant.id,
      };
    }),
  };
};

export default connect(mapStateToProps, { editMenu, fetchMenu })(MenuCreate);
