export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            qty: 1,
          },
        ],
        // ...state,
        // cart: state.cart.some(el => el.id === action.payload.id)
        //   ? (state.cart.filter(el => el.id === action.payload.id)[0].qty += 1)
        //   : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter(item =>
          item.id === action.payload.id
            ? (item.qty = action.payload.qty)
            : item.qty
        ),
      };
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
      };
    case 'SORT_BY_PRICE':
      return { ...state, sortByPrice: action.payload };
    case 'FILTER_BY_CATEGORY':
      return {
        ...state,
        filterByCategory: state.filterByCategory.includes(action.payload)
          ? state.filterByCategory.filter(cat => cat !== action.payload)
          : state.filterByCategory.concat(action.payload),
      };
    case 'FILTER_BY_PRICE':
      console.log(action.payload);
      return { ...state, filterByPrice: action.payload };
    case 'FILTER_BY_RATING':
      return { ...state, filterByRating: action.payload };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        sortByPrice: null,
        filterByCategory: [],
        filterBySize: null,
        filterByPrice: null,
        filterByRating: null,
      };
    default:
      return state;
  }
};
