import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container,Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useAccessibility } from './AccessibilityContext';
import './HeaderAcc.css'; // Ensure this is correctly imported

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { isAccessible, toggleAccessibility } = useAccessibility();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='addddd'>
    <Navbar bg={isAccessible ? "ligth" : "dark"} variant={isAccessible ? "light" : "dark"} expand="lg" className='custom-container'>
    <Container>
        <Row className="flex-nowrap w-100">
            <Col xs={2} >
                <div ><Navbar.Brand  className='custom-brand' href="/">КОС ИГЭУ</Navbar.Brand></div>
            </Col>
            <Col xs={6} >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  className='navStyle'>
                    <Nav>
                    <NavDropdown title="Студентам" id="basic-nav-dropdown-students"  className='custom-nav1'>
                      <NavDropdown.Item href="#action/3.1">Расписание</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Успеваемость</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Финансовые вопросы</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Другие услуги</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Преподавателям" id="basic-nav-dropdown-teachers" className='custom-nav1'>
                      <NavDropdown.Item href="#action/3.1">Курсы</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Методические материалы</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Научная работа</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Администрирование</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#campus" className='custom-nav1'>О кампусе</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Col>
            <Col xs={3} className='toogleA'>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Версия для слабовидящих"
              checked={isAccessible}
              onChange={toggleAccessibility}
              className="accessibility-switch"
            />

            </Col>
            <Col xs={2} className='custom-buttons'>
                
                {isAuthenticated ? (
                <div className="d-flex justify-content-end">
                  <span className="text-white align-self-center mr-3 ">{user ? user.data : 'Загрузка...'}</span>
                  <Button variant="outline-light" onClick={handleLogout}>Выход</Button>
                </div>
              ) : (
                <div className="d-flex justify-content-end">
                  <Link to="/login"><Button variant="outline-light" className="me-2 newBtnStyle">Вход</Button></Link>
                  <Link to="/register"><Button variant="primary" className=" newBtnStyle">Регистрация</Button></Link>
                </div>
              )}
            </Col>
        </Row>
    </Container>
</Navbar>
</div>  
  );
};

export default Header;
