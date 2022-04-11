// function compose(...funs) {
//   return function (args) {
//     for (let i = funs.length - 1; i >= 0; i--) {
//       args = funs[i](args);
//     }
//     return args;
//   };
// }

function compose(...funs) {
    return funs.reduce((a, b) => (...args) => a(b(...args)))
}

export default compose;
