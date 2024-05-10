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
    const response = await axios.post('http://127.0.0.1:8000/add_scienceWorks', newWork);
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
      try {
        console.log("Fetching works...");
        const response = await axios.get('http://127.0.0.1:8000/get_scienceWorks');
        //console.log("Works fetched:", response.data);
        if (Array.isArray(response.data)) {
          setWorks(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching works:", error);
        if (error.response) {
          // Запрос был сделан и сервер ответил статусом ошибки, который не в диапазоне 2xx
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        } else if (error.request) {
          // Запрос был сделан, но не было ответа
          console.error("No response received");
        } else {
          // Произошло что-то при настройке запроса, что вызвало ошибку
          console.error("Error message:", error.message);
        }
      }
      
    };
  
    fetchWorks();
  }, []);
  

  const handleAddWork = (work) => {
    setWorks([...works, work]);
  };

  const handleDeleteWork = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/scienceWorks/${id}`);
    setWorks(works.filter(work => work.id !== id));
  };

  return (
    <Container>
      <h1>Добавленные работы</h1>
      <Row>
        {Array.isArray(works) && works.map((work) => ( // Additional check before using map
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