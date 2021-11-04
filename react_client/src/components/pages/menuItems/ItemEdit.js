import React from "react";
import { connect } from "react-redux";

import ItemForm from "../../ItemForm";

import { editItem } from "../../../redux/actions/item";

class ItemEdit extends React.Component {
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

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items[ownProps.match.params.menuId],
    options: Object.values(state.menus).map((menu) => {
      return {
        key: menu.id,
        label: menu.title,
        value: menu.id,
      };
    }),
  };
};

export default connect(mapStateToProps, { editItem })(ItemCreate);
