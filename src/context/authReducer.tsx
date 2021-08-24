import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'SIGN_IN' }
  | { type: 'LOG_OUT' }
  | { type: 'CHANGE_FAV_ICON'; payload: string }
  | { type: 'CHANGE_USER_NAME'; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no user yet'
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      };
    case 'CHANGE_FAV_ICON':
      return {
        ...state,
        favoriteIcon: action.payload
      };
    case 'CHANGE_USER_NAME':
      return {
        ...state,
        username: action.payload
      };

    default:
      return state;
  }
};
