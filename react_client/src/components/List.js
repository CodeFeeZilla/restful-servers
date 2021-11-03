import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import DeleteModal from "./Modal";

const List = ({ items }) => {
  const renderedList = items.map((item) => {
    console.log(item);
    return (
      <Card key={item.id}>
        <Image src={item.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <div className="ui three buttons">
            <Button basic color="grey">
              View
            </Button>
            <Link
              to={`/restaurants/edit/${item.id}`}
              className="ui blue basic button"
            >
              Edit
            </Link>
            <DeleteModal item={item} />
          </div>
        </Card.Content>
      </Card>
    );
  });

  return (
    <Card.Group itemsPerRow="4" centered stackable>
      {renderedList}
    </Card.Group>
  );
};

export default List;
