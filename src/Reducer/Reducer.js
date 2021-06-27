/**
*  这是用来接收action 并且处理state和action 返回 state
 * 
 */
const initState = {}
const reducer = (state = initState,action) => {
  console.log(state)
  switch (action.type) {
    case 'send_item':
      return Object.assign({},state,action)
    default:
      return state
  }
}

export default reducer