import React, { useState } from 'react';
import {Accordion, Tabs, Tab,Container, Row, Col, Button, Card, CardText   } from 'react-bootstrap';

import { useAuth } from './AuthContext';

import img from "./img1.jpg";
import Slide from './Slide';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img6 from './6.png'
import companyLogo from './company-logo.jpg';
import Modal1 from './modal1';
import Modal2 from './modal2';
import Modal3 from './modal3';
import Modal4 from './modal4';
import './TabsMainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import imgBuis1 from './imgBuis1.png';
import imgBuis2 from './imgBuis2.png';

import imgProj1 from './imgProj1.png';

import imgScien from './imgScien.png';

import Events from './Events';

import BussinesPatners from './BussinesPatners';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Теперь показываем по одной карточке
  slidesToScroll: 1,
  centerMode: true,

};

 


const mainPageBanner = (
  <Container className='mainPageBlock'>
    <div className="banner-content">
      <h1 className="banner-title">БИМ </h1>
      <h1 className="banner-subtitle">Большая Ивановская Мануфактура</h1>
      <div className="banner-description">
        <p className="platform-box">Научно-образовательная платформа</p>
      </div>
    </div>
  </Container>
);

// Вставьте здесь подходящие JSX или компоненты для других вкладок
const coworkingBanner = <div ><Container fluid className="coworking-banner" >
  <Row className="justify-content-center align-items-center">
    <Col xs={12} md={8} >
    <h2 className='textCowork'>Коворкинг для студентов</h2>
    <h5 className='bantext'>Открой для себя</h5> 
    <h5 className='bantext'> командную работу с новой</h5> 
    <h5 className='bantext'> стороны</h5>
    
    </Col>
    <Col xs={12} md={4} >
          
          
        </Col>
    </Row> 
    
</Container><div className="btn-container"><Button  className='btnSetting'>Записаться</Button></div></div>;

const eventsBanner = <div><Container fluid className='event-banner'>
  <Row className="justify-content-center align-items-center">
  <Col xs={12} md={8} >
  <h2 className='textCowork'>Мероприятия</h2>
  <h5 className='bantext'>Есть время, но не знаешь,  </h5> <h5 className='bantext'>чем себя занять? Хочешь </h5> 
  <h5 className='bantext'> встретить новых друзей? </h5>
  
  </Col>
  <Col xs={12} md={4} >
        <img src={imgBuis1} alt="" className="emoji" />
        <img src={imgBuis2} alt="" className="emoji" />
        
      </Col>
      <pre></pre>
      
  </Row> 
  
</Container><div className="btn-container"><Button  className='colorBTNEvent'>Создать мероприятие</Button></div></div>;

const businessBanner = <div ><Container fluid className="business-banner" >
<Row className="justify-content-center align-items-center">
  <Col xs={12} md={8} >
  <h2 className='textCowork'>Бизнес-сообщества</h2>
  <h5 className='bantext'>Нужна помощь в </h5> <h5 className='bantext'>разработке проектов? Есть</h5> 
  <h5 className='bantext'> желание реализовать</h5><h5 className='bantext'>крутую идею? </h5>
  
  </Col>
  <Col xs={12} md={4} >
        <img src={imgBuis1} alt="" className="emoji" />
        <img src={imgBuis2} alt="" className="emoji" />
        
      </Col>
      <pre></pre>
      <h1 className="bussinesText" >Напиши партнерам!</h1>
  </Row> 
  
</Container> <pre></pre><pre></pre></div>;

const projectBanner = <div ><Container fluid className="project-banner" >
<Row className="justify-content-center align-items-center">
  <Col xs={12} md={8} >
  <h2 className='textCowork'>Проектная работа</h2>
  <h5 className='bantext'>Поделись своими достижениями и </h5> <h5 className='bantext'>объединяйся с другими молодыми </h5> 
  <h5 className='bantext'> учеными</h5>
  
  </Col>
  <Col xs={12} md={4} >
        <img src={imgProj1} alt="" className="emoji" />
        
      </Col>
  </Row> 
  
</Container><div className="btn-container"><Button  className='btnSetting btnColor'>Добавить работу</Button></div></div>



const scienceBanner = <div ><Container fluid className="science-banner" >
<Row className="justify-content-center align-items-center">
  <Col xs={12} md={8} >
  <h2 className='textCowork'>Научная деятельность</h2>
  <h5 className='bantext'>Мы любим слушать о науке, честно - </h5> 
  <h5 className='bantext'>честно. А еще больше, когда это</h5> 
  <h5 className='bantext'> рассказываете вы. Поделитесь </h5>
  <h5 className='bantext'>своими научными успехами со  </h5>
  <h5 className='bantext'>всеми! </h5>

  </Col>
  <Col xs={12} md={4} >
        <img src={imgScien} alt="" className="emoji" />
        
      </Col>
      <pre></pre>
  </Row> 
  
