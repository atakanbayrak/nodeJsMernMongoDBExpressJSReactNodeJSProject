const authReducer = (state = {auth:null}, action) => {
    switch (action.type) {
        case "Register":
            localStorage.setItem('auth',JSON.stringify(action.payload))
            return{
                ...state,
                auth: action.payload
            }
    
        case "Login":
            localStorage.setItem('auth',JSON.stringify(action.payload))
            return{
                ...state,
                auth: action.payload
            }
        case "Logout":
            localStorage.clear()
            return{
                ...state,
                auth: null
            }
        default:
            return state
    }
}

export default authReducer