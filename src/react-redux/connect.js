import { useContext, useMemo, useState } from "react";
import ReactReduxContext from "./ReactReduxContext";
import { bindActionCreators } from "../redux";

function connect(mapStateToProps, mapDispathToProps) {
  // 返回一个函数，该函数接受一个组件
  return function (OldComponent) {
    // 返回一个新的组件函数组件（或者类组件），并且将store中的state，dispatch作为参数传入到新组件的props中
    return function (props) {
      const { store } = useContext(ReactReduxContext);
      const { dispatch, getState, subscribe } = store;
      // 取出store中的state
      const nextState = getState()
      const stateProps = useMemo(() => mapStateToProps(nextState), [nextState]);
      // mapDispathToProps可以是函数也可以是对象
      let dispatchProps;
      if (typeof mapDispathToProps === "function") {
        dispatchProps = mapDispathToProps(dispatch);
      } else if (typeof mapDispathToProps === "object") {
        // 如果是对象我们需要把dispatch和action关联起来
        dispatchProps = bindActionCreators(mapDispathToProps, dispatch);
      }
      // 这一步只是希望能更新组件，因为store中的state跟新时会触发subscribe中的函数
      // subscribe函数中调用setState能够触发组件重新渲染仅此而已～
      const [state, setState] = useState(0);
      subscribe(() => setState(state + 1));
      return <OldComponent {...stateProps} {...dispatchProps} />;
    };
  };
}

export default connect;
