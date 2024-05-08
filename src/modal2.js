import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modal2 = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header >
        <Modal.Title>Карточка зала</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>   2 </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal2;
