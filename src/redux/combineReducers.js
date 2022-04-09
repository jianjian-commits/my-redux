function combineReducers(reducers) {
  // 合并后返回的也是一个reducer函数
  return function (state = {}, action) {
    // 用来存储各个reducer中的state值，键为每个reducer的名称
    let nextState = {};
    for (let key in reducers) {
      // state[key]表示该reduer对应state的上一次的值，将作为该reducer的initialState传入
      nextState[key] = reducers[key](state[key], action);
    }
    return nextState;
  };
}

export default combineReducers;
