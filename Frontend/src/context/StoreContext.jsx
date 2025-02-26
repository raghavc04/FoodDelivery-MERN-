import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:8000";
  const [token, setToken] = useState('');
  const [foodList, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems({ ...cartItems, [itemId]: 1 });
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId}, {headers:{token}});
    }
  };

  const removeFromCart = async (itemId) => {
    if (!cartItems[itemId] || cartItems[itemId] <= 0) return; // Prevent removing non-existing items
  
    try {
      if (token) {
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
      }
  
      setCartItems((prev) => {
        const updatedItems = { ...prev };
        if (updatedItems[itemId] > 1) {
          updatedItems[itemId] -= 1; // Reduce quantity
        } else {
          delete updatedItems[itemId]; // Remove item if quantity becomes 0
        }
        return updatedItems;
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data);

  }

  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{}, {headers:{token}});
    setCartItems(response.data.cartData);
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        await loadCartData(localStorage.getItem('token'))
      }
    }
    loadData();
 
  },[])
  

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;