import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form, Container, Row, Col, Modal } from 'react-bootstrap';
import { useAuth } from './AuthContext';

const WorkItem = ({ work }) => (
  <Card className="m-2 contBody" style={{ width: '18rem',  color: 'black', height:'250px' }}>
    <Card.Body className='colorTextCard'>
      <Card.Title>{work.title}</Card.Title>
      <Card.Text >{work.email}</Card.Text>
      <Card.Text>{work.description}</Card.Text>
    </Card.Body>
  </Card>
);

const AddWorkForm = ({ onAdd, onHide }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newWork = { title, description, email };
    const response = await axios.post('https://appmvp.onrender.com/add_works', newWork);
    onAdd(response.data);
    setTitle('');
    setDescription('');
    setEmail('');
    onHide();
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
        <Form.Label>Почта</Form.Label>
        <Form.Control
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Описание</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Описание работы"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Найти соавтора</Button>
    </Form>
  );
};

const WorksDisplay = () => {
  const [works, setWorks] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get('https://appmvp.onrender.com/get_works');
        if (Array.isArray(response.data)) {
          setWorks(response.data);
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

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Поиск соавторов</h1>
      {isAuthenticated && (
      <Button variant="secondary" style={{ display: 'block'}} onClick={() => setModalShow(true)}>Найти соавтора</Button>)}
      <pre></pre>
      <Row>
        {works.map((work) => (
          <Col key={work.id}>
            <WorkItem work={work} />
          </Col>
        ))}
      </Row>
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Найти соавтора</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddWorkForm onAdd={handleAddWork} onHide={() => setModalShow(false)} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default WorksDisplay;
