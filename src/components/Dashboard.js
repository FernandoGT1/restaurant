import React, { useState } from 'react';
import './Dashboard.css'; // Asegúrate de crear este archivo CSS
import 'font-awesome/css/font-awesome.min.css'; // Importa Font Awesome

const Dashboard = () => {
  // Datos de ejemplo para las categorías y productos
  const categories = ['Todas', 'ALIMENTOS', 'BEBIDAS', 'Z CABINAS', 'ESPECIAL DEL DIA'];
  const products = [
    { id: 1, name: 'Producto 1', image: 'url-de-imagen-1.jpg', price: 10 },
    { id: 2, name: 'Producto 2', image: 'url-de-imagen-2.jpg', price: 15 },
    { id: 3, name: 'Producto 3', image: 'url-de-imagen-3.jpg', price: 20 },
    { id: 4, name: 'Producto 4', image: 'url-de-imagen-1.jpg', price: 12 },
    { id: 5, name: 'Producto 5', image: 'url-de-imagen-2.jpg', price: 18 },
    { id: 6, name: 'Producto 6', image: 'url-de-imagen-3.jpg', price: 25 },
    { id: 7, name: 'Producto 7', image: 'url-de-imagen-1.jpg', price: 22 },
    { id: 8, name: 'Producto 8', image: 'url-de-imagen-2.jpg', price: 30 },
    { id: 9, name: 'Producto 9', image: 'url-de-imagen-3.jpg', price: 28 },
  ];

  // Estado para el carrito
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1, discount: 0 }];
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-buttons">
          <button className="header-button">
            <i className="fa fa-search" aria-hidden="true"></i> {/* Icono de búsqueda */}
          </button>
          <button className="header-button">
            <i className="fa fa-user" aria-hidden="true"></i> {/* Icono de cliente */}
          </button>
          <button className="header-button">
            <i className="fa fa-print" aria-hidden="true"></i> {/* Icono de impresora */}
          </button>
          <button className="header-button">
            <i className="fa fa-dollar" aria-hidden="true"></i> {/* Icono de moneda */}
          </button>
          <button className="header-button">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i> {/* Icono de más */}
          </button>
        </div>
      </header>
      <div className="dashboard-content">
        <nav className="categories">
          <h3>Categorías</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="category-item">
                <i className="fa fa-tags category-icon" aria-hidden="true"></i> {/* Icono de etiquetas */}
                {category}
                {index < categories.length - 1 && <hr className="category-separator" />} {/* Separador */}
              </li>
            ))}
          </ul>
        </nav>
        <main className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </main>
        <aside className="cart">
          <h3>Carrito de Compras</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Descuento: {item.discount} %</p>
                  <p>Total: ${((item.price - (item.price * item.discount / 100)) * item.quantity).toFixed(2)}</p>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  <i className="fa fa-trash" aria-hidden="true"></i> {/* Icono de eliminar */}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;

