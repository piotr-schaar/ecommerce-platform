import React, { useReducer, createContext, useContext } from 'react';

export const initialState = {
  items: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const targetedProductById = state.items.filter(item => item.id === action.payload.id);
      if (targetedProductById.length) {
        const indexTargetedProduct = state.items.indexOf(targetedProductById[0]);
        return {
          ...state,
          items: state.items.map((content, i) =>
            i === indexTargetedProduct ? { ...content, quantity: content.quantity + 1 } : content,
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_ITEM': {
      const indexOfTargetProduct = state.items.indexOf(action.payload);
      if (state.items[indexOfTargetProduct].quantity === 1) {
        const arrWithRemovedProduct = state.items.filter(
          item => item != state.items[indexOfTargetProduct],
        );
        return {
          ...state,
          items: arrWithRemovedProduct,
        };
      }
      return {
        ...state,
        items: state.items.map((content, i) =>
          i === indexOfTargetProduct ? { ...content, quantity: content.quantity - 1 } : content,
        ),
      };
    }
    default:
      return state;
  }
};
const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { state, dispatch };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
