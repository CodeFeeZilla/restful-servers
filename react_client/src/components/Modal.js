import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function DeleteModal({ item }) {
  const [open, setOpen] = React.useState(false);

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
          onClick={() => setOpen(false)}
          negative
        />
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteModal;
