import React from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../../../redux/actions/restaurant";
import List from "../../List";

class RestaurantList extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div className="ui container">
        <List items={this.props.restaurants}></List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: Object.values(state.restaurants),
  };
};

export default connect(mapStateToProps, { fetchRestaurants })(RestaurantList);
