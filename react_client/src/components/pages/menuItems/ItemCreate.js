import React from "react";
import { connect } from "react-redux";

import ItemForm from "../../ItemForm";

import { createItem } from "../../../redux/actions/item";

class ItemCreate extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    const { id, menuId } = this.props.match.params;
    this.props.createItem(id, menuId, formValues);
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
          menuId={this.props.match.params.menuId}
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
