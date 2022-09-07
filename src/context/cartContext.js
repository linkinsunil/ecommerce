import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';
import { faker } from '@faker-js/faker';

const CartContext = createContext();

faker.seed(99);

const CartProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.nature(200, 200, true),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    color: faker.color.human(),
    cat: faker.helpers.arrayElement(['men', 'women', 'kids']),
    size: faker.helpers.arrayElement([{ xs: 5, s: 6, m: 7, l: 8, xl: 9 }]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    wishlist: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
