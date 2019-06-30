export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    dispatch({ type: SIGN_IN });
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.emails, credentials.password)
      .then(() => {
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .then(err => {
        dispatch({ type: SIGN_IN_FAILURE });
      });
  };
};
