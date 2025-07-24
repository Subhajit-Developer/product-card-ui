import './index.css';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
