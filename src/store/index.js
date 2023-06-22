import {createStore} from "redux"

const reducer = (state ={value:"helo"},action)=>{
    console.log(action.payload)
    if(action.type == "change_value"){
        return {...state, value:action.payload}
    }
 

 return state
}

const Store = createStore(reducer)

export default Store