</Container><div className="btn-container"><Button  className='btnSetting btnColorS'>Добавить работу</Button></div></div>


const TabsComponent = () => {

  const [activeTab, setActiveTab] = useState('main');
  const { isAuthenticated } = useAuth(); // Проверка, аутентифицирован ли пользователь

  
 
  const [showModal1, setShowModal1] = useState(false);
  const handleOpenModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const [showModal2, setShowModal2] = useState(false);
  const handleOpenModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);


  const [showModal3, setShowModal3] = useState(false);
  const handleOpenModal3 = () => setShowModal3(true);
  const handleCloseModal3 = () => setShowModal3(false);


  const [showModal4, setShowModal4] = useState(false);
  const handleOpenModal4 = () => setShowModal4(true);
  const handleCloseModal4 = () => setShowModal4(false);

  

  const renderBanner = (key) => {
    switch (key) {
      case 'main':
        return mainPageBanner;
      case 'coworking':
        return coworkingBanner;
      case 'events':
        return eventsBanner;
      case 'business':
        return businessBanner;
      
      case 'projects':
        return projectBanner;
      case 'science':
        return scienceBanner;
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
        <h2 className= 'text-style1 '>Что такое БИМ?</h2>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <Row className="align-items-center">
            
            <Col md={6} className="text-center p-5" >
            
            <p className= 'text-style'>
                Какой-то умный текст, что БИМ это круто, классно,
                Какой-то умный текст, что БИМ это круто, классно,
                {/* Добавьте столько текста, сколько нужно */}
            </p>
            <div className="d-flex flex-column align-items-center">
                <Button variant="light" className="my-2 w-75">Преимущество 1 и большой текст </Button>
                <Button variant="light" className="my-2 w-75">Преимущество 2</Button>
                <Button variant="light" className="my-2 w-75">Преимущество 3</Button>
            </div>
            </Col>
            <Col md={6}>
            <React.Fragment>
             
            </React.Fragment>
            </Col>
        </Row>
        </Container>
        <div >
        <Slide />
        </div>
        <div className="registration-block-container align-items-center">
        <Row>
        <h2 className='textstyle ' >Хочешь рассказать о своих достижениях?</h2>
        <h3 className='textstyle1'>Заполни портфолио!</h3>
        <pre></pre>
        <pre></pre>
        <pre></pre> 
            <Row>
              <Col md={12}>
                
              </Col>
            </Row>
            <Row>
              <Col md={6}>
              <Card  border="light"   style={{ width: '40rem',backgroundColor: 'black' }}>
             
              <Card.Body>
                <Card.Title style ={{color:'white'}}>Научная деятельность</Card.Title>
                <pre></pre>
                <pre></pre>

                <Card.Text>
                Молодой ученый, ждем твоих 
                достижений! Переходи по ссылке 
                и делись своими научными работами
                </Card.Text>
                <pre></pre>
                <pre></pre>
                <Button variant="primary">Заполнить портфолио</Button>
              </Card.Body>
            </Card>
              </Col>
              <Col md={6}>
              <Card border="light"  style={{ width: '40rem', backgroundColor: 'black' }}>
              
              <Card.Body>
                <Card.Title  style ={{color:'white'}}>Общественная деятельность</Card.Title>
                <pre></pre>
                <pre></pre>
                <Card.Text>
                Любишь общение и новые знакомства? Готов стать тем самым супер героем? Расскажи об этом!
                </Card.Text>
                <pre></pre>
                <pre></pre>
                <Button variant="primary">Заполнить портфолио</Button>
              </Card.Body>
            </Card>
              </Col>
            </Row>
          
        </Row>
      </div>

      <div className="slider-container  align-items-center">
      <h2>Наши бизнес-партнеры</h2>
      <p>Они помогают сделать это место круче, а также предоставляют возможность развивать себя</p>
      <Slider {...sliderSettings}>
        <Card className="partner-card">
          <Card.Img variant="top" src={companyLogo} />
          <Card.Body>
            <Card.Title>Лого компании</Card.Title>
            <Card.Text style ={{color:'black'}}>Много текста про компанию, либо про человека, мб его цитата.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="partner-card">
          <Card.Img variant="top" src={companyLogo} />
          <Card.Body>
            <Card.Title>Лого компании</Card.Title>
            <Card.Text style ={{color:'black'}}>Много текста про компанию, либо про человека, мб его цитата.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="partner-card">
          <Card.Img variant="top" src={companyLogo} />
          <Card.Body>
            <Card.Title>Лого компании</Card.Title>
            <Card.Text style ={{color:'black'}}> Много текста про компанию, либо про человека, мб его цитата.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="partner-card">
          <Card.Img variant="top" src={companyLogo} />
          <Card.Body>
            <Card.Title>Лого компании</Card.Title>
            <Card.Text style ={{color:'black'}}>Много текста про компанию, либо про человека, мб его цитата.</Card.Text>
          </Card.Body>
        </Card>
        
      </Slider>
      </div>
        <div className='backColorFAQ'>
        <div className='styleFAQ'>
          <pre> </pre>
          <div className='styleFAQ1'><h2 >FAQ</h2></div>
          <Accordion    flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header className = 'accordStyleH'>Как оставить заявку на мероприятие?</Accordion.Header>
              <Accordion.Body className = 'accordStyleB'>
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

          <Tab eventKey="coworking" title="Коворкинг"  >
          <div style={{ width: '100%' }} className='cardStyle justify-content-center align-items-center'>
            <h1 className="coworkingHead">Залы в кампусе БИМ</h1>
            <pre> </pre>
            <div className='zone' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Card style={{ width: 'calc(50% - 20px)', marginBottom: '20px' }}>
                <Card.Body>
                 
                  <Card.Text>
                    <Row>
                      <Col s={12}>
                        <h1 className="CoworkTextSyle">Малый зал</h1>
                        <h2 className="CoworkTextSyle1">Корпус Б</h2>
                        <h2 className="CoworkTextSyle2">аудитория <span className="CoworkTextSyle1" style={{float:'right', marginLeft:'5px'} }> 319а</span></h2>
                      </Col>
                      <Col s={12}>
                        <Card.Img src={img} className="card-img" />
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary" onClick={handleOpenModal1}>Открыть карточку зала</Button>
                  <Modal1 show={showModal1} onHide={handleCloseModal1} />
                </Card.Body>
              </Card>
              <Card style={{ width: 'calc(50% - 20px)', marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Text>
                  <Row>
                      <Col s={12}>
                        <h1 className="CoworkTextSyle">Большой зал</h1>
                        <h2 className="CoworkTextSyle1">Корпус Б</h2>
                        <h2 className="CoworkTextSyle2">аудитория <span className="CoworkTextSyle1" style={{float:'right', marginLeft:'5px'} }> 316</span></h2>
                      </Col>
                      <Col s={12}>
                        <Card.Img src={img} className="card-img" />
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary" onClick={handleOpenModal2}>Открыть карточку зала</Button>
                  <Modal2 show={showModal2} onHide={handleCloseModal2} />
                </Card.Body>
              </Card>
              <Card style={{ width: 'calc(50% - 20px)', marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Text>
                  <Row>
                      <Col s={12}>
                        <h1 className="CoworkTextSyle">Зал ПК</h1>
                        <h2 className="CoworkTextSyle1">Корпус А</h2>
                        <h2 className="CoworkTextSyle2">аудитория <span className="CoworkTextSyle1" style={{float:'right', marginLeft:'5px'} }> 222</span></h2>
                      </Col>
                      <Col s={12}>
                        <Card.Img src={img} className="card-img" />
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary" onClick={handleOpenModal3}>Открыть карточку зала</Button>
                  <Modal3 show={showModal3} onHide={handleCloseModal3} />
                </Card.Body>
              </Card>
              <Card style={{ width: 'calc(50% - 20px)', marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Text>
                  <Row>
                      <Col s={12}>
                        <h1 className="CoworkTextSyle">Большой зал</h1>
                        <h2 className="CoworkTextSyle1">Корпус С</h2>
                        <h2 className="CoworkTextSyle2">аудитория <span className="CoworkTextSyle1" style={{float:'right', marginLeft:'5px'} }> 456</span></h2>
                      </Col>
                      <Col s={12}>
                        <Card.Img src={img} className="card-img" />
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary" onClick={handleOpenModal4}>Открыть карточку зала</Button>
                  <Modal4 show={showModal4} onHide={handleCloseModal4} />
                </Card.Body>
              </Card>
        </div>
        </div>


        </Tab>
        <Tab eventKey="events" title="Мероприятия">
            <Events />
        </Tab>
        <Tab eventKey="business" title="Бизнес-сообщества">
          <BussinesPatners/>
        </Tab>
        <Tab eventKey="projects" title="Проектная деятельность">
        {/* Содержимое для Проектная деятельность */}
        </Tab>
        <Tab eventKey="science" title="Научная деятельность">
        {/* Содержимое для Научная деятельность */}
        </Tab>
        
        {isAuthenticated && (
        <Tab eventKey="special" title="Специальная вкладка">
          {/* Содержимое для специальной вкладки, доступной только после входа */}
        </Tab>
      )}
    </Tabs>
    </div>
  );
};

export default TabsComponent;
