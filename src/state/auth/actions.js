export const signInSuccess = (data) => ({
  type: 'SIGN_IN_SUCCESS',
  payload: data,
});

export const signUpSuccess = (data) => ({
  type: 'SIGN_UP_SUCCESS',
  payload: data,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});
