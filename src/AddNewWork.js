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
      {<a href={`http://127.0.0.1:8000/download_all`} target="_blank" rel="noopener noreferrer">Просмотреть работу</a>}
      
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
    formData.append('file', file);  // Добавляем только файл, так как другие данные идут в URL
    
    // Создаем URL с параметрами
    const url = `http://127.0.0.1:8000/upload?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
  
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(formData);
      onAdd(response.data); // Добавляем работу в список на фронтенде
      setTitle('');
      setDescription('');
      setFile(null);
      onClose(); // Закрываем модальное окно
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      console.log(formData);
    }
  };
  
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Название работы</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите название не более 35 символов"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={30}
        />
      </Form.Group>
      <Form.Group>
    <Form.Label>Описание работы</Form.Label>
    <Form.Control
      as="textarea"
      rows={3}
      placeholder="Введите описание не более 80 символов"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      maxLength={100}  // Добавление ограничения на максимальное количество символов
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
        const response = await axios.get('http://127.0.0.1:8000/download_all');
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
