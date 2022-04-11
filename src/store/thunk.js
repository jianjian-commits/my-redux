// thunk(store)(store.dispatch)

/**
 * 默认情况下dispatch只能派发一个对象{type: xxx}
 * thunk中间件能够让react中dispatch一个函数，该函数的参数为dispatch
 * 此时我们就可以在我们的函数中执行一些异步逻辑，最后在调用传入的dispatch
 * @param {*} param0
 * @returns
 */
function thunk({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      // 是函数就返回一个函数，并且再次将dispatch传入到该函数中
      if (typeof action === "function") {
        return action(dispatch, getState);
      }
      return next(action);
    };
  };
}

export default thunk;
