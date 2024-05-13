import React, { useState } from 'react';
import {Accordion, Tabs, Tab,Container, Row, Col, Button, Card, CardText   } from 'react-bootstrap';

import { useAuth } from './AuthContext';

import Slide1 from './Slide1';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import companyLogo from './company-logo.jpg';


import 'bootstrap/dist/css/bootstrap.min.css';


import Chat from './Chat';

import './MainContentAccessible.css';


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Теперь показываем по одной карточке
  slidesToScroll: 1,
  centerMode: true,

};

 
const mainPageBanner = (
 <div className='mainPageBlock1'>  <Container >
    <div className="banner-content1">
      <h1 className="banner-title1">БИМ </h1>
      <h1 className="banner-subtitle1">Большая Ивановская Мануфактура</h1>
    </div>
  </Container></div>
);

const TabsComponent = () => {

  const [activeTab, setActiveTab] = useState('main');
  const { isAuthenticated } = useAuth(); // Проверка, аутентифицирован ли пользователь

  const renderBanner = (key) => {
    switch (key) {
      case 'main':
        return mainPageBanner;
    
      default:
        return null;
    }
  };


  return (
    <div>
      
      {renderBanner(activeTab)}
      
    <Tabs
      id="controlled-tab-example"
      activeKey={activeTab}
      onSelect={(k) => setActiveTab(k)}
      className="mb-3 nav nav-tabs justify-content-center text-decoration-none "
    >
        <Tab eventKey="main" title="Главная" >
        <Container fluid style={{ backgroundColor: 'black' }}>
        <pre></pre>
        <pre></pre>
        <h2 className= 'textstyleT11 '>Что такое БИМ?</h2>
        <pre></pre>
        
        <Row className="align-items-center">
            
            <Col  className="text-center p-5" >
            
              <p className= 'textstyle1'>
                  Какой-то умный текст, что БИМ это круто, классно,
                  Какой-то умный текст, что БИМ это круто, классно,
                  {/* Добавьте столько текста, сколько нужно */}
              </p>
            </Col>
            <div className="d-flex flex-column align-items-center">
              <Row>
              <Col>
              <p variant="light" className="" style={{fontFamily: 'Inter', fontSize:'20px',fontColor:'white', borderRadius:'5px', width:'17em',padding:'5px'}}>Преимущество 1 и большой текст </p>
              </Col>
              <Col>
              <p variant="light" className=""  style={{fontFamily: 'Inter',fontSize:'20px', backgroundColor:'white', borderRadius:'10px', width:'17em',padding:'5px'}}>Преимущество 2 fddddddddddddddddddddddddddddd</p>
              </Col >
              <Col >
               
              <p variant="light" className=""  style={{fontFamily: 'Inter', fontSize:'20px',backgroundColor:'white', borderRadius:'10px', width:'17em',padding:'5px'}}>Преимущество 2 fddddddddddddddddddddddddddddd</p>
           
              </Col>
              </Row>
                
              
            </div>
            
        </Row>
        </Container>
        <div >
        <Slide1 />
        </div>
        <div className="registration-block-container1 align-items-center">
        <Row>
        
        <pre></pre>
        <pre></pre>
        <pre></pre> 
          
            <Row>
              <Col md={6} >
              <Card  border="light"   style={{ width: '40rem',backgroundColor: 'black' }}>
             
              <Card.Body className='colCard' >
                <Card.Title className='cardHead1'>Научная деятельность</Card.Title>
                <pre></pre>
                <pre></pre>

                <Card.Text>
                Молодой ученый, ждем твоих 
                достижений! Переходи по ссылке 
                и делись своими научными работами
                </Card.Text>
                <pre></pre>
                <pre></pre>
                <Button variant="primary" className='btnStyly1234'>Заполнить портфолио</Button>
              </Card.Body>
            </Card>
              </Col>
              <Col md={6}>
              <Card border="light" сlassName='publickCard' style={{ width: '40rem',fontSize:'40px' }}>
              
              <Card.Body className='colCard' >
                <Card.Title  className='cardHead1'>Общественная деятельность</Card.Title>
                <pre></pre>
                <pre></pre>
                <Card.Text>
                Любишь общение и новые знакомства? Готов стать тем самым супер героем? Расскажи об этом!
                </Card.Text>
                <pre></pre>
                <pre></pre>
                <Button variant="primary" className='btnStyly1234'>Заполнить портфолио</Button>
              </Card.Body>
            </Card>
              </Col>
            </Row>
          
        </Row>
        
      </div>

      <div className="slider-container1  align-items-center">
      <div className='sliderCont2'><h2 className='text123'>Наши бизнес-партнеры</h2>
       <Row>
        
       <Card className="partner-card1">
          
          <Card.Body className='cardBody'>
            <Card.Title className='logoText'>Лого компании</Card.Title>
            <Card.Text className='mainText' style ={{color:'black'}}> Много текста про компанию, либо про человека, мб его цитата.</Card.Text>
          </Card.Body>
        </Card>
        
        
        <Card className="partner-card1">
          
          <Card.Body className='cardBody'>
            <Card.Title className='logoText'>Лого компании</Card.Title>
            <Card.Text className='mainText' style ={{color:'black'}}> Много текста про компанию, либо про человека, мб его цитата.</Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="partner-card1">
          
          <Card.Body className='cardBody'>
            <Card.Title className='logoText'>Лого компании</Card.Title>
            <Card.Text className='mainText'> Много текста про компанию, либо про человека, мб его цитата.</Card.Text>
          </Card.Body>
        </Card>
        
        
        <Card className="partner-card1">
          
          <Card.Body className='cardBody'>
            <Card.Title className='logoText'>Лого компании</Card.Title>
            <Card.Text className='mainText' > Много текста про компанию, либо про человека, мб его цитата.</Card.Text>
          </Card.Body>
        </Card>
     
        </Row>
        </div>
      </div>
        <div className='backColorFAQ1'>
        <div className='styleFAQ'>
          <pre> </pre>
          <div className='styleFAQ11'><h2 >Вопросы</h2></div>
          <Accordion    flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header className = 'accordStyleH1'>Как оставить заявку на мероприятие?</Accordion.Header>
              <Accordion.Body className = 'accordStyleB1'>
              Для этого необходимо перейти на вкладку “Коворкинг” и нажать на кнопку “Записаться”.  
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Как заполнить портфолио?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Можно ли участвовать в мероприятии без регистрации?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Как связаться с бизнес-партнерами по развитию проекта?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <pre> </pre>
        </div>
        </div>
        </Tab>

          
        
        {isAuthenticated && (
        <Tab eventKey="special" title="Чат">
         <Chat/>
        </Tab>
      )}
    </Tabs>
    </div>
  );
};

export default TabsComponent;
