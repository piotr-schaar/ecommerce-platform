import React, { useReducer, createContext, useContext, useEffect } from 'react';
import { products } from 'utils/dummyData';
import useLocalStorage from 'utils/useLocalStorage';

export const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  ADD_QUANTITY: 'ADD_QUANTITY',
  REMOVE_QUANTITY: 'REMOVE_QUANTITY',
  PULL_DATA: ' PULL_DATA',
};

export const initialState = {
  items: products,
  cartItems: [],
  total: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      let newItem = action.payload;
      let isExistInCartItems = state.cartItems.find(item => item.id === newItem.id);
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

    case actionTypes.ADD_QUANTITY: {
      let newItem = state.cartItems.find(item => item.id === action.payload);
      newItem.quantity += 1;
      let newTotal = state.total + newItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    case actionTypes.REMOVE_QUANTITY: {
      let newItem = state.cartItems.find(item => item.id === action.payload);
      if (newItem.quantity === 1) {
        let updatedList = state.cartItems.filter(item => item.id !== action.payload);
        let newTotal = state.total - newItem.price;
        return {
          ...state,
          cartItems: [...updatedList],
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

    case actionTypes.PULL_DATA: {
      return {
        ...state,
        cartItems: action.payload.cartItems,
        total: action.payload.total,
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
  const [localValue, setLocalValue] = useLocalStorage('cart');

  const setDataToLocalStorage = () => {
    const { cartItems, total } = state;

    const updatedData = cartItems.length && JSON.stringify({ cartItems, total });
    setLocalValue(updatedData);
  };

  const getDataFromLocalStorage = () => {
    const parsedLocalValue = JSON.parse(localValue);
    if (parsedLocalValue) {
      dispatch({
        type: actionTypes.PULL_DATA,
        payload: parsedLocalValue,
      });
    }
  };

  useEffect(() => {
    setDataToLocalStorage();
  }, [state]);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
