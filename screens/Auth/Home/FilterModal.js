import React from "react";
import {
    View,
    Text, 
    TouchableOpacity,
    Image,
    Animated,
    ScrollView,
    Modal,    
    TouchableWithoutFeedback
} from 'react-native';

import { COLORS,
    FONTS,
    SIZES,
    constants,
    icons
} from "../../../constants";

import { IconButton,
    TwoPointSlider,
    TextButton,
    TextIconButton,
} from "../../../components";


const Section = ({title, containerStyle, children}) => {
    return(
        <View
            style = {{
                marginTop: SIZES.padding,
                ...containerStyle
            }}
        >
            <Text
                style = {{
                    ...FONTS.h3, 
                }}
            >{title} </Text>
            {children}
        </View>
    )
}

const FilterModal = ({isVisible, onClose}) => {

    const modalAnimationValue = React.useRef(new Animated.Value(0)).current
    const [showFilterModal, setShowFilterModal] = React.useState(isVisible)
    const [deliveryTime, setDeliveryTime] = React.useState("")
    const [ratings, setRatings] = React.useState("")
    const [tags, setTags] = React.useState("")
    React.useEffect(() => {
        if(showFilterModal){
            Animated.timing(modalAnimationValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        }else{
            Animated.timing(modalAnimationValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(() => onClose());
        }

    },[showFilterModal])

    const modalY = modalAnimationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 680]
    })

    const renderDistance = () =>{
         return (
              <Section
                title = 'Distance'
             >

                <View
                    style = {{
                        alignItems: 'center',

                    }}
                >
                    <TwoPointSlider
                        values = {[3, 10]}
                        min = {1}
                        max = {10}
                        postfix = 'km'
                        onValueChange = {(values) => console.log(values) }
                    />

                </View>


             </Section>
         )
    }

    // DELIVERY TIME COMPONENET 
    const renderDeliveryTime = () => {
        return (
            <Section
            containerStyle = {{
                marginTop: 40,
            }}
            title = "Delivery Time"
            >
                <View
                    style = {{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: SIZES.radius
                    }}
                >
                    {constants.delivery_time.map((item, index) => {
                        return (

                            <TextButton
                                key = {`delivery_time-${index}`}
                                label = {item.label}
                                labelStyle = {{
                                    color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                                    ...FONTS.body3
                                }}
                                buttonContainerStyle = {{
                                    width : "30%",
                                    height: 50, 
                                    margin: 5, 
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
                                    backgroundColor: item.id == deliveryTime ? COLORS.primary : COLORS.lightGray2
                                }}
                                onPress = {() => setDeliveryTime(item.id)}
                            />
                        )
                    })}

                </View>

            </Section>
        )
    }

    const renderPriceRange = () => {
        return (
            <Section 
                title = "Pricing Range"
            >
                <View
                    style = {{
                        alignItems: 'center',
                    }}
                > 
                    <TwoPointSlider
                        values = {[10, 50]}
                        min = {1}
                        max = {100}
                        prefix = {'$'}
                        postfix = ""
                        onValueChange = {(values) => console.log(values)}
                    />

                </View>
            </Section>

        )
    }

    const renderRatings = () => {
         return(
             <Section
                title = "Rantings"
                containerStyle = {{
                    marginTop : 40,
                }}
             >
                <View
                    style = {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}
                >
                    {constants.ratings.map((item, index) => {
                        return(
                            <TextIconButton
                                key = {`Rating-${index}`}
                                containerStyle = {{
                                    flex: 1,
                                    height: 50,
                                    margin: 5, 
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
                                    backgroundColor: item.id == ratings ? COLORS.primary : COLORS.lightGray2
                                }}
                                label = {item.label}
                                labelStyle = {{
                                    color: item.id == ratings ? COLORS.primary : COLORS.gray
                                }}
                                icon = {icons.star}
                                iconStyle = {{
                                    tintColor: item.id ==ratings ? COLORS.white : COLORS.gray
                                }}
                                onPress = {
                                    ()=> {
                                        setRatings(item.id)
                                    }
                                }
                            >

                            </TextIconButton>
                        )
                    })}
                </View>

             </Section>
         )
    }

    const renderTags = () => {
        return(
            <Section
                title = "Tags"

            >
                <View
                    style = {{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                > 
                {constants.tags.map((item, index) => {
                    return(
                        <TextButton
                            key = {`Tags-${index}`}
                            label = {item.label}
                            labelStyle = {{
                                color: item.id == tags ? COLORS.white : COLORS.gray,
                                ...FONTS.body3
                            }}
                            buttonContainerStyle = {{
                                height: 50,
                                margin: 5,
                                paddingHorizontal: SIZES.padding,
                                alignItems: 'center',
                                borderRadius: SIZES.base,
                                backgroundColor: item.id == tags ? COLORS.primary : COLORS.lightGray2,

                            }}
                            onPress = {() => setTags(item.id)}
                        />
                    )
                })}
                </View>
            </Section>
        )
    }

    return (
        <Modal 
            animationType = 'fade'
            transparent = {true}
            visible = {isVisible}
        >
            <View
                style = {{
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack7
                }}
            >

                {/* TRANSPARENT BACKGROUND  */}

                <TouchableWithoutFeedback
                    onPress = {() => setShowFilterModal(false)}
                >
                    <View 
                        style = {{
                            position:'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }}
                    >
                    </View>

                </TouchableWithoutFeedback>
                
                <Animated.View
                    style = {{
                        position: 'absolute',
                        left: 0,
                        top: modalY,
                        width: '100%',
                        height: '100%',
                        padding: SIZES.padding,
                        borderTopRightRadius: SIZES.radius,
                        borderTopLeftRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    {/* HEADER  */}
                    <View
                        style = {{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    > 
                        <Text
                            style = {{
                                flex: 1,
                                ...FONTS.h3,
                                fontSize: 18,

                            }}
                        >
                            Filter Your Search
                        </Text>

                        <IconButton
                            containerStyle = {{
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: COLORS.gray2
                            }}
                            icon = {icons.cross}
                            iconStyle = {{
                                tintColor: COLORS.gray2
                            }}
                            onPress = {() => setShowFilterModal(false)}
                        />

                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator = {false}
                        contentContainerStyle = {{
                            paddingBottom: 250

                        }}
                    >
                        {/* DISTANCE  */}
                        {renderDistance()}

                        {/* DELIVERY TIME  */}
                        {renderDeliveryTime()}

                        {/* PRICING DETAILS  */}
                        {renderPriceRange()}

                        {/* RATING */}
                        {renderRatings()}

                        {/* TAGS  */}
                        {renderTags()}
                    </ScrollView>
                    {/* APPLY BUTTONS  */}
                    <View
                        style = {{
                            marginBottom:SIZES.padding,
                        }}
                    />
                    <View
                        style = {{
                            position :'absolute',
                            bottom: 40,
                            left: 0,
                            right: 0,
                            height: 50,
                            paddingHorizontal: SIZES.padding,
                            paddingVertical: SIZES.radius,
                            backgroundColor: COLORS.white,
                        }}
                    >
                        <TextButton
                            label = "Apply Filters"
                            buttonContainerStyle = {{
                                height: 50,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary,
                            }}
                            onPress = {() => console.log("Apply Filter")}
                        
                        />
                    </View>

                </Animated.View>


            </View>
        </Modal>
    )
}

export default FilterModal;