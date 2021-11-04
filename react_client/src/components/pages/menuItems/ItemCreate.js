import React from "react";
import { connect } from "react-redux";

import ItemForm from "../../ItemForm";

import { createItem } from "../../../redux/actions/item";

class ItemCreate extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createItem(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div className="ui container">
        <h3>Enter Item Details</h3>
        <ItemForm
          onSubmit={this.onSubmit}
          selectLabel="Select Which Menu the Item Belongs To"
          selectFieldName="menu_id"
          options={this.props.options}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: Object.values(state.menus).map((menu) => {
      return {
        key: menu.id,
        label: menu.title,
        value: menu.id,
      };
    }),
  };
};

export default connect(mapStateToProps, { createItem })(ItemCreate);
