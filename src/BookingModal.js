import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const BookingModal = ({ show, onHide }) => {
  const [bookingData, setBookingData] = useState({
    name2: '',
    start_time2: '',
    start_date2: '',
    end_time2: '',
    end_date2: '',
    FIO: '',
    contact: '',
    email: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
    setSuccess(false); // Reset success message on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Проверка, что дата и время окончания позже даты и времени начала
    const start = new Date(`${bookingData.start_date2}T${bookingData.start_time2}`);
    const end = new Date(`${bookingData.end_date2}T${bookingData.end_time2}`);
    if (end <= start) {
      setError('Дата и время окончания должны быть после даты и времени начала.');
      return;
    }
  
    setError(''); // Очистка предыдущих ошибок
 
    try {
      const response = await axios.post('http://127.0.0.1:8000/check_room_availability', JSON.stringify(bookingData), {
  headers: {
    'Content-Type': 'application/json'
  }
});

      if (response.status === 200) {
        setSuccess(true);
        onHide(); // Закрытие модального окна при успешной бронировании
      } else {
        setError('Ошибка бронирования: ' + ( 'Выбранные дата и время заняты'));
        setSuccess(false);
      }
    } catch (error) {
      
      setError('Ошибка при бронировании: ' + ('Выбранные дата и время заняты'));
      setSuccess(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Бронирование зала</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {success && <Alert variant="success">Успешно забронировано!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group>
            <Form.Label>Доступные залы</Form.Label>
            <Form.Control
              as="select"
              name="name2"
              value={bookingData.name2}
              onChange={handleInputChange}
              required>
              <option>Выберите зал</option>
              <option value="Коворкинг">Коворкинг</option>
              <option value="Конференц-зал">Конференц-зал</option>
              <option value="Малый зал">Малый зал</option>
              <option value="Лекторий">Лекторий</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Дата начала</Form.Label>
            <Form.Control
              type="date"
              name="start_date2"
              value={bookingData.start_date2}
              onChange={handleInputChange}
              required />
            <Form.Label>Время начала</Form.Label>
            <Form.Control
              type="time"
              name="start_time2"
              value={bookingData.startTime2}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Дата окончания</Form.Label>
            <Form.Control
              type="date"
              name="end_date2"
              value={bookingData.end_date2}
              onChange={handleInputChange}
              required />
            <Form.Label>Время окончания</Form.Label>
            <Form.Control
              type="time"
              name="end_time2"
              value={bookingData.end_time2}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group>
            <Form.Label>ФИО</Form.Label>
            <Form.Control
              type="text"
              name="FIO"
              placeholder="Введите ФИО"
              value={bookingData.FIO}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Контактный телефон</Form.Label>
            <Form.Control
              type="tel"
              name="contact"
              placeholder="Телефон"
              value={bookingData.contact}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={bookingData.email}
              onChange={handleInputChange}
              required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Отмена</Button>
          <Button variant="primary" type="submit">Забронировать</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default BookingModal;
