import { Add1, MINUS1, THUNKADD } from "../action-types";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add1:
      return {
        ...state,
        count: state.count + 1,
      };
    case MINUS1:
      return {
        ...state,
        count: state.count - 1,
      };
    case THUNKADD:
      return {
        ...state,
        count: state.count + action.value
      };
    default:
      return state;
  }
};

export default reducer;
