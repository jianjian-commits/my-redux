import { useContext } from "react";
import ReactReduxContext from "../ReactReduxContext";

function useSelector(selector) {
  const { store } = useContext(ReactReduxContext);
  const nextState = store.getState();
  const selectedState = selector(nextState);
  return selectedState;
}

export default useSelector;
