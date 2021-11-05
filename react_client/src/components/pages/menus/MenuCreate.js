import React from "react";
import { connect } from "react-redux";

import MenuForm from "../../MenuForm";

import { createMenu } from "../../../redux/actions/menu";

class MenuCreate extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createMenu(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div className="ui container">
        <h3>Enter Menu Details</h3>
        <MenuForm
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

const mapStateToProps = (state) => {
  return {
    options: Object.values(state.restaurants).map((restaurant) => {
      return {
        key: restaurant.id,
        label: restaurant.name,
        value: restaurant.id,
      };
    }),
  };
};

export default connect(mapStateToProps, { createMenu })(MenuCreate);
