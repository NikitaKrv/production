import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {

};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthDate: (state, action: PayloadAction<User>) => {
      state.authDate = action.payload;
    },
    initAuthDate: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authDate = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authDate = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
