import React, { Component } from 'react'
import {Accordion, Tabs, Tab,Container, Row, Col, Button, Card, CardText   } from 'react-bootstrap';
import './BussinesPatners.css';

import card1 from './лого 4.jpg';
import card2 from './лого 5.jpg';
import card3 from './лого 6.jpg';


export default class BussinesPatners extends Component {
  render() {
    return (
    <div>
      <div className='bussPart'>
        <Accordion  >
        <Accordion.Item eventKey="0">
            <Accordion.Header className = ''><img className = 'card1' src={card1}></img><h2   style={{marginLeft:'10px', marginRight:'175px'}} className='textBord'>Tele 2</h2> <p className='cardText'>Российская телекоммуникационная компания</p></Accordion.Header>
            <Accordion.Body className = ''>
            <p>Мы создаем альтернативу сложившимся рыночным практикам. Мы несем новое качество жизни потребителям мобильных услуг: честные, прозрачные, выгодные предложения, высококачественные партнерские программы и услуги.</p>

            <p>	Адрес и телефон офиса Tele2
            108811, г. Москва, поселение Московский, Киевское шоссе 22-й километр, домовладение 6, строение 1 </p>
            <p>
            тел. +7 495 229 84 00
            </p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion></div>
        <pre></pre>
        <div className='bussPart'>
        <Accordion  >
        <Accordion.Item eventKey="0">
            <Accordion.Header className = ''><img className = 'card1' src={card2}></img> <h2  style={{marginLeft:'10px', marginRight:'-6px'}}>АО Информатика</h2> <p className='cardText'>IT - компания в Иваново по разработке ПО</p></Accordion.Header>
            <Accordion.Body className = ''>
            <p>Разрабатывать ИННОВАЦИОННОЕ программное обеспечение, которое обеспечивает динамичное развитие бизнеса предприятий и эффективную работу их персонала, используя весь накопленный опыт и КРЕАТИВНОЕ мышление наших сотрудников. Стать ЛИДЕРОМ в области разработки автоматизированных систем управления, инженерной и деловой векторной графики.</p>
            <p>
              Адрес: 153032, область Ивановская, город Иваново, улица Ташкентская, 90
            </p>
            <p>
            Телефон техподдержки: 8-800-55-000-37
            </p>
            <p>
             Телефон приёмной: +7 (4932) 23-08-64
            </p>
            <p>
            E-mail: asmo@inform.ivanovo.ru
            </p>
            
             </Accordion.Body>
        </Accordion.Item>
        </Accordion></div>
        <pre></pre>
        <div className='bussPart'>
        <Accordion  >
        <Accordion.Item eventKey="0">
            <Accordion.Header className = ''><img className = 'card1' src={card3}></img> <h2   style={{marginLeft:'10px', marginRight:'92px'}}>Нейрософт</h2> <p className='cardText'>Производитель медицинского диагностического оборудования </p></Accordion.Header>
           <div>
            <Accordion.Body className = ''>
            <p>Объединяя людей, знания и технологии, мы воплощаем новейшие достижения науки в доступных решениях для практической медицины на всех континентах.</p>
            <p>Адрес: Россия, 153032, г. Иваново, ул. Воронина, д. 5 </p>
            <p> Отдел продаж: +7 (4932) 95-99-99 info@neurosoft.com</p>
            <p> Служба поддержки: +7 (4932) 59-21-12 help@neurosoft.com@neurosoft</p>
            <p> Учебный центр: +7 (4932) 59-33-44 study@neurosoft.com </p>
            <p> Отдел кадров +7 (4932) 58-79-79 rabota@neurosoft.ru terra@neurosoft.ru </p>
            </Accordion.Body>
            </div>
        </Accordion.Item>
        </Accordion></div>
        <pre></pre>
        
   
        </div>
    )
  }
}