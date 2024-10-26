import React, { useState } from 'react'; // Importa useState desde React
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importa Router, Routes, Route y Navigate
import Login from './components/Login'; // Asegúrate de que las rutas son correctas
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard'; // Asegúrate de que Dashboard también está importado



const App = () => {
  const [users, setUsers] = useState([]); // Estado para manejar usuarios

  const handleRegister = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]); // Agrega el nuevo usuario al estado
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App; // Asegúrate de exportar el componente App
