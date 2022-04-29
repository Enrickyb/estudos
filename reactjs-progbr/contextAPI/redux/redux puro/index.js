const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const {incrementAction, decrementAction} = require('./actions/CounterActions')
const {addItemAction} = require('./actions/ListActions')
const counterReducer = require('./reducers/CounterReducer')
const listReducer = require('./reducers/ListReducer')


// -------------------




const allReducers = combineReducer({
    counter: counterReducer,
    list: listReducer
})
//////////
const store = createStore(allReducers)
store.dispatch(addItemAction('Um novo item'))
////////////

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(incrementAction())
