import React, { useState } from 'react';
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import eventLogo from './лого 1.jpg';
import eventLogo2 from './лого 2.jpg';
import eventLogo3 from './лого 3.jpg';
import './Events.css';
import RegistrationModal from './request/RegistrationOnEventModal';

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
  
  const events = [
    {
      id: "event",
      name: "Q EVENT",
      time: "7 мая 2024 18:00",
      location: "Д-505",
      logo: eventLogo
    },
    {
      id: "event1",
      name: "БИМ",
      time: "8-15 мая 2024",
      location: "Гибридный формат",
      logo: eventLogo2
    },
    {
      id: "event2",
      name: "PowerQ",
      time: "23-26 августа 2024",
      location: "Рубское озеро",
      logo: eventLogo3
    }
  ];

  return (
    <div className='eventBlock '>
      <h1 className='eventTitle'>Май 2024</h1>
      <Container>
        <Row>
          {events.map((event) => (
            <Col xs={12} md={4} key={event.id}>
              <Card className='posCard' style={{ width: '100%' }}>
                <Card.Body>
                  <Row noGutters>
                    <Col xs={5}>
                      <img src={event.logo} alt="" className='eventCardImg' />
                    </Col>
                    <Col xs={7}>
                      <div className='eventHeadContainer'>
                        <h2 className='eventHead'>{event.name}</h2>
                      </div>
                    </Col>
                  </Row>
                  <div className='eventBody'>
                    <h2>{event.time}</h2>
                    <h4>{event.location}</h4>
                  </div>
                  <div className="btn-container1">
                    <Button className='btnSettingEvents' onClick={() => handleOpenModal(event.id)}>Регистрация</Button>
                  </div>
                </Card.Body>
              </Card>
              <RegistrationModal show={modalShow} onHide={handleCloseModal} eventId={selectedEventId} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Events;
