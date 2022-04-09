/**
 * 绑定action创建者和仓库的dispatch方法
 * 或自动派发aciton
 * @param {*} actionCreators 
 * @param {*} dispatch 
 * @returns 
 */

function bindActionCreators(actionCreators, dispatch) {
    const boundActionCreators = {}
    for (let key in actionCreators) {
        boundActionCreators[key] = bindActionCreator(actionCreators[key], dispatch)
    }
    return boundActionCreators
}


/**
 * 给每个actionCreator绑定dispatch方法
 * @param {*} actionCreator 
 * @param {*} dispatch 
 */
function bindActionCreator(actionCreator, dispatch) {
    return function () {
        return dispatch(actionCreator())
    }
}

export default bindActionCreators;