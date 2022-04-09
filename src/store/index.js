import { createStore, combineReducers } from "../redux";

import counterReduer1 from "./reducers/counter1";
import counterReduer2 from "./reducers/counter2";

const rootReducer = combineReducers({
  counterReduer1,
  counterReduer2,
});

const store = createStore(rootReducer)

export default store