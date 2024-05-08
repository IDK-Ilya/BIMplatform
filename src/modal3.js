import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modal3 = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header >
        <Modal.Title>Карточка зала</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>   3 </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal3;
