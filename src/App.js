import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

import Order from './Order';
import Prime from './Prime';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/Prime'  element={<Prime/>}/> 
        <Route path='/Order'  element={<Order/>}/> 
        <Route path='/login'  element={<Login/>}/> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
