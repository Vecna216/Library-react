import Nav from "./components/Nav";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Footer from "./components/Footer";
import Cart from "./pages/Cart.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, book]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/books' exact element={<Books books={books} />} />
          <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
          <Route path='/cart' element={<Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
