import { createContext, useContext, useReducer } from 'react';
import { products } from '../data';
import { cartReducer } from './cartReducer';

const CartContext = createContext();

const initialState = {
  products: products,
  cart: [],
  wishlist: [],
  sortByPrice: null,
  filterByCategory: [],
  filterByPrice: null,
  filterByRating: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
