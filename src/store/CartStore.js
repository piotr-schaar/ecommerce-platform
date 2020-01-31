import React, { useReducer, createContext, useContext } from 'react';
import { products } from 'utils/dummyData';

export const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  ADD_QUANTITY: 'ADD_QUANTITY',
  REMOVE_QUANTITY: 'REMOVE_QUANTITY',
};

export const initialState = {
  items: products,
  cartItems: [],
  total: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      let newItem = state.items.find(item => item.id === action.payload);
      let isExistInCartItems = state.cartItems.find(item => item.id === action.payload);
      if (isExistInCartItems) {
        newItem.quantity += 1;
        return {
          ...state,
          total: state.total + newItem.price,
        };
      } else {
        newItem.quantity = 1;
        let newTotal = state.total + newItem.price;
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          total: newTotal,
        };
      }
    }

    case actionTypes.REMOVE_ITEM: {
      let removedItem = state.cartItems.find(item => item.id === action.payload);
      let updatedList = state.items.filter(item => item.id === action.payload);
      let newTotal = state.total - removedItem.price * removedItem.quantity;
      return {
        ...state,
        cartItems: updatedList,
        total: newTotal,
      };
    }

    case actionTypes.ADD_QUANTITY: {
      console.log('action:', action.payload);
      console.log(state.items);
      let newItem = state.items.find(item => item.id === action.payload);
      console.log('TCL: cartReducer -> newItem', newItem);

      newItem.quantity += 1;
      let newTotal = state.total + newItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    case actionTypes.REMOVE_QUANTITY: {
      console.log(state.items);
      let newItem = state.items.find(item => item.id === action.payload);
      if (newItem.quantity === 1) {
        let updatedList = state.cartItems.filter(item => item.id !== action.payload);
        let newTotal = state.total - newItem.price;
        return {
          ...state,
          cartItems: updatedList,
          total: newTotal,
        };
      } else {
        newItem.quantity -= 1;
        let newTotal = state.total - newItem.price;
        return {
          ...state,
          total: newTotal,
        };
      }
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
