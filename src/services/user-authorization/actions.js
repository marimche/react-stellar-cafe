import { createAction } from '@reduxjs/toolkit';

export const register = createAction('user-authorization/register', (data) => {
  return {
    payload: data,
  };
});

export const recoveryPassword = createAction(
  'user-authorization/recoveryPassword',
  (email) => {
    return {
      payload: email,
    };
  }
);

export const login = createAction('user-authorization/login', () => {
  return {
    payload: {},
  };
});

export const logout = createAction('user-authorization/logout', () => {
  return {
    payload: {},
  };
});

export const refreshToken = createAction('user-authorization/refreshToken', () => {
  return {
    payload: {},
  };
});

export const getUserData = createAction('user-authorization/getUserData', () => {
  return {
    payload: {},
  };
});

export const updateUserData = createAction('user-authorization/updateUserData', () => {
  return {
    payload: {},
  };
});
