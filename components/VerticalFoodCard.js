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
} from '../constants'
import { SET_DETAIL_PRODUCT } from "../stores/DetailProduct/actions";
import {CART} from "../stores/cart/actions"
import { getImage } from "../constants/urls";
import {useSelector} from "react-redux"
import CartButton from "./CartButton/CartButton";
const VerticalFoodCard = ({containerStyle, item, onPress, navigation}) =>{
    // const cartItem = useSelector((state) => state.cartReducer.Item)
    const cartItem = useSelector((state) => state.cartReducer.Item)
    const selected = item?.id

    React.useEffect(() => {
        console.log("VerTicalFoodCArd", selected)
    },[])
    return (
        <TouchableOpacity
            style ={{
                width: 200,
                padding: SIZES.padding,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
            // onPress={onPress, navigation.navigate("FoodDetail")}
            onPress = {onPress}
        >

            {/* CALORIES AND FAVOURITE  */}
            <View 
                style ={{
                    flexDirection: 'row',
                }}
            >
                {/* CALORIES */}
                <View
                    style = {{
                        flex: 1,
                        flexDirection: 'row',
                        alignSelf: 'flex-start'
                    }}
                >
                    <Image
                        style = {{
                            width: 30,
                            height: 30,
                        }}
                        source = {icons.calories}
                    />
                    <Text
                        style = {{
                            color: COLORS.darkGray2, ...FONTS.body3
                        }}
                    >
                        {item.calories} Calories 

                    </Text>
                
                    
                </View>
                    {/* FAVOURITE  */}

                    {/* <Image
                        source = {icons.love}
                        style = {{
                            height: 20,
                            width: 20,
                            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray
                        }}
                    /> */}
                    <View
                        style={{
                            position: 'absolute',
                            top: -20,
                            right: -20
                        }}
                    >
                        {/* {cartButton(checkCart())} */}
                        <CartButton item = {selected} />

                    </View>

        </View>
            {/* IMAGE  */}

                <View
                    style = {{
                        height: 150, 
                        width: 150, 
                        alignItems: "center",
                        justifyContent: 'center',

                    }}
                >
                    <Image
                        source = {{uri: getImage(item.image)}}
                        // source = {item.image}

                        style = {{
                            height: '100%',
                            width: '100%',
                        }}
                    />

                </View>

            {/* INFO */}

                <View
                    style = {{
                        alignItems: 'center',
                        marginTop: -20
                    }}
                >
                    <Text
                     style = {{
                            ...FONTS.h3 
                    }}>
                     {item.name}
                     </Text>
                    <Text
                        style = {{
                            color : COLORS.darkGray2, 
                            alignItems: "center",
                            ...FONTS.body5
                        }}
                    numberOfLines = {2}

                    >
                        {item.description}
                    </Text>
                    <Text
                        style = {{
                            marginTop: SIZES.radius, ...FONTS.h2,
                        }}
                    >
                        ${item.price}
                    </Text>
                </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard
