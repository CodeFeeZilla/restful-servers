import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import RestaurantForm from "../../RestaurantForm";

import {
  fetchRestaurant,
  editRestaurant,
} from "../../../redux/actions/restaurant";

class RestaurantEdit extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editRestaurant(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit Restaurant Details</h3>
        <RestaurantForm
          initialValues={_.pick(this.props.restaurant, "name", "image")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchRestaurant, editRestaurant })(
  RestaurantEdit
);
