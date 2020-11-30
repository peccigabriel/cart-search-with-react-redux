const INITIAL_STATE = {
  cart: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CART':
      return { ...state, cart: [...state.cart, action.cart] };
    case 'REMOVE_CART':
      state?.cart.splice(action.index, 1);
      return {
        ...state,
        cart: [...state.cart],
      };
    case 'ADD_QUANTITY':
      let moreQntd = state?.cart[action.index]?.quantity + 1;
      state.cart[action.index].quantity = moreQntd;
      return {
        ...state,
        cart: [...state.cart],
      };
    case 'REMOVE_QUANTITY':
      let minusQntde = state?.cart[action.index]?.quantity - 1;
      state.cart[action.index].quantity = minusQntde;
      return {
        ...state,
        cart: [...state.cart],
      };
    default:
      return state;
  }
}
