import React, { useState } from 'react';
import { Row, Col, Button, Card,Toast  } from 'react-bootstrap';
import imgIspu from './imgIspu.png';
import './Events.css';
import RequestEvent from './request/RequestEvent';

import  RegistrationModal from './request/RegistrationOnEventModal'

function Events() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  
  const handleOpenModal = (eventId) => {
    setSelectedEventId(eventId);
    setModalShow(true);
  };
  
  const handleCloseModal = () => {
    setModalShow(false);
  };
  const event = {
    id: "event1",
    name: "Профком обучающихся ИГЭУ",
    time: "26 апреля, 16:00",
    location: "малый зал"
  };


  const handleOpenModal1 = (eventId) => {
    setSelectedEventId(eventId);
    setModalShow(true);
  };
  
  const handleCloseModal1 = () => {
    setModalShow(false);
  };
  const event1 = {
    id: "event1",
    name: "Профком обучающихся ИГЭУ",
    time: "26 апреля, 16:00",
    location: "малый зал"
  };
  
  
  
  return (
    <div className='eventBlock'> 
      <div className='eventTitle'><h1>Май 2024</h1></div>
      <pre></pre>
     
      <div>
      <Row>
      <Col xs={5}> 
        <div className='posCard '> 
          <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
              <Row>
                <Col xs={5}>
                  <img src={imgIspu} alt="" className='eventCardImg' />
                </Col>
                <Col xs={7}>
                  <div className='eventHeadContainer'>
                    <h2 className='eventHead'>{event.name}</h2>
                  </div>
                </Col>
              </Row>
              <pre></pre>
              <Row>
                <div className='eventBody '>
                  <h2>{event.time}</h2>
                  <h4>{event.location}</h4>
                </div>
              </Row>
            </Card.Text>
            <div className="btn-container1">
            <Button className='btnSettingEvents' onClick={() => handleOpenModal(event.id)}>Регистрация</Button>
          <RegistrationModal show={modalShow} onHide={handleCloseModal} eventId={selectedEventId} />
            </div>
          
          </Card.Body>
          </Card>
            </Col>
          </Row>
          </div>
 
        </Col>
        <Col xs ={5}>
       <div className='posCard '> 
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col xs={5}>
                <img src={imgIspu} alt="" className='eventCardImg' />
              </Col>
              <Col xs={7}>
                <div className='eventHeadContainer'>
                  <h2 className='eventHead'>{event.name}</h2>
                </div>
              </Col>
            </Row>
            <pre></pre>
            <Row>
              <div className='eventBody '>
                <h2>{event.time}</h2>
                <h4>{event.location}</h4>
              </div>
            </Row>
          </Card.Text>
          <div className="btn-container1">
          <Button className='btnSettingEvents' onClick={() => handleOpenModal1(event.id)}>Регистрация</Button>
        <RegistrationModal show={modalShow} onHide={handleCloseModal1} eventId={selectedEventId} />
          </div>
        
        </Card.Body>
      </Card>
      </Col>
      </Row>
      
      </div>
      </Col>
      </Row>
      </div>
 
    </div>
   
  );
}

export default Events;
