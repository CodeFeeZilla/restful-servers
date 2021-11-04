import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteRestaurant } from "./../redux/actions/restaurant";

function GenericModal({ item, deleteRestaurant, handleDelete, label }) {
  const [open, setOpen] = React.useState(false);
  const { title, name } = item;

  const onDeleteClick = () => {
    handleDelete(item.id);
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
      <Modal.Header>
        Delete {label}: {title || name}
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Are you sure you want to delete this {label}?</p>
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

export default GenericModal;
