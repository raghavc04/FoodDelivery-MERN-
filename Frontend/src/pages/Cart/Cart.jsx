import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import AppDownload from '../../components/AppDownload/AppDownload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({image}) => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    return acc + (cartItems[item._id] > 0 ? cartItems[item._id] * item.price : 0);
  }, 0);

  const deliveryFee = subtotal > 0 ? 40 : 0; // ₹40 fixed delivery fee
  const totalBeforeDiscount = subtotal + deliveryFee;
  const total = totalBeforeDiscount - discount;

  // Handle Promo Code Application
  const applyPromoCode = () => {
    if (promoCode === 'RAGHAVC04') {
      setDiscount(totalBeforeDiscount * 0.1); // 10% discount
      setDiscountPercentage(10);
      toast.success('✅ RAGHAVC04 applied! You got 10% off.');
    } else if (promoCode === 'SAVE15') {
      setDiscount(totalBeforeDiscount * 0.15); // 15% discount
      setDiscountPercentage(15);
      toast.success('🎉 SAVE15 applied! You got 15% off.');
    } else {
      setDiscount(0);
      setDiscountPercentage(0);
      toast.error('❌ Invalid Promo Code');
    }
  };

  return (
    <div className='cart'>
      <ToastContainer position="top-center" autoClose={2000} />
      
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={index}>
              <div className="cart-items-title cart-items-item">
                <img 
                  src={image}  // ✅ Use full image URL from API
                  alt={item.name} 
                  onError={(e) => e.target.src='/fallback-image.jpg'} 
                />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{cartItems[item._id] * item.price}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          );
        }
        return null;
      })}
      <hr />

      {/* Promo Code Section */}
      <div className="promo-code">
        <input
          type="text"
          placeholder="Enter Promo Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={applyPromoCode}>Apply</button>
      </div>

      {/* Subtotal, Delivery Fee, Discount, and Total */}
      <div className="cart-summary">
        <p>Subtotal: <span>₹{subtotal}</span></p>
        <p>Delivery Fee: <span>₹{deliveryFee}</span></p>

        {/* Show "Amount Before Coupon" only if a discount is applied */}
        {discount > 0 && <p>Amount Before Coupon: <span>₹{totalBeforeDiscount}</span></p>}

        {/* Show discount details only if applied */}
        {discount > 0 && <p>Discount ({discountPercentage}%): <span>-₹{discount}</span></p>}

        {/* Show the total based on discount condition */}
        <p className="cart-total">
          {discount > 0 ? 'Amount After Coupon' : 'Total Amount'}: <span>₹{total}</span>
        </p>

        <button onClick={() => navigate('/order')} className="checkout-btn">Proceed to Checkout</button>
      </div>

      <AppDownload />
    </div>
  );
}

export default Cart;