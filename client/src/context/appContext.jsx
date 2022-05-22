import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

const initialState = {
  isLoading: false,
  showAlert: true,
  alertText: '',
  alertType: '',
};

const AppContext = React.createContext(initialState);

/**
 * It takes in a child component, and returns a new component that wraps the child component in a
 * context provider
 * @returns The AppProvider is returning the AppContext.Provider with the value of the state and
 * dispatch.
 */
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        dispatch,
        clearAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
