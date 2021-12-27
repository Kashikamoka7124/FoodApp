import {ProductActionTypes} from "./actionsTypes"
initialStates = {
    Item: {
        categories: null,
        products:null
    }
    }


const productReducer = (state = initialStates, {type, payload}) => {
    switch(type){
        case ProductActionTypes.GET_PRODUCTS: 
            data = payload
            return {
                Item: data
            };

        default: return state
    }
}

export default productReducer