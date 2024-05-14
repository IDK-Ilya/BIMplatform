import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

import './RegPage.css'

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    telephone: '',
    password: '',
    is_active: true,
    is_superuser: false,
    is_verified: false,
    role_id: 1,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fetchUserData = () => {
    axios.post('https://appmvp.onrender.com/api/auth/register', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      navigate('/login'); // Redirect to login page after successful registration
    })
    .catch(error => {
      setError('Произошла ошибка при регистрации. Попробуйте другие данные.');
      console.error('Error posting data:', error.response ? error.response.data : error.message);
    });
  };

  return (
    <div className='centeredcontainer1'>
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={14}>
          <Card>
            <Card.Body>
              <Card.Title>Регистрация</Card.Title>
              <Form onSubmit={(event) => {
                event.preventDefault();
                fetchUserData();
              }}>
                <Form.Group className="mb-3">
                  <Form.Label>Имя:</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Почта:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Телефон:</Form.Label>
                  <Form.Control
                    type="text"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Пароль:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                {error && <Alert variant="danger">{error}</Alert>}
                <Button variant="primary" type="submit">Зарегистрироваться</Button>
              </Form>
              <div className="mt-4">
                <h5>Уже есть аккаунт? Войдите в него!</h5>
                <Link to="/login">
                <Button variant="secondary" as={Link} to="/login">Вход</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default RegisterPage;
