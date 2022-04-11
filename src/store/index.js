import { createStore, combineReducers, applyMiddleware } from "../redux";
import logger from './logger'
import thunk from "./thunk";

import counterReduer1 from "./reducers/counter1";
import counterReduer2 from "./reducers/counter2";

const rootReducer = combineReducers({
  counterReduer1,
  counterReduer2,
});

// const store = createStore(rootReducer)
// const store = applyMiddleware(logger)(createStore)(rootReducer)
// const store = applyMiddleware(thunk)(createStore)(rootReducer)

// 使用多个中间件
const store = applyMiddleware(logger, thunk)(createStore)(rootReducer)


// let dispatch = store.dispatch
// store.dispatch = function (action) {
//   console.log('prev', store.getState());
//   dispatch(action)
//   console.log('next', store.getState());
// }

export default store