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
} from '../../constants'


const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onpress}) => {
    return( 
        <TouchableOpacity
            style = {{ 
                flexDirection: 'row',
                borderRadius : SIZES.radius,
                backgroundColor : COLORS.lightGray2,
                ...containerStyle
            }}
        > 

        {/* Image */}
            <Image 
                source = {item.image}
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

        </TouchableOpacity>
    )
}

export default HorizontalFoodCard