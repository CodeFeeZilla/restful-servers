import React from "react";
import { Button, Modal } from "semantic-ui-react";

function GenericModal({ item, handleDelete, label, urlParams }) {
  const [open, setOpen] = React.useState(false);
  const { title, name } = item;

  const onDeleteClick = () => {
    if (urlParams) handleDelete(urlParams.id, urlParams.menuId, item.id);
    else handleDelete(item.id);
    setOpen(false);
  };

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
