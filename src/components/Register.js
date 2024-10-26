import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = ({ onRegister }) => { // Recibe la función onRegister como props
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    // Llama a la función onRegister para agregar el nuevo usuario
    onRegister({ name, email, password });

    // Muestra la alerta de registro exitoso
    alert('Registro exitoso. Ahora puedes iniciar sesión.');

    // Redirige al usuario al login
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>
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
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password-icon"
              role="button"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M1 1l22 22M23 12c-3.5-5-7.5-9-11-9s-7.5 4-11 9 3.5 9 11 9 7.5-4 11-9z" />
                  <path d="M9 12c0 2.5 2 4.5 5 4.5s5-2 5-4.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M12 4.5C6 4.5 1.5 12 1.5 12S6 19.5 12 19.5 22.5 12 22.5 12 18 4.5 12 4.5z" />
                  <path d="M12 15.5a3.5 3.5 0 0 0 0-7" />
                </svg>
              )}
            </span>
          </div>
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña:</label>
          <div className="password-field">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-field"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="toggle-password-icon"
              role="button"
              aria-label="Toggle confirm password visibility"
            >
              {showConfirmPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M1 1l22 22M23 12c-3.5-5-7.5-9-11-9s-7.5 4-11 9 3.5 9 11 9 7.5-4 11-9z" />
                  <path d="M9 12c0 2.5 2 4.5 5 4.5s5-2 5-4.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M12 4.5C6 4.5 1.5 12 1.5 12S6 19.5 12 19.5 22.5 12 22.5 12 18 4.5 12 4.5z" />
                  <path d="M12 15.5a3.5 3.5 0 0 0 0-7" />
                </svg>
              )}
            </span>
          </div>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="submit-button">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

