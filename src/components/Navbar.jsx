import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { cart } = useContext(CartContext);
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/carrito">Carrito ({cart.length})</Link>
      <Link to="/protegida">Ruta Protegida</Link>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;