import React from "react";
import { connect } from "react-redux";

import RestaurantForm from "../../RestaurantForm";

import { createRestaurant } from "../../../redux/actions/restaurant";

class RestaurantCreate extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createRestaurant(formValues);
  };

  render() {
    return (
      <div className="ui container">
        <h3>Enter Restaurant Details</h3>
        <RestaurantForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createRestaurant })(RestaurantCreate);
