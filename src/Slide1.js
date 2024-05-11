import React from 'react';
import { Card, Button, Row, Col,Carousel, Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slide1.css';

import imgIspu from './imgIspu.png';



function EventSlider() {
  
  return (

  <div className='slide'> 
    <pre></pre>
    <div  className='slideHead'><h2 > Успей посетить главные события</h2></div>
    <pre></pre>
    <div className='carouselcontainer1'>
    <Carousel indicators={false} controls={true}>
      <Carousel.Item>
        <Container>
        <Row>
          <Col xs = {5}>
            <Row>
              
              <Col xs={5}>
                <div className='eventHeadContainer1'><h2 className='eventHead1'>Профком обучающихся ИГЭУ</h2></div>
              </Col>
            </Row>
              <pre></pre>
            <Row>
              <Col>
                <div className='eventBody '>
                  <h2 className='colorSlideText111'>26 апреля</h2>
                  <h2 className='colorTime111'>16:00</h2>
                  <h4  className='colorSlideText111'>малый зал</h4>
                </div>
              </Col>
              <Button variant="outline-light" className="me-2 mt-4 btnColor1">Регистрация</Button>  
            </Row>
          </Col>
          <Col xs={5}>
            <Col>
            <h2 className='colorSlideText111'>Мозгобойня</h2>
            <h4 className='colorSlideText1111'>Почуствуй силу мозга</h4>
            <p className='colorSlideText1111'>Ехал грека, ехал, так и не доехал</p>
            </Col>
          </Col>
        </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
        <Row>
          <Col xs = {5}>
            <Row>
              
              <Col xs={5}>
                <div className='eventHeadContainer1'><h2 className='eventHead1'>Профком обучающихся ИГЭУ</h2></div>
              </Col>
            </Row>
              <pre></pre>
            <Row>
              <Col>
                <div className='eventBody '>
                  <h2 className='colorSlideText111'>26 апреля</h2>
                  <h2 className='colorTime111'>16:00</h2>
                  <h4  className='colorSlideText111'>малый зал</h4>
                </div>
              </Col>
              <Button variant="outline-light" className="me-2 mt-4 btnColor1">Регистрация</Button>  
            </Row>
          </Col>
          <Col xs={5}>
            <Col>
            <h2 className='colorSlideText111'>Мозгобойня</h2>
            <h4 className='colorSlideText1111'>Почуствуй силу мозга</h4>
            <p className='colorSlideText1111'>Ехал грека, ехал, так и не доехал</p>
            </Col>
          </Col>
        </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
        <Row>
          <Col xs = {5}>
            <Row>
              
              <Col xs={5}>
                <div className='eventHeadContainer1'><h2 className='eventHead1'>Профком обучающихся ИГЭУ</h2></div>
              </Col>
            </Row>
              <pre></pre>
            <Row>
              <Col>
                <div className='eventBody '>
                  <h2 className='colorSlideText111'>26 апреля</h2>
                  <h2 className='colorTime111'>16:00</h2>
                  <h4  className='colorSlideText111'>малый зал</h4>
                </div>
              </Col>
              <Button variant="outline-light" className="me-2 mt-4 btnColor1">Регистрация</Button>  
            </Row>
          </Col>
          <Col xs={5}>
            <Col>
            <h2 className='colorSlideText111'>Мозгобойня</h2>
            <h4 className='colorSlideText1111'>Почуствуй силу мозга</h4>
            <p className='colorSlideText1111'>Ехал грека, ехал, так и не доехал</p>
            </Col>
          </Col>
        </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
    
    </div>
    <pre>

    </pre>
    </div>
  );
}

export default EventSlider;