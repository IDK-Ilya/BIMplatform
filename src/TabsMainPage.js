import React, { useState } from 'react';
import {Accordion, Tabs, Tab,Container, Row, Col, Button, Card, CardText  } from 'react-bootstrap';

import { useAuth } from './AuthContext';

import img1 from "./коворкинг 1.jpeg";
import img2 from "./зал 1.jpg";
import img3 from "./мини зал.jpg";
import img4 from "./лек 1.jpg";


import img6T from "./6T.png";

import Slide from './Slide';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img6 from './6.png';

import imgEvents1 from './imgEvents1.png'
import imgEvents2 from './imgEvents2.png'


import Modal1 from './modal1';
import Modal2 from './modal2';
import Modal3 from './modal3';
import Modal4 from './modal4';
import './TabsMainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import imgBuis1 from './imgBuis1.png';
import imgBuis2 from './пацан.png';

import imgProj1 from './imgProj1.png';

import imgScien from './imgScien.png';

import imgMain from './главная.jpg';
import Events from './Events';

import BussinesPatners from './BussinesPatners';

import Chat from './Chat';

import AddWork from './AddNewWork';

import AddScienceWork from './AddScienceWorks'
import students from './students.png'
import student from './student.png'

import companyLogo1 from './лого 4.jpg';
import companyLogo2 from './лого 5.jpg';
import companyLogo3 from './лого 6.jpg';

import BookingModal from './BookingModal';

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
    <Col xs={12} >
    <h2 className='textCowork'>Коворкинг для студентов</h2>
    <h5 className='bantext'>Открой для себя</h5> 
    <h5 className='bantext'> командную работу с новой</h5> 
    <h5 className='bantext'> стороны</h5>
    
     
    <Col xs={3} >
    </Col>
    <img className="emoji1" src={img6T}  alt="123"/>
          
    </Col>
    </Row> 
    
</Container></div>

const eventsBanner = <div><Container fluid className='event-banner'>
  
  <Row className="justify-content-center align-items-center">
  <Col xs={12} md={8} >
  <h2 className='textCowork'>Мероприятия</h2>
  <h5 className='bantext'>Есть время, но не знаешь,  </h5> <h5 className='bantext'>чем себя занять? Хочешь </h5> 
  <h5 className='bantext'> встретить новых друзей? </h5>
  
  </Col>
  <Col xs={12} md={4} >
        <img src={imgEvents1} alt="" className="emoji2" />
        <img src={imgEvents2} alt="" className="emoji" />
        
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
        <img src={imgBuis2} alt="" className="emoji3" />
        
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
  
</Container></div>



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
  
