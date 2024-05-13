import React from 'react';
import { Modal, Button, Col, Row, Card, Container } from 'react-bootstrap';


import "./modal1.css";
import img1 from "./коворкинг 1.jpeg";
import img2 from "./коворкинг 1-1.jpeg";
import img3 from "./коворкинг 1-2.jpeg";

const Modal4 = ({ show, onHide }) => {

  const days = [
    { day: 'ПН', hours: '08:00 - 21:00' },
    { day: 'ВТ', hours: '08:00 - 21:00' },
    { day: 'СР', hours: '08:00 - 21:00' },
    { day: 'ЧТ', hours: '08:00 - 21:00' },
    { day: 'ПТ', hours: '08:00 - 21:00' },
    { day: 'СБ', hours: '08:00 - 21:00' },
    { day: 'ВС', hours: 'Выходной' }
  ];

  return (
    <div >

      
    <Modal show={show} onHide={onHide}  centered  size ='xl'>
      <Modal.Header closeButton className='openCardStyle'>
        <h4 style={{fontSize:'35px', fontWeight:'bold'}}>Коворкинг</h4> 
      </Modal.Header>
      <Modal.Body>
       <Row>
        <Col xs={5}>
          <img src={img1}  className="cardImg1"  width="100%"/>
          <pre></pre>
          <h2 className="CoworkTextSyle1">проспект Ленина, 21с1</h2>
        </Col>
        <Col xs={3}>
        <div>
           <h3 style={{ fontWeight: 'bold', textAlign: ' center',  fontSize: '23px', marginTop:'-5px' }}>График работы:</h3>
        </div>
        <Container>
          {days.map((item, index) => (
            <Row key={index} className="mb-2">
              <Col xs={4} className="schedule-day">
                {item.day}
              </Col>
              <Col xs={8} className="schedule-hours">
                {item.hours}
              
              </Col>
            </Row>
          ))}
        </Container>
       

        </Col>
        <Col xs={3}>
          <h3 style={{fontWeight:'bold', fontSize: '23px',marginTop:'-5px'}}> Вместимость: <span  style={{float:'right', marginLeft:'1px', } }></span>30 человек</h3>
          <pre></pre>
          <h3 style={{fontWeight:'bold',  fontSize: '23px'}}> Оснащение</h3>
          <p style = {{fontSize:'23px'}}>Столы, стулья, пуфы, диваны</p>
        </Col>
       </Row>
       <Row  >
      <pre> </pre>
       <h2 className="CoworkTextSyle2">Фотографии</h2>
       <Col xs = {3}><img className="cardImg2" src={img2}/></Col>
       <Col xs = {3}><img  className="cardImg2"src={img3}/></Col>
    
 
        
       </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};


export default Modal4;
