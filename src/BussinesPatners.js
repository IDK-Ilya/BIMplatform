import React, { Component } from 'react'
import {Accordion, Tabs, Tab,Container, Row, Col, Button, Card, CardText   } from 'react-bootstrap';
import './BussinesPatners.css';

import card1 from './6.png'

export default class BussinesPatners extends Component {
  render() {
    return (
    <div>
      <div className='bussPart'>
        <Accordion  >
        <Accordion.Item eventKey="0">
            <Accordion.Header className = ''><img className = 'card1' src={card1}></img> <h2>АО Информатика</h2> <p className='cardText'>IT - компания в Иваново по разработке ПО</p></Accordion.Header>
            <Accordion.Body className = ''>
            <p>Разрабатываем ИННОВАЦИОННОЕ программное обеспечение, которое обеспечивает динамичное развитие бизнеса предприятий и эффективную работу их персонала, используя весь накопленный опыт и КРЕАТИВНОЕ мышление наших сотрудников.</p>

            <p>Предоставляем помощь студентам по развитию инновационных проектов в информационных технологиях </p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion></div>
        <pre></pre>
        <div className='bussPart'>
        <Accordion  >
        <Accordion.Item eventKey="0">
            <Accordion.Header className = ''><img className = 'card1' src={card1}></img> <h2>АО Информатика</h2> <p className='cardText'>IT - компания в Иваново по разработке ПО</p></Accordion.Header>
            <Accordion.Body className = ''>
            <p>Разрабатываем ИННОВАЦИОННОЕ программное обеспечение, которое обеспечивает динамичное развитие бизнеса предприятий и эффективную работу их персонала, используя весь накопленный опыт и КРЕАТИВНОЕ мышление наших сотрудников.</p>

            <p>Предоставляем помощь студентам по развитию инновационных проектов в информационных технологиях </p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion></div>
        <pre></pre>
        <div className='bussPart'>
        <Accordion  >
        <Accordion.Item eventKey="0">
            <Accordion.Header className = ''><img className = 'card1' src={card1}></img> <h2>АО Информатика</h2> <p className='cardText'>IT - компания в Иваново по разработке ПО</p></Accordion.Header>
            <Accordion.Body className = ''>
            <p>Разрабатываем ИННОВАЦИОННОЕ программное обеспечение, которое обеспечивает динамичное развитие бизнеса предприятий и эффективную работу их персонала, используя весь накопленный опыт и КРЕАТИВНОЕ мышление наших сотрудников.</p>

            <p>Предоставляем помощь студентам по развитию инновационных проектов в информационных технологиях </p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion></div>
        <pre></pre>
        <div className='bussPart'>
        <Accordion  >
        <Accordion.Item eventKey="0">
            <Accordion.Header className = ''><img className = 'card1' src={card1}></img> <h2>АО Информатика</h2> <p className='cardText'>IT - компания в Иваново по разработке ПО</p></Accordion.Header>
            <Accordion.Body className = ''>
            <p>Разрабатываем ИННОВАЦИОННОЕ программное обеспечение, которое обеспечивает динамичное развитие бизнеса предприятий и эффективную работу их персонала, используя весь накопленный опыт и КРЕАТИВНОЕ мышление наших сотрудников.</p>

            <p>Предоставляем помощь студентам по развитию инновационных проектов в информационных технологиях. </p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion></div>
        <pre></pre>
   
        </div>
    )
  }
}