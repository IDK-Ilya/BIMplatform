import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Импорт контекста аутентификации

function LoginPage() {
  const [formData, setFormData] = useState({
   grant_type:'',
    username: '',
    password: '',
    scope: '',
   client_id: '',
    client_secret:''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Получение функции login из контекста

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    const params = new URLSearchParams(formData).toString();
    try {
      await axios.post(`http://localhost:8000/api/auth/login${params}`);
      login(); // Установка флага аутентификации в true
      navigate('/'); // Перенаправление на главную страницу
    } catch (error) {
      setError('Неверный логин или пароль');
      console.error('Error posting data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        handleLogin();
      }}>
        <div>
          <div>
            <label htmlFor="username">E-mail:</label>
            <input id="username" name="username" type="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="password">Пароль:</label>
            <input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} />
          </div>
        </div>
        <button type="submit">Войти</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h5>Еще нет аккаунта? Создайте его!</h5>
      <Link to="/register"><button type="button">Регистрация</button></Link>
    </div>
  );
}

export default LoginPage;
