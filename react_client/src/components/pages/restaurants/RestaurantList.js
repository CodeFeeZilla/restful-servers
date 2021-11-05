import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { fetchRestaurants } from "../../../redux/actions/restaurant";
import List from "../../List";

class RestaurantList extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div className="ui container">
        <Grid stretched relaxed="very" padded>
          <Grid.Row>
            <div className="ui center aligned container">
              <h2>Restaurants</h2>
            </div>
          </Grid.Row>
          <Grid.Row columns={1}>
            <List items={this.props.restaurants}></List>
          </Grid.Row>
        </Grid>
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
