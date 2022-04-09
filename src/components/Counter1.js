import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import store from "../store";
import actionCreators from '../store/actionCreators/counter1'

const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);

const Count1 = () => {
  const [count1, setCount1] = useState(store.getState().counterReduer1.count);

  useEffect(() => {
    const res = store.subscribe(() => {
      setCount1(store.getState().counterReduer1.count);
    });
    return () => res();
  }, []);
  
  console.log(store.getState());

  return (
    <div>
      <button onClick={boundActionCreators.minus}>-</button>
      <p>{count1}</p>
      <button onClick={boundActionCreators.add}>+</button>
    </div>
  );
};

export default Count1;
