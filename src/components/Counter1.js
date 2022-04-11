import { useDispatch, useSelector } from "../react-redux";
import actionCreators from "../store/actionCreators/counter1";

const Count1 = (props) => {
  const state = useSelector((state) => state.counterReduer1);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(actionCreators.minus())}>-</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch(actionCreators.add())}>+</button>
      <button onClick={() => dispatch(actionCreators.thunkAdd())}>addThunk</button>
    </div>
  );
};

export default Count1;
