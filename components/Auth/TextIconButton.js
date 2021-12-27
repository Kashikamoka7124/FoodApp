import React from "react";
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import {
    FONTS,
    SIZES,
    COLORS,
} from '../../constants'


const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress
}) => {
    return(
        <TouchableOpacity
            style = {{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress = {onPress}
        >
            {/* LEFT ICON  */}

            {iconPosition == "LEFT" && 
                <Image
                    source = {icon}
                    style = {{
                        ...styles.image,
                        ...iconStyle
                    }}
                />
            }

            {/* LABEL  */}
            <Text
                style = {{
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>

            {/* RIGHT ICON  */}

            {iconPosition == "RIGHT" && 
                <Image
                    source = {icon}
                    style = {{
                        ...styles.image,
                        ...iconStyle,
                    }}
                />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.black
    }
})

export default TextIconButton