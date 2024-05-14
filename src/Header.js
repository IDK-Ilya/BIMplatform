import React , {useState, useEffect}from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Подключаем AuthContext
import axios from 'axios';
import { useAccessibility } from './AccessibilityContext';

const Header = () => {
  const { user, logout, isAuthenticated, setUser } = useAuth(); // Используйте setUser, если он предоставлен вашим контекстом
  const navigate = useNavigate();
  const { isAccessible, toggleAccessibility } = useAccessibility();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Перенаправляем на страницу входа после выхода
  };

  return (
    <Navbar bg={isAccessible ? "ligth" : "dark"} variant={isAccessible ? "light" : "dark"} expand="lg" className='custom-container'>
            <Container>
                <Row className="flex-nowrap w-100">
                    <Col xs={2} className='custom-brand'>
                        <Navbar.Brand href="/">КОС ИГЭУ</Navbar.Brand>
                    </Col>
                    <Col s={7} className='custom-nav'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                            <NavDropdown title="Студентам" id="basic-nav-dropdown-students">
                              <NavDropdown.Item href="#action/3.1">Расписание</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Успеваемость</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Финансовые вопросы</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">Другие услуги</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Преподавателям" id="basic-nav-dropdown-teachers">
                              <NavDropdown.Item href="#action/3.1">Курсы</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Методические материалы</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Научная работа</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">Администрирование</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#campus">О кампусе</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs={2}>
                    <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label={isAccessible ? "Standard View" : "Версия для слабовидящих"}
                            checked={isAccessible}
                            onChange={toggleAccessibility}
                            className="me-2 align-self-center toogleT"
                        />
                    </Col>
                    <Col xs={3} className='custom-buttons'>
                        
                        {isAuthenticated ? (
                        <div className="d-flex justify-content-end">
                          <span className="text-white align-self-center mr-3">{user ? user.data : 'Загрузка...'}</span>
                          <Button variant="outline-light" onClick={handleLogout}>Выход</Button>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-end">
                          <Link to="/login"><Button variant="outline-light" className="me-2">Вход</Button></Link>
                          <Link to="/register"><Button variant="primary">Регистрация</Button></Link>
                        </div>
                      )}
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;