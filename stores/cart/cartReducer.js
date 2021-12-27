import { CartActionTypes } from "./cartActionTypes";
initialStates = {
    Item: {

    },
    Total: 0
}


const cartReducer = (state = initialStates, {type, payload}) => {
    switch(type){
        case CartActionTypes.SET_CART: 
            data = payload
            return {
                Item: data
            };
        case CartActionTypes.ADD_CART: 
            data = payload
            item_in_cart = state.Item.find(a => a.product_id === payload.product_id)
            return {...state,
                Item: item_in_cart
                    ? 
                        state.Item.map(a => a.product_id === payload.product_id
                            ?
                                {...a, quantity: payload.quantity}
                            :
                                 a
                            )
                    : 
                        [...state.Item, {...payload}]};


        case CartActionTypes.ADD_QTY:
            item_in_cart = state.Item.find(a => a.product_id === payload.product_id)
            return{
                ...state,
                    Item: 
                        item_in_cart
                        ?
                            state.Item.map(a => a.product_id === payload.product_id
                            ?
                                {...a, quantity: a.quantity + 1}
                            :
                                a
                            )
                        :   
                            [...state.Item, {...payload}]
            }

        case CartActionTypes.MINUS_QTY:
            item_in_cart = state.Item.find(a => a.product_id === payload.product_id)
            return{
                ...state,
                    Item: 
                        item_in_cart
                        ?
                            state.Item.map(a => a.product_id === payload.product_id
                            ?
                                {
                                    ...a, quantity: a.quantity > 1
                                    ? 
                                        (a.quantity - 1)
                                    :
                                        1
                                }
                            :
                                a
                            )
                        :   
                            [...state.Item, {...payload}]
            }
        case CartActionTypes.REMOVE_ITEM_CART:
            return{
                ...state, 
                        Item: state.Item.filter(item => item.product_id !== payload.product_id)
            }            
        case CartActionTypes.GET_CART:
            return state

        default: return state
    }
}

export default cartReducer