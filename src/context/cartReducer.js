export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        // ...state,
        // cart: [...state.cart, state.cart.push(action.payload)],
        // totalItems: state.totalItems + action.payload,
        // totalPrice: state.totalPrice + action.payload,
      };
    case 'REMOVE':
      return {
        // ...state,
        // cart: [
        //   ...state.cart,
        //   state.cart.filter(item => !item === action.payload),
        // ],
        // totalItems: state.totalItems + action.payload,
        // totalPrice: state.totalPrice + action.payload,
      };
    default:
      return state;
  }
};
