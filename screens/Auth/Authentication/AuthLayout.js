import React from "react"

import {
    View,
    Text,
    Image
} from 'react-native'

import {
    images,
    FONTS,
    COLORS,
    SIZES
} from '../../../constants'

// https://github.com/APSL/react-native-keyboard-aware-scroll-view

import {
    KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view' 
const AuthLayout = ( {title, subtitle, titleContainerStyle, children} ) =>{
    return (
        <View
            style = {{
                flex: 1,
                paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white,
            }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode = 'on-drag'
                contentContainerStyle = {{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >

                {/* APP ICON */}

                <View
                    style = {{
                        alignItems:'center',
                    }}
                >
                    <Image
                        source = {images.logo_01}
                        resizeMode = 'contain'
                        style = {{
                            height: 140,
                            width: 175,
                        }}
                    />
                </View>

                {/* TITLE & SUBTITLE  */}
                    <View
                        style = {{
                            marginTop: SIZES.padding,
                            ...titleContainerStyle
                        }}
                    >
                        <Text
                            style = {{
                                textAlign: 'center',
                                ...FONTS.h2
                            }}
                        >
                            {title}
                        </Text>

                        <Text
                            style = {{
                                textAlign: "center",
                                color: COLORS.darkGray,
                                marginTop: SIZES.base,
                                ...FONTS.body3
                            }}
                        >
                            {subtitle}
                        </Text>


                    </View>
                {/* CONTENT AND CHILDREN */}
                {children}
            </KeyboardAwareScrollView>

        </View>
    )
}

export default AuthLayout