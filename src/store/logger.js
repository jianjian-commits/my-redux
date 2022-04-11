function logger({ getState, dispatch }) {
  return function (next) { // next相当于dispatch
    return function (action) { // {type: xxx}
      console.log("prev", getState());
      next(action);
      console.log("next", getState());
    };
  };
}

export default logger;
