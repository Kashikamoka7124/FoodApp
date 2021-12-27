import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';

import {
    COLORS,
    FONTS,
    icons,
    SIZES,
    dummyData,
} from '../../../constants';

import {
    KeyboardAwareScrollView
} from "react-native-keyboard-aware-scroll-view"

import {
    Header,
    IconButton,
    TextButton,
    FormInput,
    CardItem,
    FooterTotal,
} from "../../../components/checkout"



import {utils} from "../../../utils"

const Checkout = ({ navigation, route }) => {

    const [selectedCard, setSelectedCard] = React.useState(null)
    const [coupon, setCoupon] = React.useState('')
     
    React.useEffect(() => {
        let {selectedCard} = route.params 
        setSelectedCard(selectedCard)
    }, [])

    const renderHeader = () =>{
        return(
            <Header
            title = "Checkout"
            containerStyle = {{
                height : 50,
                marginHorizontal: SIZES.padding,
                marginTop: 40,
            }}
            leftComponent = {
                <IconButton
                    icon = {icons.back}
                    containerStyle = {{
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: SIZES.radius,

                        borderColor: COLORS.gray2
                    }}
                    iconStyle ={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray2
                    }}
                    onPress = {() => navigation.goBack()}
                />
            }
            rightComponent = {
                <View
                    style = {{
                        width: 40,
                    }}
                />
            }
        />
        )
    }

    const renderMyCards = () => {
        return(
            <View

            >
                {selectedCard && dummyData.myCards.map((item, index) => {
                    return(
                        <CardItem
                            key = {`MyCard-${item.id}`}
                            item = {item}
                            // {selectedCart && 
                            isSelected = { selectedCard && `${selectedCard.key}-${selectedCard.id}`== `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({...item, key:"MyCard"})}
                            />
                    )
                })}
                
            </View>
        )
    }

    const renderDeliveryAddress = () =>{
        return(
            <View
                style = {{
                    marginTop: SIZES.padding,
                }}
            >
                <Text
                    style = {{
                        ...FONTS.h3
                    }}
                >
                    Delivery Address
                </Text>

                <View
                    style = {{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderWidth: 2,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.lightGray2
                    }}
                >
                    <Image
                        source = {
                            icons.location1
                        }
                        style = {{
                            width: 40,
                            height: 40,
                        }}
                    />

                    <Text
                        style = {{
                            marginLeft: SIZES.radius,
                            width: "85%",
                            ...FONTS.body3
                        }}
                    >
                        Jaranwala Road, Faisalbad
                    </Text>
                </View>
            </View>
        )
    }

    const renderCoupon = () => {
        return(
            <View
                style ={{
                    marginTop: SIZES.padding,
                }}
            > 
                <Text
                    style={{
                        ...FONTS.h3
                    }}
                > 
                    Add Coupon
                </Text>

                <FormInput
                    inputContainerStyle = {{
                        marginTop: 0,
                        paddingLeft: SIZES.padding,
                        paddingRight: 0,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray2,
                        backgroundColor: COLORS.white,
                        overflow: 'hidden'
                    }}
                    value = {coupon}
                    onChange = {(value) => {
                        setCoupon(value)
                    }}
                    placeholder = "Coupon Code"
                    appendComponent = {
                        <View
                            style = {{
                                width: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary
                            }}
                        >
                            <Image
                                source = {icons.discount}
                                style = {{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                    }
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* HEADER  */}
            {renderHeader()}

            {/* BODY  */}
            <KeyboardAwareScrollView
                keyboardDismissMode = "on-drag"
                extraHeight = {-200}
                contentContainerStyle = {{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20,
                }}
            >
                    {/* MY CARDS  */}
                    {renderMyCards()}
                    {/* DELIVERY ADDRESS  */}
                    {renderDeliveryAddress()}
                    {/* COUPONS  */}
                    {renderCoupon()}
            </KeyboardAwareScrollView>
            {/* FOOTER  */}
            <FooterTotal
                subTotal = {37.97}
                shippingFee = {0.00}
                total = {37.97}
                onPress = {() => navigation.navigate("Success")}
            />
            
        </View>
    )
}

export default Checkout;