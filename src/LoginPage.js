import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Ensure this path is correct
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Make sure useAuth is providing 'login'

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const params = new URLSearchParams(formData).toString();
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/login?${params}`);
      console.log(response.data[0]);
      
      if (response.data) {
        login(response.data); // Pass the response data to login
        navigate('/');
      } else {
        setError('Неверный логин или пароль');
      }
    } catch (error) {
      setError('Неверный логин или пароль');
      console.error('Error posting data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='centeredcontainer'> 
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Вход</Card.Title>
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="username">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control type="email" name="username" value={formData.username} onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange} />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-3">Войти</Button>
                </Form>
                {error && <p className="text-danger mt-3">{error}</p>}
                <div className="mt-4">
                  <h5>Еще нет аккаунта? Создайте его!</h5>
                  <Button variant="secondary" as={Link} to="/register" className="text-white">Регистрация</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