</Container><div className="btn-container"></div></div>


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
  const [modalShow, setModalShow] = useState(false);

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
        <Row className="align-items-center">
            
            <Col md={6} className="text-center p-5" >
            
            <p className= 'text-style'>
            	«Большая Ивановская мануфактура» – научно-образовательный кампус. Новая площадка в Иванове для междисциплинарных исследований и открытий. Место, сочетающее в себе науку и досуг.
                {/* Добавьте столько текста, сколько нужно */}
            </p>
            <div className="d-flex flex-column align-items-center">
                <p variant="light" style={{ fontSize:'17px',backgroundColor:'white', borderRadius:'10px', width:'17em',padding:'5px'}} className="my-2 w-75">Площадки для проведения мероприятий</p>
                <p variant="light"  style={{ fontSize:'17px',backgroundColor:'white', borderRadius:'10px', width:'17em',padding:'5px'}}className="my-2 w-75">Современные лаборатории и коворкинги</p>
                <p variant="light"style={{ fontSize:'17px',backgroundColor:'white', borderRadius:'10px', width:'17em',padding:'5px'}}className="my-2 w-75">Технопарк</p>
                <p variant="light"style={{ fontSize:'17px',backgroundColor:'white', borderRadius:'10px', width:'17em',padding:'5px'}}className="my-2 w-75">Общежития для студентов и преподавателей</p>
                <p variant="light"style={{ fontSize:'17px',backgroundColor:'white', borderRadius:'10px', width:'17em',padding:'5px'}}className="my-2 w-75">Библиотека, музей</p>
            </div>
            </Col>
            <Col md={6}>
             <div className = 'imgMain'><img src={imgMain} /></div> 
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
          <div className='imgMainBack'><img src={students}  className='imgMainBack1'/> <img className='imgMainBack12' src={student}/></div> 
          <pre></pre>
          <pre></pre>
          <pre></pre> 
       
           <div className='alignContent'>  
            <Row>
                <Col md={12}>
                  
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                <Card  border="light"   style={{ width: '40rem',backgroundColor: 'black' }}>
              
                <Card.Body>
                  <div className='alignContentText'><Card.Title style ={{color:'white'}} >Научная деятельность</Card.Title></div>
                  <pre></pre>
                  <pre></pre>

                  <div className='alignContentText' style ={{color:'white', textAlign:'center'}} > <Card.Text>
                  Молодой ученый, ждем твоих 
                  достижений! Переходи по ссылке 
                  и делись своими научными работами
                  </Card.Text></div>
                  <pre></pre>
                  <pre></pre>
                  <div className='btnAlign'><Button variant="primary">Заполнить портфолио</Button></div>
                </Card.Body>
              </Card>
                </Col>
                <Col md={6}>
                <Card border="light"  style={{ width: '40rem', backgroundColor: 'black' }}>
                
                <Card.Body>
                  <Card.Title  style ={{color:'white', textAlign:'center'}}>Общественная деятельность</Card.Title>
                  <pre></pre>
                  <pre></pre>
                  <div className='alignContentText' style ={{color:'white', textAlign:'center'}}> <Card.Text>
                  Любишь общение и новые знакомства? Готов стать тем самым супер героем? Расскажи об этом!
                  </Card.Text></div>
                  <pre></pre>
                  <pre></pre>
                  <div className='btnAlign'><Button variant="primary">Заполнить портфолио</Button></div>
                </Card.Body>
              </Card>
                </Col>
              </Row>
            </div>
            
          </Row>
      </div>

      <div className="slider-container">
      <h2>Наши бизнес-партнеры</h2>
      <p>Они помогают сделать это место круче, а также предоставляют возможность развивать себя</p>
      <div className='mainCards'><Row>
        <Col xs={4}>
        <Card className="partner-card">
          <Card.Img variant="top" src={companyLogo1}  className='cardImgPart'/>
          <Card.Body>
            <Card.Title>Tele 2</Card.Title>
            <Card.Text style ={{color:'white'}}>Российская телекоммуникационная компания, базируется на собственной инфраструктуре, работает с 2003 года</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={4}>
        <Card className="partner-card">
          <Card.Img variant="top" src={companyLogo2}  className='cardImgPart'/>
          <Card.Body>
            <Card.Title>АО «Информатика»</Card.Title>
            <Card.Text style ={{color:'white'}}>Компания, занимающаяся разработкой программного обеспечения уже более 67 лет. Мы являемся экспертами в сфере автоматизированных систем управления предприятием.</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={4}>
        <Card className="partner-card">
          <Card.Img variant="top" src={companyLogo3}  className='cardImgPart'/>
          <Card.Body>
            <Card.Title>Нейрософт</Card.Title>
            <Card.Text style ={{color:'white'}}>Производитель медицинского диагностического оборудования для нейрофизиологии, функциональной диагностики, аудиологии и реабилитации.</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row></div>
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
              Перейти во вкладку "Научная деятельность" или "Проектная деятельность" и нажать кнопку "Добавить работу"
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Можно ли участвовать в мероприятии без регистрации?</Accordion.Header>
              <Accordion.Body>
              Для мероприятий в кампусе БИМ предусмотрена обязательная регистрация, чтобы организаторы подготовили комфортное размещение всех участников.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Как связаться с бизнес-партнерами по развитию проекта?</Accordion.Header>
              <Accordion.Body>
                LПерейти во вкладку "Бизнес-сообщества", раскрыть информацию о необходимом партнере и связаться с ними по предложенным вариантам контактов
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
            </div>
            <pre> </pre>
            
          <div style={{marginLeft:'50%', marginBottom:'15px'}}>    
          <Button className='btnSetting' onClick={() => setModalShow(true)}>Записаться</Button>
          <BookingModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
            <div className='zone' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              
              <Card style={{ marginBottom: '20px' }}>
                <Card.Body>
                 
                  <Card.Text>
                    <Row>
                      <Col s={12}>
                        <h1 className="CoworkTextSyle">Коворкинг </h1>
                        <h2 className="CoworkTextSyle1">проспект Ленина, 21с1</h2>
                       
                      </Col>
                      <Col s={12}>
                        <Card.Img src={img1} className="card-img" />
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary" onClick={handleOpenModal1}>Открыть карточку зала</Button>
                  <Modal1 show={showModal1} onHide={handleCloseModal1} />
                </Card.Body>
              </Card>
              <Card style={{ marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Text>
                  <Row>
                      <Col s={12}>
                        <h1 className="CoworkTextSyle">Конференц-зал </h1>
                        <h2 className="CoworkTextSyle1">ул. Бубнова, 40А</h2>
                      </Col>
                      <Col s={12}>
                        <Card.Img src={img2} className="card-img" />
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary" onClick={handleOpenModal2}>Открыть карточку зала</Button>
                  <Modal2 show={showModal2} onHide={handleCloseModal2} />
                </Card.Body>
              </Card>
              <Card style={{  marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Text>
                  <Row>
                      <Col s={12}>
                        <h1 className="CoworkTextSyle">Малый зал</h1>
                        <h2 className="CoworkTextSyle1">Ул. Жарова, 10</h2>
                      </Col>
                      <Col s={12}>
                        <Card.Img src={img3} className="card-img" />
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary" onClick={handleOpenModal3}>Открыть карточку зала</Button>
                  <Modal3 show={showModal3} onHide={handleCloseModal3} />
                </Card.Body>
              </Card>
              <Card style={{  marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Text>
                  <Row>
                      <Col s={12}>
                        <h1 className="CoworkTextSyle">Лекторий</h1>
                        <h2 className="CoworkTextSyle1">Ул. Батурина, 15</h2>
                      </Col>
                      <Col s={12}>
                        <Card.Img src={img4} className="card-img" />
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary" onClick={handleOpenModal4}>Открыть карточку зала</Button>
                  <Modal4 show={showModal4} onHide={handleCloseModal4} />
                </Card.Body>
              </Card>
        </div>
  
        </Tab>
        <Tab eventKey="events" title="Мероприятия">
            <Events />
        </Tab>
        <Tab eventKey="business" title="Бизнес-сообщества">
          <BussinesPatners/>
        </Tab>
        <Tab eventKey="projects" title="Проектная деятельность">
          <AddWork/>
        </Tab>
        <Tab eventKey="science" title="Научная деятельность">
        <AddScienceWork />
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
