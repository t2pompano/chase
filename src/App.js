
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from './data';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  }
  const onRefresh = (product) => {
    // console.log(product);
    const exist = cartItems.find((x) => x.id === product.id)
    let newCart = [];
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(newCart);
    }

  }
  const onSelect = (product) => {
    console.log(product);
    const randomObject = product[(Math.floor(Math.random() * product.length))];
    console.log(randomObject);
    let newCart = [randomObject];
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(newCart);
    }
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className='row'>
        <Main onAdd={onAdd} products={products} onRefresh={onRefresh} ></Main>
        <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} onRefresh={onRefresh} onSelect={onSelect}></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
