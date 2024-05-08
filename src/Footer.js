import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        < Row className="justify-content-center ">
          <Col md={4} className="footer-col">
            <h5>О платформе</h5>
            <ul className="list-unstyled">
              <li><a href="#документы">Документы</a></li>
              <li><a href="#партнеры">Партнеры</a></li>
              <li><a href="#образование">Образование</a></li>
              <li><a href="#проекты">Проекты</a></li>
              <li><a href="#мерч">Мерч</a></li>
              <li><a href="#связь">Обратная связь</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Социальные сети</h5>
            <ul className="list-unstyled">
              <li><a href="#блог">Блог Ютуб</a></li>
              <li><a href="#группа">Группа ВК</a></li>
              <li><a href="#сайт">Сайт партнеров</a></li>
              <li><a href="#личный">Личный бренд</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Контакты</h5>
            <ul className="list-unstyled">
              <li><a href="#телеграм">Телеграм</a></li>
              <li><a href="#вконтакте">Вконтакте</a></li>
              <li><a href="#твиттер">Твиттер</a></li>
              <li><a href="#инстаграмм">Инстаграмм</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center footer-top-border">
            <div className="footer-text-row">
              <p className="footer-text footer-policy">Политика конфиденциальности</p>
              <p className="footer-text">©2024 КОС ИГЭУ - Все права защищены</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
