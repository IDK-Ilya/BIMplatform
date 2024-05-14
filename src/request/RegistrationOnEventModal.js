import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Toast } from 'react-bootstrap';
import axios from 'axios';

const RegistrationModal = ({ show, onHide, eventId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    contactLink: '',
    phone: '',
    comment: '',
    eventId: eventId
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (eventId) {
      setFormData(fData => ({ ...fData, eventId }));
    }
  }, [eventId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    try {
        // Отправляем данные формы на сервер
        const params = new URLSearchParams(formData).toString();
        axios.post(`http://127.0.0.1:8000/operation/add_pers_on_event?${params}`, {
    // здесь может быть тело запроса, если это необходимо
        });
        console.log('Server Response:',params);
        
        // Устанавливаем сообщение для всплывающего уведомления
        setToastMessage("Ваша заявка успешно отправлена!");
        
        // Показываем всплывающее уведомление
        setShowToast(true);
        
        // Закрываем модальное окно
        onHide();
        
        // Очищаем данные формы
        setFormData({
            fullName: '',
            organization: '',
            contactLink: '',
            phone: '',
            comment: '',
            eventId: ''
        });
    } catch (error) {
        // Обработка возможных ошибок при запросе
        console.error('Registration Error:', error);
        
        // Установка сообщения об ошибке и показ всплывающего уведомления
        setToastMessage("Ошибка при отправке заявки. Пожалуйста, попробуйте снова.");
        setShowToast(true);
    }
};


  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Регистрация на мероприятие</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFullName">
              <Form.Label>ФИО</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Введите ваше полное имя"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formOrganization">
              <Form.Label>ВУЗ/Организация</Form.Label>
              <Form.Control
                type="text"
                name="organization"
                placeholder="Введите название вашего ВУЗа или организации"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formContactLink">
              <Form.Label>Ссылка для связи</Form.Label>
              <Form.Control
                type="url"
                name="contactLink"
                placeholder="Введите URL вашего профиля или сайта"
                value={formData.contactLink}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Телефон для связи</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Введите ваш телефонный номер"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formComment">
              <Form.Label>Комментарий к заявке</Form.Label>
              <Form.Control
                as="textarea"
                name="comment"
                rows={3}
                placeholder="Оставьте комментарий"
                value={formData.comment}
                onChange={handleChange}
              />
            </Form.Group>
            <div><Button  variant="primary" type="submit" style={{margin:'10px',marginLeft:'295px', backgroundColor:'gray',border:'none'}}
 >
              Отправить заявку
            </Button></div>
          </Form>
        </Modal.Body>
      </Modal>
      <div ><Toast style={{backgroundColor:'green'}} onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
        <div  ><Toast.Body >{toastMessage}</Toast.Body></div>
      </Toast></div>
    </>
  );
};

export default RegistrationModal;
