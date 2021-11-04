import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GenericModal from "../../GenericModal";

import { fetchItems, deleteItem } from "../../../redux/actions/item";

class MenuList extends React.Component {
  componentDidMount() {
    this.props.fetchItems(this.props.match.params.menuId);
  }

  renderList = () => {
    return this.props.items.map((item) => {
      if (!item) return null;

      return (
        <Card key={item.id}>
          <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <Card.Meta>£{item.price}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui three buttons">
              <Link
                to={`/restaurants/${this.props.match.params.id}/menus/${this.props.match.params.menuId}/${item.id}/edit`}
                className="ui blue basic button"
              >
                Edit
              </Link>
              <GenericModal
                handleDelete={this.props.deleteItem}
                label="Menu Item"
                item={item}
              />
            </div>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    return (
      <Card.Group itemsPerRow="4" centered stackable>
        {this.renderList()}
      </Card.Group>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: Object.values(state.items),
  };
};

export default connect(mapStateToProps, { fetchItems, deleteItem })(MenuList);
