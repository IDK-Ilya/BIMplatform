import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const BookingModal = ({ show, onHide }) => {
  const [bookingData, setBookingData] = useState({
    hall: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    fullName: '',
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
    setSuccess(false); // Сбрасываем сообщение об успехе при изменении полей
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Проверяем, что дата и время окончания позже даты и времени начала
    const start = new Date(`${bookingData.startDate}T${bookingData.startTime}`);
    const end = new Date(`${bookingData.endDate}T${bookingData.endTime}`);
    if (end <= start) {
      setError('Дата и время окончания должны быть позже даты и времени начала.');
      return;
    }
    setError(''); // Очищаем сообщение об ошибке

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_works', bookingData);
      console.log('Booking Response:', response.data);
      setSuccess(true);
      onHide(); // Закрываем модальное окно после успешной отправки
    } catch (error) {
      console.error('Error booking hall:', error);
      setError('Ошибка при бронировании: ' + error.message);
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
              name="hall"
              value={bookingData.hall}
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
              name="startDate"
              value={bookingData.startDate}
              onChange={handleInputChange}
              required />
            <Form.Label>Время начала</Form.Label>
            <Form.Control
              type="time"
              name="startTime"
              value={bookingData.startTime}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Дата окончания</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={bookingData.endDate}
              onChange={handleInputChange}
              required />
            <Form.Label>Время окончания</Form.Label>
            <Form.Control
              type="time"
              name="endTime"
              value={bookingData.endTime}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group>
            <Form.Label>ФИО</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder="Введите ФИО"
              value={bookingData.fullName}
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
