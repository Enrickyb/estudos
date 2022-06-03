### React-Redux

# Provider
const store = createStore(itemReducer)
<Provider store={store}>
<Filho1/>
<Filho2/>
</Provider>
 Os 2 filhos possuem acesso ao store (reducer)

 ## useSelector (hooks do redux)
    const contador = useSelector((state)=>{return state})
 <Filho1>
    <div>
        {contador}
    </div>
 <Filho1>

## Modificar estado
useDispatch() hooks do redux

dispatch({type:'tipodedispatch'})