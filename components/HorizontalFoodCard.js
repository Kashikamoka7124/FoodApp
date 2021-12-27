import React from 'react'
import { TouchableOpacity,
    View, 
    Image,
    Text
} from 'react-native'
import { COLORS,
    SIZES,
    FONTS,
    icons
} from '../constants'
import { getImage } from '../constants/urls'
import { SET_DETAIL_PRODUCT } from '../stores/DetailProduct/actions'
import CartButton from './CartButton/CartButton'


const cartButton = (exist) => {
    return(
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: "center",
                borderRadius: SIZES.radius,
                // backgroundColor: COLORS.lightOrange2,
            }}
        >
         {exist
            ?

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

                <Image
                    source = {icons.cart}
                    style = {{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray,
                    }}
                    
                />
     
         }   
        
        </TouchableOpacity>
    )
}


const HorizontalFoodCard = ({ containerStyle, imageStyle, cartAdded, item, onPress}) => {
    return( 
        <TouchableOpacity
            style = {{ 
                flexDirection: 'row',
                borderRadius : SIZES.radius,
                backgroundColor : COLORS.lightGray2,
                ...containerStyle
            }}
            onPress = {onPress}
        > 

        {/* Image */}
            <Image 
                source = {{uri: getImage(item.image)}}
                // source = {item.image}

                style = {imageStyle}

            />
        {/* INFO */}

            <View
                style = {{
                    flex: 1,
                }}
            >

                {/* NAME */}
                <Text
                    style = {{
                        ...FONTS.h3,
                        fontSize: 17
                    }}
                
                > {item.name}</Text>
                {/* DESCRIPTION */}
                <Text 
                    style = {{
                        marginTop : SIZES.base,
                        ...FONTS.body4
                    }}
                    numberOfLines = {1}
                >
                    {item.description}
                </Text>

                {/* PRICE */}

                <Text
                    style ={{
                        marginTop: SIZES.base,
                        ...FONTS.h2
                    }}
                > ${item.price}</Text>
            </View>

        {/* CALORIES */}

            <View
                style = {{
                    flexDirection: 'row',
                    position: 'absolute',
                    top : 5,
                    right : SIZES.radius,

                }}

            >

                {/* IMAGE */}
                <Image
                    source  = {icons.calories}
                    style = {{
                        width: 30,
                        height: 30,
                        
                    }}
                />

                {/* CALORIES TEXT */}

                <Text
                    style = {{
                        color: COLORS.darkGray2,
                        ...FONTS.body5,
                    }}
                >
                    {item.calories} Calories

                </Text>

            </View>

            <View
                style={{
                    alignSelf: 'flex-end'
                }}
            >
               <CartButton item = {item?.id} />
            </View>

        </TouchableOpacity>
    )
}

export default HorizontalFoodCard
