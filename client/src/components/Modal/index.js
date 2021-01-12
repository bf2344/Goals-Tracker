import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const GoalCreationModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={props.showModal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Goal Saved</ModalHeader>
        <ModalBody>
          YOUR GOAL HAS BEEN SUCCESSFULLY SAVED
        </ModalBody>
      </Modal>
    </div>
  );
}

export default GoalCreationModal;