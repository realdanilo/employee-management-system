import {v4 as uuid} from "uuid"
const reducer = (state, action)=>{
    switch(action.type){
        case "add":
            return [...state, {id:uuid(), firstName:state.firstName, lastName:state.lastName, email:state.email, jobs:state.jobs}]

    }
}
export default reducer