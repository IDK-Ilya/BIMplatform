import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form, Container, Row, Col, Modal } from 'react-bootstrap';
import { useAuth } from './AuthContext';

import './CustimStyleWorks.css';

const WorkItem = ({ work, onDelete }) => (
  <Card className="m-2 customStyle" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{work.title}</Card.Title>
      <Card.Text>{work.description}</Card.Text>
      {work.filePath && <a href={`http://127.0.0.1:8000/files/${work.filePath}`} target="_blank" rel="noopener noreferrer">View File</a>}
      
    </Card.Body>
  </Card>
);

const AddWorkForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    const response = await axios.post('http://127.0.0.1:8000/add_works', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    onAdd(response.data);
    setTitle('');
    setDescription('');
    setFile(null);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Название работы</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Описание работы</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Введите описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Прикрепить файл</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
      <div><Button  type="submit" > Добавить работу</Button>
   </div> </Form>
  );
};

const WorksDisplay = () => {
  const [works, setWorks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get_works');
        if (Array.isArray(response.data)) {
          setWorks(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };
    fetchWorks();
  }, []);

  const handleAddWork = (work) => {
    setWorks([...works, work]);
  };

  const handleDeleteWork = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/works/${id}`);
    setWorks(works.filter(work => work.id !== id));
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className='contAddWork'>
      <h1>Добавленные работы</h1>
      {isAuthenticated && (
        <Button variant="primary" onClick={handleShowModal} style={{backgroundColor:'#87A7C4', borderColor:'#87A7C4', marginTop:'-325px', marginLeft:'575px', fontSize: '18px'}}>Добавить работу</Button>
      )}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление работы</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddWorkForm onAdd={handleAddWork} onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
      <Row>
        {Array.isArray(works) && works.map((work) => (
          <Col key={work.id}>
            <WorkItem work={work} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WorksDisplay;
