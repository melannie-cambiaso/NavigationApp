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
  logOut: () => void;
  changeFavIcon: (payload: string) => void;
  changeUserName: (userName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const sigIn = () => {
    dispatch({ type: 'SIGN_IN' });
  };
  const logOut = () => {
    dispatch({ type: 'LOG_OUT' });
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({ type: 'CHANGE_FAV_ICON', payload: iconName });
  };

  const changeUserName = (userName: string) => {
    dispatch({ type: 'CHANGE_USER_NAME', payload: userName });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        sigIn,
        logOut,
        changeFavIcon,
        changeUserName
      }}>
      {children}
    </AuthContext.Provider>
  );
};
