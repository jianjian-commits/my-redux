import { useDispatch, useSelector } from "../react-redux";
import actionCreators from "../store/actionCreators/counter2";

const Count2 = (props) => {
  const state = useSelector((state) => state.counterReduer2);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(actionCreators.minus())}>-</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch(actionCreators.add())}>+</button>
    </div>
  );
};

export default Count2;
