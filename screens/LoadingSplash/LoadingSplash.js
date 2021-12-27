import React from "react"
import {
    View,
    Text,
    Image,
} from "react-native"

import { FONTS, SIZES, COLORS, icons, dummyData, images } from '../../constants';

const LoadingSplash = () => {
    return(
        <View
            style = {{
                height: SIZES.height,
                width: SIZES.width,
                backgroundColor: COLORS.white
            }}
        >
            <View
                style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    source = {images.loadingSplash}
                    style = {{
                        height: 250,
                        width: 250,
                    }}
                
                />
            </View>
        </View>
    )
}

export default LoadingSplash