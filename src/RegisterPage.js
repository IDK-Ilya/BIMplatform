import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    telephone: '',
    password: '',
    is_active: true,
    is_superuser: false,
    is_verified: false,
    role_id: 1,
  });

  const [error, setError] = useState(''); // Добавление состояния для ошибок
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const fetchUserData = () => {
    axios.post('https://cors-anywhere.herokuapp.com/https://c0c4-62-33-49-119.ngrok-free.app/api/auth/register', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response data:', response.data);
      // Проверка на успешную регистрацию и перенаправление
      navigate('/login'); // Переадресация на страницу входа после успешной регистрации
    })
    .catch(error => {
      if (error.response && error.response.status === 409) {
        // Обработка случая, когда пользователь уже зарегистрирован
        setError('Пользователь с такими данными уже зарегистрирован.');
      } else {
        // Обработка других видов ошибок
        setError('Произошла ошибка при регистрации. Пользователь с такими данными уже зарегистрирован.');
      }
      console.error('Error posting data:', error.response ? error.response.data : error.message);
    });
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        fetchUserData();
      }}>
        <div>
          <div>
            <label htmlFor="username">Имя:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Почта:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="telephone">Телефон:</label>
            <input
              id="telephone"
              name="telephone"
              type="text"
              value={formData.telephone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Пароль:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </div>
        <button type="submit">Отправить данные</button>
      </form>
      <h5>Уже есть аккаунт? Войдите в него!</h5>
      <Link to="/login"><button type="button">Вход</button></Link>
    </div>
  );
}

export default RegisterPage;
