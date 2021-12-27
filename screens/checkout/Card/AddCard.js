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
    images,
    SIZES
} from '../../../constants';

import {
    KeyboardAwareScrollView
} from "react-native-keyboard-aware-scroll-view"

import {
    Header,
    IconButton,
    TextButton,
    FormInput,
    FormInputCheck,
    RadioButton
} from "../../../components/checkout"

import {utils} from "../../../utils"


const AddCard = ({ navigation, route }) => {

    const [selectedCard, setSelectedCard] = React.useState(null)
    const [cardNumber, setCardNumber] = React.useState("")
    const [cardNumberError, setCardNumberError] = React.useState("")
    const [cardName, setCardName] = React.useState("")
    const [cardNameError, setCardNameError] = React.useState("")
    const [expiryDate, setExpiryDate] = React.useState("")
    const [expiryDateError, setExpiryDateError] = React.useState("")
    const [cvv, setCvv] = React.useState("")
    const [cvvError, setCvvError] = React.useState("")
    const [isRemember, setIsRemember] = React.useState("")
    // const [isRemember, setIsRemember] = React.useState("")




    React.useEffect(() =>{
        let {selectedCard} = route.params
        setSelectedCard(selectedCard)
    }, [])
    const isEnabledAddCard = ( ) => {
        return cardNumber !="" && cardName != ""  && expiryDate !="" && cvv !="" && cardNumberError == "" && cardNameError =="" && expiryDateError == "" && cvvError == ""
    }
    const renderHeader = () => {
        return(
            <Header
                title = "Add Card"
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
    const renderCard = () =>{
        return(
            <ImageBackground
                source = {images.card}
                style={{
                    height: 200,
                    width: "100%",
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: 'hidden'
                }}
            >
                {/* LOGO  */}
                <Image
                    source = {selectedCard?.icon}
                    resizeMode = 'contain'
                    style = {{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        height: 40,
                        width: 80,
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 0,
                        right: 0,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        {cardName}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            {cardNumber}
                        </Text>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            {expiryDate}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        ) 
    }
    const renderForm = () => {
        return(
            <View
                style = {{
                    marginTop: SIZES.padding *2
                }}
            >
                {/* CARD NUMBER  */}
                <FormInput
                    label = "Card Number"
                    keyboardType = "number-pad"
                    value = {cardNumber}
                    maxLength = {19}
                    onChange = {(value) => {
                        setCardNumber(value.replace(/\s/g,'').replace(/(\d{4})/g, '$1 ').trim())
                        utils.validateInput(value, 19, setCardNumberError)

                    }}
                    errorMsg ={cardNumberError}
                    appendComponent = {
                        <FormInputCheck
                            value = {cardNumber}
                            error = {cardNumberError}
                        />
                    }
                />

                    {/* CARDHOLDER NAME  */}
                    <FormInput
                    label = "Cardholder Name"
                    value = {cardName}
                    onChange = {(value) => {
                        utils.validateInput(value, 1, setCardNameError)
                        setCardName(value)
                    }}
                    errorMsg ={cardNameError}
                    appendComponent = {
                        <FormInputCheck
                            value = {cardName}
                            error = {cardNameError}
                        />
                    }
                />
                {/* EXPIRY DATE/ CVV  */}
                <View
                    style = {{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                    }}
                >
                    {/* Expiry Date  */}
                    <FormInput
                    label = "Expiry Date"
                    value = {expiryDate}
                    placeholder = "MM/YY"
                    maxLength = {5}
                    containerStyle = {{
                        flex: 1,
                    }}
                    onChange = {(value) => {
                        utils.validateInput(value, 1, setExpiryDateError)
                        setExpiryDate(value)
                    }}
                    errorMsg ={expiryDateError}
                    appendComponent = {
                        <FormInputCheck
                            value = {expiryDate}
                            error = {expiryDateError}
                        />
                    }
                />

                    {/* CVV  */}
                <FormInput
                    label = "CVV"
                    value = {cvv}
                    maxLength = {3}
                    containerStyle = {{
                        flex: 1,
                        marginLeft: SIZES.radius
                    }}
                    onChange = {(value) => {
                        utils.validateInput(value, 3, setCvvError)
                        setCvv(value)
                    }}
                    appendComponent = {
                        <FormInputCheck
                            value = {cvv}
                            error = {cvvError}
                        />
                    }
                />
                </View>

                {/* REMEMBER  */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        marginTop: SIZES.padding,

                    }}
                >
                    <RadioButton
                        label = "Remember this cards Detail"
                        isSelected = {isRemember}
                        onPress = {() => setIsRemember(!isRemember)}
                    />

                </View>

            </View>
        )
    }
    const renderFooter = () => {
        return(
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.radius,
                }}
            >
                <TextButton
                    label = "Add Card"
                    disabled = {!isEnabledAddCard()}
                    buttonContainerStyle = {{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnabledAddCard() ? COLORS.primary : COLORS.transparentPrimary,
                        paddingTop: 17,

                    }}
                    onPress = {() => navigation.goBack()}
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
                contentContainerStyle = {{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                {/* CARD */}
                {renderCard()}
                {/* CARD FORM */}
                {renderForm()}
            </KeyboardAwareScrollView>
            {/* FOOTER  */}
            {renderFooter()}
        </View>
    )
}

export default AddCard;