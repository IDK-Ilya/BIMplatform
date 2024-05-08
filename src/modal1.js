import React from 'react';
import { Modal, Button, Col, Row, Card, Container } from 'react-bootstrap';
import img from "./student-img.jpg";

import "./modal1.css";

const Modal1 = ({ show, onHide }) => {

  const days = [
    { day: 'ПН', hours: '09:00 - 19:00' },
    { day: 'ВТ', hours: '09:00 - 19:00' },
    { day: 'СР', hours: '09:00 - 19:00' },
    { day: 'ЧТ', hours: '09:00 - 19:00' },
    { day: 'ПТ', hours: '09:00 - 19:00' },
    { day: 'СБ', hours: '10:00 - 21:00' },
    { day: 'ВС', hours: 'Выходной' }
  ];

  return (
    <div >

      
    <Modal show={show} onHide={onHide}  centered  size ='xl'>
      <Modal.Header closeButton className='openCardStyle'>
        <h4 style={{fontSize:'35px', fontWeight:'bold'}}>Малый зал</h4> 
      </Modal.Header>
      <Modal.Body>
       <Row>
        <Col xs={5}>
          <img src={img}  className="cardImg1"  width="100%"/>
          <pre></pre>
          <h2 className="CoworkTextSyle1">Корпус Б</h2>
          <h2 className="CoworkTextSyle2">аудитория <span className="CoworkTextSyle1" style={{float:'right', marginLeft:'5px'} }> 319а</span></h2>          
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
          <h3 style={{fontWeight:'bold', fontSize: '23px',marginTop:'-5px'}}> Вместимость: <span  style={{float:'right', marginLeft:'1px', } }></span>15 мест</h3>
          <pre></pre>
          <h3 style={{fontWeight:'bold',  fontSize: '23px'}}> Оснащение</h3>
          <p style = {{fontSize:'23px'}}>Компьютер, проектор, флипчарт, доска, пуфики, столы, стулья</p>
        </Col>
       </Row>
       <Row  >
      <pre> </pre>
       <h2 className="CoworkTextSyle2">Фотографии аудитории</h2>
       <Col ><img className="cardImg2" src={img}/></Col>
       <Col><img  className="cardImg2"src={img}/></Col>
       <Col><img className="cardImg2"src={img}/></Col>
       <Col ><img className="cardImg2" src={img}/></Col>
 
        
       </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default Modal1;
