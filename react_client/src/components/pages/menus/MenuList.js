import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GenericModal from "../../GenericModal";

import { fetchMenus, deleteMenu } from "../../../redux/actions/menu";

class MenuList extends React.Component {
  componentDidMount() {
    this.props.fetchMenus(this.props.match.params.id);
  }

  renderList = () => {
    return this.props.menus.map((menu) => {
      if (!menu) return null;

      return (
        <Card key={menu.id}>
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
      <Card.Group itemsPerRow="4" centered stackable>
        {this.renderList()}
      </Card.Group>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menus: Object.values(state.menus),
  };
};

export default connect(mapStateToProps, { fetchMenus, deleteMenu })(MenuList);
