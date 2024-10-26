import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ users }) => { // Recibe los usuarios como props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (email === '' || password === '') {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    // Verificar credenciales
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Si la autenticación es exitosa, redirigir al dashboard
      navigate('/dashboard');
    } else {
      setErrorMessage('Credenciales inválidas. Inténtalo de nuevo.');
    }

    // Limpiar campos
    setEmail('');
    setPassword('');
  };

  const handleForgotPasswordRedirect = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="submit-button">Ingresar</button>
      </form>
      <div className="additional-links">
        <p>
          ¿No tienes una cuenta?{' '}
          <span onClick={() => navigate('/register')} className="link">Registrarse</span>
        </p>
        <p>
          <span onClick={handleForgotPasswordRedirect} className="link">¿Olvidaste tu contraseña?</span>
        </p>
      </div>
    </div>
  );
};

export default Login;


