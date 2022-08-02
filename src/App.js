import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import React, {useState} from 'react';
import Footer  from './components/footer/footer';
import Navbar  from './components/header/navbar';
import MyBody from './components/body/myBody'

function App() {
  const [selectedCart, setSelectedCart] = useState([]);
  const [indexSelectedCart, setIndexSelectedCart] = useState(0);
  const [listCart, setListCart] = useState([{index: 1, listItem :[]}]);
  console.log(selectedCart);
return (
  <div className="container bg">
    <Navbar cart = {selectedCart} setCart = {setSelectedCart} listCart = {listCart} setListCart = {setListCart} indexSelectedCart ={indexSelectedCart} setIndexSelectedCart = {setIndexSelectedCart}/>         
    <MyBody cart = {selectedCart} setCart = {setSelectedCart} listCart = {listCart} setListCart = {setListCart} indexSelectedCart ={indexSelectedCart} setIndexSelectedCart = {setIndexSelectedCart} />
    <Footer />
  </div>
  );
}
export default App;
