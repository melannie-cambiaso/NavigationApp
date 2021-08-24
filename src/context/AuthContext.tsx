import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false
};

export interface AuthContextProps {
  authState: AuthState;
  sigIn: () => void;
  changeFavIcon: (payload: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const sigIn = () => {
    dispatch({ type: 'SIGN_IN' });
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({ type: 'CHANGE_FAV_ICON', payload: iconName });
  };

  const logOut = () => {
    dispatch({ type: 'LOG_OUT' });
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        sigIn,
        changeFavIcon,
        logOut
      }}>
      {children}
    </AuthContext.Provider>
  );
};
