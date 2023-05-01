const SET_DATA = "SET_DATA";


export const setServerData = (data) => ({
    type:SET_DATA,
    data
})

const intitialState = {
    TodoData:undefined,
    isError:false,
    isLoading:true
}

const MainReducer = (state=intitialState , action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state, 
                TodoData : action.data.tododata,  
                isError:action.data.err, 
                isLoading:action.data.loading
            }    

        default:
            return state
    }

}



export default MainReducer;