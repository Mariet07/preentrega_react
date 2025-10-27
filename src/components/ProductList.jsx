import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar productos');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Productos</h2>
      <div className="product-grid">
        {products.map(prod => (
          <div key={prod.id} className="product-card">
            <h3>{prod.title}</h3>
            <img src={prod.image} alt={prod.title} width="100" />
            <p>${prod.price}</p>
            <button onClick={() => addToCart(prod)}>Agregar al carrito</button>
            <Link to={`/producto/${prod.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;