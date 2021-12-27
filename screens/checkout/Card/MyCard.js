import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import {
    CardItem,
    Header,
    IconButton,
    TextButton,
} from "../../../components/checkout"

import {
    FONTS,
    SIZES,
    COLORS,
    icons,
    dummyData
} from "../../../constants"

const MyCard = ({ navigation }) => {
    const [selectedCard, setSelectedCard] = React.useState(null)
    const renderHeaders = () => {
        return(
    <Header
                title = "My CARDS"
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
                {dummyData.myCards.map((item, index) => {
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

    const renderAddNewCard = () => {
        return(
            <View
                style = {{
                    paddingTop: SIZES.padding,
                }}
            >
                <Text
                    style = {{
                        ...FONTS.h3
                    }}
                >
                    Add New Card
                </Text>
                {dummyData.allCards.map((item, index) => {
                    return (
                        <CardItem 
                            key = {`NewCard-${item.id}`}
                            item = {item}
                            isSelected = {selectedCard && `${selectedCard.key}-${selectedCard.id}` == `NewCard-${item.id}`}
                            onPress = {() => setSelectedCard({...item, key: "NewCard"})}
                        />
                    )
                })}
            </View>
        )
    }
    const renderFooter = () =>{
        return(
            <View
                style = {{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* <Text>Footer </Text> */}
                <TextButton
                    disabled = {selectedCard ? false : true }
                    buttonContainerStyle = {{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: selectedCard == null ? COLORS.gray2 : COLORS.primary,
                    }}
                    labelStyle = {{
                        marginTop: 17,
                    }}
                    label = {selectedCard && selectedCard?.key == "NewCard" ? "Add" : "Place your Order"}
                    onPress = {() => {
                        if(selectedCard?.key == "NewCard"){
                            navigation.navigate("AddCard",{
                                selectedCard: selectedCard
                            })
                        }else {
                            navigation.navigate("Checkout",{
                                selectedCard: selectedCard
                            })
                        }
                    }}
                />
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            {/* HEADERS  */}
            {renderHeaders()}
            {/* CARDS */}
            <ScrollView
                contentContainerStyle = {{
                    flexGrow: 1,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius,
                }}
            >
                {/* MY CARDS  */}
                {renderMyCards()}

                {/* ADD NEW CARDS  */}
                {renderAddNewCard()}
                {/* <CardItem /> */}

            </ScrollView>
            {/* FOOTERS */}
            {renderFooter()}
        </View>
    )
}

export default MyCard;