import { Add1, MINUS1, THUNKADD } from "../action-types";
const add = () => ({ type: Add1 });
const minus = () => ({ type: MINUS1 });
const thunkAdd = () => {
  return function (dispatch) {
    // 异步处理
    setTimeout(() => {
      dispatch({
        type: THUNKADD,
        value: 20
      })
    }, 2000);
  }
};

const actionCreators = {
  add,
  minus,
  thunkAdd
};

export default actionCreators;