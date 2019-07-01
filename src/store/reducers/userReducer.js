import * as types from "../actions/userActions";

const initState = {
  isDark: true,
  error: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE:
      console.log("PROFILE UPDATE");
      return state;
    case types.UPDATE_FAILED:
      console.log("PROFILE UPDATE FAILED");
      return state;
    default:
      return state;
  }
};

export default userReducer;
