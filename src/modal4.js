import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modal4 = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header >
        <Modal.Title>Карточка зала</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>  4  </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal4;