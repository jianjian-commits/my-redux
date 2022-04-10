import { useContext, useLayoutEffect, useState } from "react";
import ReactReduxContext from "../ReactReduxContext";

function useDispatch() {
  const { store } = useContext(ReactReduxContext);

  const [state, setState] = useState(0);
  useLayoutEffect(() => {
    const res = store.subscribe(() => setState(state + 1));
    return () => res()
  }, [state, store]);

  return store.dispatch;
}

export default useDispatch;
