
export default function CounterReducer(state = 1, action){

    const incrementAction = 'INCREMENT'
    const decrementAction = 'DECREMENT'


switch (action.type) {

    case 'INCREMENT':
        return state + 1

    case 'DECREMENT': 
    if(state > 0){
    return state - 1
    }else{
        return state
    }
    default:
        return state
}
}