import React from "react";
import { connect } from "react-redux";
import { Card, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GenericModal from "../../GenericModal";

import colors from "../../../colorsArray";

import { fetchItems, deleteItem } from "../../../redux/actions/item";

class MenuList extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params);
    const { id, menuId } = this.props.match.params;
    this.props.fetchItems(id, menuId);
  }

  renderList = () => {
    return this.props.items.map((item) => {
      let randNum = Math.floor(Math.random() * colors.length);

      if (!item) return null;

      return (
        <Card color={colors[randNum]} key={item.id}>
          <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <Card.Meta>£{item.price}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui three buttons">
              <Link
                to={`/restaurants/${this.props.match.params.id}/menus/${this.props.match.params.menuId}/menu-items/${item.id}/edit`}
                className="ui blue basic button"
              >
                Edit
              </Link>
              <GenericModal
                handleDelete={this.props.deleteItem}
                label="Menu Item"
                item={item}
                urlParams={this.props.match.params}
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
              <h2 className="ui header">Items on {this.props.title}</h2>
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
    title: state.menus[ownProps.match.params.menuId].title,
    items: Object.values(state.items),
  };
};

export default connect(mapStateToProps, { fetchItems, deleteItem })(MenuList);
