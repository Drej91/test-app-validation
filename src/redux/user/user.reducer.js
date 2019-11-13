const INITIAL_STATE = {
    currentUser: null
    //object with initial state
}

//adding initial state to state as default parametar value, which is ES6 feature for functions
//if state is ever undefined, not set, then it will fallback and leverage this state value
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
        return state;
    }
}

export default userReducer;