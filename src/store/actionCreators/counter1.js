import { Add1, MINUS1 } from "../action-types";
const add = () => ({ type: Add1 });
const minus = () => ({ type: MINUS1 });

const actionCreators = {
  add,
  minus,
};

export default actionCreators;