import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { BookDetail } from './pages/BookDetail';
import { CartPage } from './pages/CartPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';
import './index.css';

function App() {
  const { cart, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar cartItemsCount={cartItemsCount} onSearch={setSearchTerm} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage searchTerm={searchTerm} onAddToCart={addToCart} />} />
            <Route path="/book/:id" element={<BookDetail onAddToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;