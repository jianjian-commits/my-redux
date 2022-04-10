import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "../react-redux";
import actionCreators from "../store/actionCreators/counter1";
import { Add1, MINUS1 } from "../store/action-types";

const Count1 = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={props.minus}>-</button>
      <p>{props.count}</p>
      <button onClick={props.add}>+</button>
    </div>
  );
};

export default connect(
  (state) => {
    return state.counterReduer1;
  },
  // actionCreators
  (dispatch) => ({
    add: () => {
      dispatch({
        type: Add1,
      });
    },
    minus: () => {
      dispatch({
        type: MINUS1,
      });
    }
  })
)(Count1);
