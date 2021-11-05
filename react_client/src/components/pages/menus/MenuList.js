import React from "react";
import { connect } from "react-redux";
import { Card, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GenericModal from "../../GenericModal";

import colors from "../../../colorsArray";

import { fetchMenus, deleteMenu } from "../../../redux/actions/menu";

class MenuList extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params);
    this.props.fetchMenus(this.props.match.params.id);
  }

  renderList = () => {
    return this.props.menus.map((menu) => {
      let randNum = Math.floor(Math.random() * colors.length);

      if (!menu) return null;

      return (
        <Card color={colors[randNum]} key={menu.id}>
          <Card.Content>
            <Card.Header>{menu.title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className="ui three buttons">
              <Link
                to={`/restaurants/${this.props.match.params.id}/menus/${menu.id}`}
                className="ui grey basic button"
              >
                View
              </Link>
              <Link
                to={`/restaurants/${this.props.match.params.id}/menus/${menu.id}/edit`}
                className="ui blue basic button"
              >
                Edit
              </Link>
              <GenericModal
                handleDelete={this.props.deleteMenu}
                label="Menu"
                item={menu}
              />
            </div>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    return (
      <div className="ui container">
        <Grid stretched relaxed="very" padded>
          <Grid.Row>
            <div className="ui center aligned container">
              <h2 className="header">{this.props.name} Menus</h2>
            </div>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Card.Group itemsPerRow="4" centered stackable>
              {this.renderList()}
            </Card.Group>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.restaurants[ownProps.match.params.id].name,
    menus: Object.values(state.menus),
  };
};

export default connect(mapStateToProps, { fetchMenus, deleteMenu })(MenuList);
