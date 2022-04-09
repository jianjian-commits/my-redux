import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import store from "../store";
import actionCreators from '../store/actionCreators/counter2'

const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);

const Count1 = () => {
  const [count1, setCount1] = useState(store.getState().counterReduer2.count);

  useEffect(() => {
    const res = store.subscribe(() => {
      setCount1(store.getState().counterReduer2.count);
    });
    return () => res();
  }, []);

  return (
    <div>
      <button onClick={boundActionCreators.minus}>-</button>
      <p>{count1}</p>
      <button onClick={boundActionCreators.add}>+</button>
    </div>
  );
};

export default Count1;
