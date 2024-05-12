import React from 'react';
import { Card, Button, Row, Col,Carousel, Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slide.css';

import eventLogo from './лого 1.jpg';
import eventLogo2 from './лого 2.jpg';
import eventLogo3 from './лого 3.jpg'




function EventSlider() {
  
  return (

  <div className='slide'> 
    <pre></pre>
    <div  className='slideHead'><h2 > Успей посетить главные события</h2></div>
    <pre></pre>
    <div className='carousel-container1'> 
    <Carousel indicators={false} controls={true} className='sizeBox'>
      <Carousel.Item>
        <Container>
        <Row>
          <Col xs = {5}>
            <Row>
              <Col xs={5}>
                 <img src={eventLogo} alt="" className='eventCardImg' />
              </Col>
              <Col xs={5}>
                <div className='eventHeadContainer'><h2 className='eventHead'>Q EVENT</h2></div>
              </Col>
            </Row>
              <pre></pre>
            <Row>
              <Col>
                <div className='eventBody '>
                  <h2 className='colorSlideText'>7 мая 2024</h2>
                  <h2 className='colorTime'>18:00</h2>
                  <h4  className='colorSlideText'>Д-505</h4>
                </div>
              </Col>
              
            </Row>
            <Button variant="outline-light" className="me-2 mt-4 btnColor">Регистрация</Button>  
          </Col>
          <Col xs={6}>
            <Col>
            <h2 className='colorSlideText'>Киновечер</h2>
            <h4 className='colorSlideText1'>Врываемся в последний месяц семестра с традиционным киновечером</h4>
            <p className='colorSlideText2'>На очереди фильм «Законопослушный гражданин». Он расскажет о том, как окружной прокурор пошёл на сделку с преступниками и освободил их из тюрьмы. Тогда человек, чья жена и ребёнок из-за этого погибли, решает отомстить прокурору, совершив правосудие самостоятельно.</p>
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
                 <img src={eventLogo2} alt="" className='eventCardImg' />
              </Col>
              <Col xs={5}>
                <div className='eventHeadContainer'><h2 className='eventHead'>БИМ</h2></div>
              </Col>
            </Row>
              <pre></pre>
            <Row>
              <Col>
                <div className='eventBody '>
                  <h2 className='colorSlideText'>8-15 мая 2024 </h2>
                  <h2 className='colorTime'></h2>
                  <h4  className='colorSlideText'>Гибридный формат</h4>
                </div>
              </Col>
             
            </Row>
            <Button variant="outline-light" className="me-2 mt-4 btnColor">Регистрация</Button>  
          </Col>
          <Col xs={6}>
            <Col>
            <h2 className='colorSlideText'>Студенческий хакатон «Код БИМ»</h2>
            <h4 className='colorSlideText1'>Кейс: Создать сервис, объединяющий мероприятия внутри кампуса и между участниками консорциума вузов</h4>
            <p className='colorSlideText2'>Хакатон Tele2 «Код БИМ» - первый IT-проект на базе кампуса «Большая Ивановская Мануфактура» 
            Принимают участие студены вузов и колледжей 
            Призовой фонд – 200 тысяч рублей
            <pre></pre>
            <pre></pre>
            <pre></pre>
            


            </p>
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
                 <img src={eventLogo3} alt="" className='eventCardImg' />
              </Col>
              <Col xs={5}>
                <div className='eventHeadContainer'><h2 className='eventHead'>PowerQ</h2></div>
              </Col>
            </Row>
              <pre></pre>
            <Row>
              <Col>
                <div className='eventBody '>
                  <h2 className='colorSlideText'>23-26 августа 2024 </h2>
                  <h2 className='colorTime'></h2>
                  <h4  className='colorSlideText'>Рубское озеро</h4>
                </div>
              </Col>
             
            </Row>
            <Button variant="outline-light" className="me-2 mt-4 btnColor">Регистрация</Button>  
          </Col>
          <Col xs={6}>
            <Col>
            <h2 className='colorSlideText'>Набор на школу кураторов Территория Q-2024</h2>
            <h4 className='colorSlideText1'>Начался набор, на двенадцатую школу кураторов на Рубском озере</h4>
            <p className='colorSlideText2'>Это твой шанс найти новых друзей, обрести опыт в разных сферах, а самое главное и бесценное - получить море ярких эмоций. Если тебе стало интересно, то «Территория Q» - это для тебя. Поэтому не стесняйся и скорее оставляй заявку. Ждем их с 30 апреля по 12 мая</p>
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