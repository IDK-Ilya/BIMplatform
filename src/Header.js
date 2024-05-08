import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Подключаем AuthContext

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth(); // Используем isAuthenticated для проверки статуса аутентификации
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Перенаправляем на страницу входа после выхода
  };

  const fetchName = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://c0c4-62-33-49-119.ngrok-free.app/protected-route')
      .then(response => {
        console.log('Response data:', response.data);
      });
      
  }


  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='custom-container'>
      <Container>
        <Row className="flex-nowrap w-100">
          <Col xs={4} className='custom-brand'>
            <Navbar.Brand href="/">КОС ИГЭУ</Navbar.Brand>
          </Col>
          <Col xs={4} className='custom-nav'>
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
          <Col xs={4} className='custom-buttons'>
            {isAuthenticated ? (
              <div className="d-flex justify-content-end">
                <span className="text-white align-self-center mr-3">{user ? user.fullName : 'Загрузка...'}</span>
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
