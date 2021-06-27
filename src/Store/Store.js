import {createStore} from 'redux'

import reducer from '../Reducer/Reducer.js'

const store = createStore(reducer)

export default store