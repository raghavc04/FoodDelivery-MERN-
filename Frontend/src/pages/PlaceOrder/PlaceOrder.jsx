import React, { useState, useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppDownload from '../../components/AppDownload/AppDownload';

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'Credit Card'
  });

  // Calculate Cart Total
  const subtotal = food_list.reduce((acc, item) => acc + (cartItems[item._id] > 0 ? cartItems[item._id] * item.price : 0), 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  // Handle Form Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.city || !formData.postalCode) {
      toast.error('❌ Please fill in all required fields.');
      return;
    }
    toast.success('✅ Order placed successfully!');
  };

  return (
    <div className='place-order'>
      <ToastContainer position="top-center" autoClose={2000} />
      
      <form className="place-order-form" onSubmit={handleSubmit}>
        <h2>Place Your Order</h2>

        {/* Personal Details */}
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        {/* Address Details */}
        <div className="form-group">
          <label>Street Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>

        {/* Payment Method */}
        <div className="form-group">
          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: <span>₹{subtotal}</span></p>
          <p>Delivery Fee: <span>₹{deliveryFee}</span></p>
          <p className="cart-total">Total: <span>₹{total}</span></p>
        </div>

        <button type="submit" className="place-order-btn">Confirm Order</button>
      </form>

      {/* Mobile App Component */}
      <div className="app-download-container">
        <AppDownload />
      </div>
    </div>
  );
}

export default PlaceOrder;