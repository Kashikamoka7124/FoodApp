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
const VerticalFoodCard = ({containerStyle, item, onPress}) =>{
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
                        flexDirection: 'row'
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

                    <Image
                        source = {icons.love}
                        style = {{
                            height: 20,
                            width: 20,
                            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray
                        }}
                    />

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
                        source = {item.image}
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