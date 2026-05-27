
import { createStore } from 'redux'

// 1)Store
// 2)Actions Reducers
// 3)Dispatches

let initialstate={
    sum:1000
}
function reducer(state=initialstate,Actions){
      switch(Actions.type){
          case "a":
            console.log(Actions.payload)
            return {...state,
                sum:state.sum+1
            }
            //break;
            case "B":
                return {...state,
                    sum:state.sum-1
                }
                break;
                default:
                    return state
        }        
}

export let store=createStore(reducer)
//console.log(a)