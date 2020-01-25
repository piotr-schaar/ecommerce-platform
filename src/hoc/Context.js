import React, { useReducer, createContext, useContext } from 'react';

export const initialState = {
  items: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] };
    default:
      return state;
  }
};
const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { state, dispatch };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
