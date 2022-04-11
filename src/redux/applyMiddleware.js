import { compose } from "./index";

/**
 * 外部使用方式 applyMiddleware(thunk)(createStore)(rootReducer)
 * 接受一个中间件返回一个函数，返回的函数可以接受createStore
 * 再次返回一个函数接受reducer最后返回store
 * 中间价可以重写我们的dispatch方法，最终返回新的{...store, dispatch,}
 * @param {*} middleware
 * @returns
 */

// function applyMiddleware(middleware) {
//   return function (createStore) {
//     return function (reducer) {
//       const store = createStore(reducer);
//       const dispatch = middleware(store)(store.dispatch);
//       return {
//         ...store,
//         dispatch,
//       };
//     };
//   };
// }

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer) {
      const store = createStore(reducer);
      let dispatch;
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };
      // 将多个中间件一次调用 传入store.dispatch 每次调用中间件都会返回一个新的dispatch传到下一个中间价中
      let chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
}

export default applyMiddleware;
