import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import {
    Header,
    LineDivider,
    TextButton,
    IconButton,
    TextIconButton
} from "../../../components/checkout"
import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    constants
} from "../../../constants"
const DeliveryStatus = ({ navigation }) => {
    const [currentStep, setCurrentStep] = React.useState(3)
    const renderHeader = () =>{
        return(
            <Header
                title = "Delivery Status"
                containerStyle = {{
                    height : 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                }}
            />
        )
    }
    const renderInfo = () =>{
        return(
            <View

            >
                <Text
                    style={{
                        textAlign:'center',
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}
                >Estimated Delivery</Text>
                <Text style={{
                    textAlign: 'center',
                    ...FONTS.h2
                }}>Sept 2021 / 12: 30 PM</Text>
            </View>
        )
    }
    const renderTrack = () =>{
        return(
            <View
                style={{
                    marginTop: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.lightGray2,
                    backgroundColor: COLORS.white2
                }}
            >
                {/* TRACE ORDER  */}
                <View
                    style={{ 
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <Text 
                        style={{ 
                            ...FONTS.h3
                        }}
                    >Trace Order </Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        NY0123456
                    </Text>
                </View>
                    <LineDivider
                        lineStyle = {{
                            backgroundColor: COLORS.lightGray2
                        }}
                    />
                    {/* STATUS  */}
                    <View
                        style = {{
                            marginTop: SIZES.padding,
                            paddingHorizontal: SIZES.padding
                        }}
                    > 
                        {constants.track_order_status.map((item,index) => {
                            return(
                                <View
                                    key = {`StatusList-${index}`}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: -5
                                        }}
                                    >
                                        <Image
                                            source = {icons.check_circle}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                tintColor: index <= currentStep ? COLORS.primary: COLORS.lightGray1
                                            }}
                                        />  

                                        <View
                                            style={{
                                                marginLeft: SIZES.radius,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    ...FONTS.h3
                                                }}
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: COLORS.gray,
                                                    ...FONTS.body4
                                                }}
                                            >{item.sub_title}</Text>
                                        </View>

                                    </View>
                                    {index < constants.track_order_status.length - 1 && 
                                        <View
                                        >
                                            {index < currentStep && 
                                                <View
                                                    style = {{
                                                        height: 50,
                                                        width: 3,
                                                        marginLeft: 18,
                                                        backgroundColor: COLORS.primary,
                                                        zIndex: -1
                                                    }}
                                                >


                                                </View>
                                            }  
                                            {
                                                index >= currentStep &&
                                                <Image
                                                    source = {icons.dotted_line}
                                                    resizeMode = "cover"
                                                    style={{ 
                                                        width: 4,
                                                        height: 50,
                                                        marginLeft: 17 
                                                    }}
                                                />
                                            }
                                        </View>                                    
                                    }
                                </View>
                            )
                        }
                        )}
                    </View>
            </View>
        )
    }

    const renderFooter = () => {
        return(
            <View
                style={{ 
                    marginLeft: SIZES.radius,
                    marginBottom: SIZES.radius
                }}

            > 
                {
                    currentStep < constants.track_order_status.length -1
                    &&
                    <View
                        style={{
                            flexDirection:'row',
                            height: 55,

                        }}
                    >
                        <TextButton
                            buttonContainerStyle = {{
                                width: '40%',
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.lightGray2
                            }}
                            label = "Cancel"
                            labelStyle = {{
                                color: COLORS.primary,
                                marginTop: 15,
                            }}
                            onPress = {() => { 
                                navigation.navigate("FoodDetail")
                            }}

                        />
                        {/* MAPVIEW  */}
                        <TextIconButton
                            containerStyle = {{
                                flex: 1,
                                marginLeft: SIZES.radius,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary
                            }}
                            label = "Map View"
                            labelStyle = {{
                                color: COLORS.white
                            }}
                            iconPosition = "LEFT"
                            icon = {icons.map}
                            iconStyle = {{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.white,
                                marginRight: SIZES.radius
                            }}
                            onPress = {() => navigation.navigate("Map")}
                        />

                    </View>
                }

                {currentStep == constants.track_order_status.length -1 &&
                    <TextButton
                        buttonContainerStyle = {{
                            height: 55,
                            borderRadius: SIZES.radius
                        }}
                        label = "DONE"
                        labelStyle = {{
                            marginTop: 15,
                        }}
                        onPress = {() => navigation.navigate("FoodDetail")}
                    />
                }
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white,

            }}
        >
            {/* HEADER  */}
            {renderHeader()}

            {/* INFO  */}
            {renderInfo()}
            {/* TRACK ORDER  */}
            <ScrollView
                showsHorizontalScrollIndicator = {false}
                style = {{
                    marginBottom: 25,
                }}
            >
                {renderTrack()}
            </ScrollView>
            {/* FOOTER  */}
            {renderFooter()}
        </View>
    )
}

export default DeliveryStatus;