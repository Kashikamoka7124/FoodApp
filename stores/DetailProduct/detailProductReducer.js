import {DetailActionTypes} from "./actionTypes"
initialStates = {

    }


const detailProductReducer = (state = initialStates, {type, payload}) => {
    switch(type){

        case DetailActionTypes.SET_DETAIL_PRODUCTS: 
            return payload

        default: return state
    }
}

export default detailProductReducer