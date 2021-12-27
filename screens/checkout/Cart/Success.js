import React from 'react';
import {
    View,
    Text,
    Image, 
    BackHandler
} from 'react-native';

import { TextButton } from '../../../components/checkout';

import {
    FONTS,
    SIZES,
    COLORS,
    images,
} from '../../../constants';

const Success = ({ navigation }) => {

    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress', ()=> {
                return true
            }
        )
        return ()=> backHandler.remove();
    }, [])

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white,

            }}
        >
            <View
                style={{ 
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    source = {images.success}
                    resizeMode = "contain"
                    style = {{
                        height: 150,
                        width: 150
                    }}
                />
                <Text
                    style={{ 
                        marginTop: SIZES.padding,
                        ...FONTS.h1
                    }}
                >Congratulations </Text>
                <Text
                    style={{
                        alignItems: 'center',
                        marginTop: SIZES.base,
                        color: COLORS.darkGray,
                        ...FONTS.body3
                    }}
                >Payment was Successfully made !</Text>
            </View>

            <TextButton
                label = "Done"
                buttonContainerStyle = {{
                    height: 55,
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,

                }}
                labelStyle = {{
                    marginTop: 17,
                }}
                onPress = {() => navigation.navigate("DeliveryStatus")}
            />
        </View>
    )
}

export default Success