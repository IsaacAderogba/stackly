import * as types from "../actions/authActions";

const initState = {
  authError: null,
  signoutError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      console.log("BEGIN SIGN IN");
      return state;
    case types.SIGN_IN_SUCCESS:
      console.log("LOGIN SUCCESS");
      return {
        ...state,
        authError: null
      };
    case types.SIGN_IN_FAILURE:
      console.log("LOGIN FAILURE");
      return {
        ...state,
        authError: action.payload
      };
    case types.SIGN_OUT:
      console.log("BEGIN SIGN OUT");
      return state;
    case types.SIGN_OUT_SUCCESS:
      console.log("SIGNOUT SUCCESS");
      return {
        ...state,
        signoutError: null
      };
    case types.SIGN_OUT_FAILURE:
      console.log("SIGNOUT FAILURE");
      return {
        ...state,
        signoutError: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
