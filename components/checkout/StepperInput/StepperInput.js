import React from "react"
import {
    View,
    Text,
    Image
} from "react-native"
import IconButton from "../IconButton/IconButton"

import {
    FONTS,
    COLORS,
    icons,
    SIZES
} from '../../../constants'

const StepperInput = ({
    containerStyle,
    value = 1,
    onAdd,
    onMinus,
    textStyle,
    textViewStyle,
}) => {
    return (
        <View
            style = {{
                flexDirection : 'row',
                height: 60,
                width: 130,
                backgroundColor: COLORS.lightGray2,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
        >
            {/* MINUS STEPPER */}
                <IconButton
                    containerStyle = {{
                        width: 50,
                        alignItems: "center",
                        justifyContent: 'center',
                    }}
                    icon = {icons.minus}
                    iconStyle = {{
                        height: 25,
                        width: 25,
                        tintColor: value > 1 ? COLORS.primary: COLORS.gray
                    }}
                    onPress = {onMinus}
                />
            {/* TEXT VIEW  */}
                    <View
                        style = {{
                            // flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            
                        }}
                    >
                        <Text
                            style = {{
                                ...FONTS.h2,
                                ...textStyle
                            }}
                        >
                            {value}
                        </Text>
                    </View>
            {/* PLUS STEPPER  */}
            <IconButton
                    containerStyle = {{
                        width: 50,
                        alignItems: "center",
                        justifyContent: 'center',
                    }}
                    icon = {icons.plus}
                    iconStyle = {{
                        height: 25,
                        width: 25,
                        tintColor: COLORS.primary,
                    }}
                    onPress = {onAdd}
                />
        </View>
    )
}

export default StepperInput