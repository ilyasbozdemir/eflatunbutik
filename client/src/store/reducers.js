import * as constants from "./constants";

const initialState = {
  loginState: true,
};

export default function store(state = initialState, action) {
  const actions = action;
  switch (actions.type) {
    case constants.SET_LOGIN_STATE: {
      return {
        ...state,
        loginState: action.value,
      };
    }
    default: {
      return state;
    }
  }
}
