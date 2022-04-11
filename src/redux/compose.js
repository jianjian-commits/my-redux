function add1 (str) {
    return '1' + str
}

function add2 (str) {
    return '2' + str
}

function add3 (str) {
    return '3' + str
}

function compose(...funs) {
    return function (args) {
        for (let i = funs.length - 1; i >= 0; i--) {
            args = funs[i](args)
        }
        return args
    }
}

// function compose(...funs) {
//     return funs.reduce((a, b) => (...args) => a(b(...args)))
// }

const fn = compose(add3, add2, add1)
const result = fn('hello')
console.log(result); 