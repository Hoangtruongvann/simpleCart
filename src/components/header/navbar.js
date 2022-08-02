import React, {useState} from 'react';
import listItem from '../../data/listItem'

const Navbar = ({cart,setCart,listCart, setListCart,indexSelectedCart,setIndexSelectedCart}) => {
  const [isSearch, setSearch] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const filter = (searchKey) => {
    if(searchKey === '')
    return listItem;
  else 
    {
      return listItem.filter(item => item.name.includes(searchKey) || item.name.includes(searchKey.toUpperCase()) || item.name.includes(searchKey.toLowerCase()) );
    }
}
const addItemToCart = async (item) => {
  let itemAdd = {};
  if(!cart.find(cartItem => cartItem.id === item.id ))
  {
    itemAdd = {...item,quantity:1, subTotal: item.cost};
    setCart([...cart,itemAdd]);
  } else {
    let newCart = cart.map((itemInCart) =>{
      if(itemInCart.id === item.id){
          itemInCart.quantity+=1;
          return itemInCart;
      }
      return itemInCart;
    })
    await setCart(newCart);
  }
};
const createCart = async () => {
  let newListCart = [...listCart];
  newListCart[indexSelectedCart].listItem = cart;
  await setListCart(newListCart);
  if(listCart.length <3){
    await setListCart([...listCart,{index:listCart.length+1,listItem:[]}]);
    setCart([]);
    setIndexSelectedCart(listCart.length);
  } else {
    alert('Vui lòng không tạo quá nhiều đơn hàng cùng lúc!!!');
  }};
const deleteCart = async (cart) => {
  if(listCart.length >1)
  {
    await setListCart(listCart.filter((item) => item!==cart));
    setCart(listCart[0].listItem);
    setIndexSelectedCart(0);
  }
}
const changeCart = async (index) => {
  let newListCart = [...listCart];
  newListCart[indexSelectedCart].listItem = cart;
  await setListCart(newListCart);
  setCart(listCart[index].listItem);
  setIndexSelectedCart(index);
}
    return (
     <div onMouseLeave={()=>{setSearch(false)}}>
       <div className="navbar row">
              <div className= "search-form col-8">
                  <input autocomplete="off"  className="form-control search" type="text" placeholder='Tìm hàng hóa' id = "search" onClick = {()=>{setSearch(true);}} onChange = {(e)=>{setSearchKey(e.target.value)}}/>
                 <span> <i className="fa fa-qrcode" aria-hidden="true"></i> </span> 
                {listCart.map((cart,index)=> {return (  
                <span className ={`cart-tab ${index === indexSelectedCart?'active-tab':''}`}> 
                <span onClick={()=>{changeCart(listCart.indexOf(cart))}}> 
                <span class ="exchange"><i class="fa fa-exchange" aria-hidden="true"></i>
                </span> Đơn hàng {listCart.indexOf(cart)+1}</span> {listCart.length >1 && <span class ="cancel" onClick={()=>{deleteCart(cart)}}><i className="fa fa-times" aria-hidden="true"></i></span>}
                </span>
                )})}
                <span class = "add-cart" onClick={()=> createCart()}><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
              </div>




              <div className= "navbar-icon col-4">
              <ul>
                          <li><i className="fa fa-shopping-bag" aria-hidden="true"></i></li>
                          <li><i className="fa fa-reply" aria-hidden="true"></i></li>
                          <li><i className="fa fa-refresh" aria-hidden="true"></i></li>
                          <li><i className="fa fa-print" aria-hidden="true"></i></li>
                          <li><i className="fa fa-bars" aria-hidden="true"></i></li>
                      </ul>
              </div>
          </div>
          {isSearch && (
            <div className ="shop-list">
      <ul>
      {filter(searchKey).map((item) => (
       <div>
        <li onClick = {()=>{addItemToCart(item)}}>
          {item.name}
        </li>
       
       </div>
      ))}
    </ul>
    </div>
    )}
     </div>
    );
  }
  export default Navbar;