import { ActionTypes } from "./actionsTypes";

initialStates = {
    AuthState: {
     token: "",
     LoggedIn: false,   
    }
    }


const registrationReducer = (state = initialStates, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_LOGGED_IN: 
            data = payload
            return {
                AuthState: data
            };

        case ActionTypes.SET_LOGGED_OUT: 
            data = payload
            return {
                AuthState: data
            };
        case ActionTypes.CHECK_STATUS:
            return state;
        default: return state
    }
}

export default registrationReducer