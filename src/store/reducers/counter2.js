import { Add2, MINUS2 } from "../action-types";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add2:
      return {
        ...state,
        count: state.count + 1,
      };
    case MINUS2:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
