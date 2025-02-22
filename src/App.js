import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

// V2

function App() {
  return (
    <CartProvider>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
