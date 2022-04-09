function createStore(reducer, initialState) {
    // 闭包变量
    let state = initialState;
    let listens = [];
  
    function dispatch(action) {
      state = reducer(state, action);
      listens.forEach((item) => item());
      return action; // 目前没啥用
    }
  
    function getState() {
      return state;
    }
  
    function subscribe(listen) {
      listens.push(listen);
      return () => {
        listens = listens.filter((item) => item !== listen);
      };
    }
  
    dispatch({
      type: "@@redux/INIT5.r.e.l.r.x.j",
    });
  
    return {
      dispatch,
      getState,
      subscribe,
    };
  }
  
  export default createStore