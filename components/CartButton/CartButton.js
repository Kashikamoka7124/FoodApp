import React from "react";
import { View,
    Text, 
    TouchableOpacity,
    Image,
    ImageEditor,
} from "react-native"
import {
    COLORS,
    FONTS, 
    icons, 
    SIZES
} from '../../constants'
import {ADDCART} from "../../stores/cart/actions"

import {useSelector, useDispatch} from "react-redux"

const CartButton =({ 
    item
}) => {


    const userData = useSelector((state) => state.registrationReducer.AuthState)
    const cartItem = useSelector((state) => state.cartReducer.Item)
    const dispatch = useDispatch()

        return(
            <>
                { cartItem?.find(a => a.product_id === item) ?

                    <View
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: SIZES.radius,
                            color: COLORS.gray,
                            alignSelf: 'center'
                        }}
                        >
                        <Image 
                            source={icons.check_circle}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.gray
                            }}
                        />
                    </View>

                :
                    <TouchableOpacity
                        onPress={() => ADDCART({
                            'token': userData?.token,
                            'product_id': item,
                            'no': "1"
                        })}
                    >

                    <Image
                        source = {icons.cart}
                        style = {{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray,
                        }}
                        
                    />
                    </TouchableOpacity>

                }    
            
        </>
        )
}

export default CartButton