import { Add2, MINUS2 } from "../action-types";
const add = () => ({ type: Add2 });
const minus = () => ({ type: MINUS2 });

const actionCreators = {
  add,
  minus,
};

export default actionCreators;