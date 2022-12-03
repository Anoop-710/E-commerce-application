import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const products = null
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
           
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;