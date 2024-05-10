import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from './AuthContext';

const WorkItem = ({ work, onDelete }) => (
  <Card className="m-2" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{work.title}</Card.Title>
      <Card.Text>{work.description}</Card.Text>
      <Button variant="danger" onClick={() => onDelete(work.id)}>Удалить</Button>
    </Card.Body>
  </Card>
);

const AddWorkForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newWork = { title, description };
    const response = await axios.post('https://your-api.com/works', newWork);
    onAdd(response.data);
    setTitle('');
    setDescription('');
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
        <Form.Label>Описание</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Описание работы"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Добавить работу</Button>
    </Form>
  );
};

const WorksDisplay = () => {
  const [works, setWorks] = useState([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchWorks = async () => {
      const response = await axios.get('https://your-api.com/works');
      setWorks(response.data);
    };
    fetchWorks();
  }, []);

  const handleAddWork = (work) => {
    setWorks([...works, work]);
  };

  const handleDeleteWork = async (id) => {
    await axios.delete(`https://your-api.com/works/${id}`);
    setWorks(works.filter(work => work.id !== id));
  };

  return (
    <Container>
      <h1>Добавленные работы</h1>
      <Row>
        {works.map((work) => (
          <Col key={work.id}>
            <WorkItem work={work} onDelete={handleDeleteWork} />
          </Col>
        ))}
      </Row>
      {isAuthenticated && <AddWorkForm onAdd={handleAddWork} />}
    </Container>
  );
};

export default WorksDisplay;
