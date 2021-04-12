const reducer = (state, action)=>{
    switch(action.type){
        case "add":
            return [...state, {...action.payload}]
        case "update":
            let newState = state.map(applicant =>{
                if(applicant.id == action.id){
                    return {...applicant, ...action.payload}
                }else{
                    return applicant
                }
            })
            return newState
        case "delete":
            return state.filter(x => x.id !== action.id)
        default:
            return state

    }
}
export default reducer