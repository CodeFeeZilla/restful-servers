import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteRestaurant } from "./../redux/actions/restaurant";

function DeleteModal({ item, deleteRestaurant }) {
  const [open, setOpen] = React.useState(false);

  const onDeleteClick = () => {
    deleteRestaurant(item.id);
    setOpen(false);
  };

  if (!item) return null;

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="red">
          Delete
        </Button>
      }
    >
      <Modal.Header>Delete Restaurant: {item.name}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={item.image} wrapped />
        <Modal.Description>
          {/* <Header>{item.name}</Header> */}
          <p>Are you sure you want to delete this restaurant?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="grey" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Confirm"
          basic
          labelPosition="right"
          icon="trash"
          onClick={onDeleteClick}
          negative
        />
      </Modal.Actions>
    </Modal>
  );
}

export default connect(null, { deleteRestaurant })(DeleteModal);
