import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData,
} from "../../../constants"

import { 
    Header,
    IconButton,
    CartQuantityButton,
    IconLabel,
    TextButton,
    LineDivider,
    Ratings,
    StepperInput

} from '../../../components/checkout';

import {ADDCART} from "../../../stores/cart/actions"

import {useSelector} from "react-redux" 
import { getImage } from '../../../constants/urls';
import { useDispatch } from 'react-redux';
import {getcart} from "../../../stores/cart/actions"
const FoodDetail = ({ navigation }) => {

    // const [foodItems, setFoodItems] =  React.useState(dummyData.vegBiryani)
    // const [selectedSize, setSelectedSize] = React.useState("")
    // const [qty, setQty] = React.useState(selectedCartItem.quantity)


    const foodItems = useSelector(state => state.detailProductReducer)
    const cartItem = useSelector(state => state.cartReducer.Item)
    const userData = useSelector(state => state.registrationReducer.AuthState)
    const selectedCartItem = cartItem?.find(a => a.product_id == foodItems.id)
    const [selectedSize, setSelectedSize] = React.useState("")
    const [qty, setQty] = React.useState(selectedCartItem ? selectedCartItem.quantity : 1)
    const [loading, setLoading] = React.useState(true)
    const dispatch = useDispatch()
    const newItem = useSelector((state) => state.cartReducer)


    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        })
    })
    const renderHeader = () => {
        return (
            <Header
                title = "DETAILS"
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
                        onPress = {() => console.log("Back")}
                    />
                }
                rightComponent = {
                    <CartQuantityButton
                        quantity = {cartItem.length}
                        onPress={() => {
                            navigation.navigate("MyCart")
                        }}
                    />
                }
            
            />
        )
    }

    const renderDetails = () =>{
        return (
            <View
                style = {{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                }}
            > 
                    {/* FOOD CARD  */}
                    <View
                        style = {{
                            height: 190,
                            borderRadius: 15,
                            backgroundColor: COLORS.lightGray2,
                        }}
                    >
                        {/* CALORIES AND FAVOURITES  */}
                        <View
                            style = {{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: SIZES.base,
                                paddingHorizontal: SIZES.radius,
                            }}
                        >
                            {/* CALORIES  */}
                            <View
                                style = {{
                                    flexDirection:'row'

                                }}
                            >
                                <Image
                                    source = {icons.calories}
                                    style = {{
                                        height: 30,
                                        width: 30,

                                    }}
                                />
                                <Text
                                    style = {{
                                        color:COLORS.darkGray2,
                                        ...FONTS.body4
                                    }}
                                >
                                    {foodItems?.calories} Calories

                                </Text>
                            </View>

                            {/* FAVOURITES  */}
                            <Image
                                style = {{
                                    height: 30,
                                    width: 30,
                                    tintColor: foodItems?.isFavourite ? COLORS.primary: COLORS.gray2
                                }}
                                source = {icons.love}
                            />
                        </View>
                        {/* FOOD IMAGE  */}
                        <Image
                            // source = {foodItems?.image}
                            source = {{uri: getImage(foodItems?.image)}}
                            resizeMode = 'contain'
                            style = {{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',

                                height: 170,
                                width: '100%'
                            }}
                        />
                    </View>
                    {/* FOOD INFO  */}
                    <View
                        style = {{
                            marginTop: SIZES.padding
                        }}
                    >
                        {/* NAME AND DESCRIPTION  */}
                        <Text
                            style={{
                                ...FONTS.h1
                            }}
                        >
                            {foodItems?.name}
                        </Text>
                        <Text
                            style = {{
                                marginTop: SIZES.base,
                                color: COLORS.darkGray,
                                textAlign: 'justify',
                                ...FONTS.body3
                            }}
                        >
                            {foodItems?.description}
                        </Text>

                            {/* RATING, DURATION AND SHIPPING  */}

                            <View
                                style = {{
                                    flexDirection: 'row',
                                    marginTop: SIZES.padding,
                                }}
                            >
                                {/* RATING  */}
                                <IconLabel
                                    containerStyle = {{
                                        backgroundColor: COLORS.primary
                                    }}
                                    icon = {icons.star}
                                    label = "4.5"
                                    labelStyle = {{
                                        color: COLORS.white
                                    }}
                                />

                                {/* DURATION  */}
                                <IconLabel
                                    containerStyle = {{
                                        marginLeft: SIZES.radius,
                                        paddingHorizontal: 0
                                    }}
                                    icon = {icons.clock}
                                    label = "30 Min"
                                    labelStyle = {{
                                        color: COLORS.black
                                    }}
                                />

                                {/* SHIPPING  */}
                                <IconLabel
                                    containerStyle = {{
                                        marginLeft: SIZES.radius,
                                        paddingHorizontal: 0
                                    }}
                                    icon = {icons.dollar}
                                    label = "Free Shipping"
                                    labelStyle = {{
                                        color: COLORS.black
                                    }}
                                />
                            </View>
                            {/* SIZES  */}
                            {/* <View
                                style = {{
                                    flexDirection: 'row',
                                    marginTop: SIZES.padding,
                                    alignItems: 'center',
                                }}
                            >
                                <Text style = {{
                                    ...FONTS.h3
                                }}>
                                    Sizes: 
                                </Text>
                                <View
                                    style = {{
                                        flexDirection:'row',
                                        flexWrap: 'wrap',
                                        marginLeft : SIZES.padding,
                                    }}
                                >
                                    {
                                        dummyData.sizes.map((item, index) => {
                                            return(
                                                <TextButton
                                                    key = {`Sizes-${index}`}
                                                    buttonContainerStyle = {{
                                                        width: 55,
                                                        height: 55,
                                                        margin: SIZES.base,
                                                        marginLeft: SIZES.base - 5,
                                                        borderWidth: 1,
                                                        borderRadius: SIZES.radius,
                                                        borderColor: selectedSize == item.id ?COLORS.primary: COLORS.gray2,
                                                        backgroundColor: selectedSize == item.id ?COLORS.primary: null
                                                    }}
                                                    onPress = {() => setSelectedSize(item.id)}
                                                    label = {item.label}
                                                    labelStyle = {{
                                                        color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                                        ...FONTS.body3
                                                    }}
                                                />
                                            )
                                        })
                                    }
                                </View>

                            </View> */}
                    </View>
            </View>
        )
    }
    const renderRestaurant = (

    ) => {
        return(
            <View
                style = {{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    alignItems: 'center',

                }}
            >
                <Image
                    source = {images.profile}
                    style = {{
                        height: 50,
                        width: 50,
                        borderRadius: SIZES.radius,
                    }}
                />
                {/* INFO  */}
                <View
                    style = {{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style = {{
                            ...FONTS.h3,
                        }}
                    >
                        Waqas Ahmad
                    </Text>
                    <Text
                        style = {{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        1.2 KM away from you
                    </Text>
                </View>
                {/* RATING  */}
                <Ratings
                    rating = {4}
                    iconStyle = {{
                        marginLeft: 3,
                    }}
                />

            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style = {{
                    flexDirection: 'row',
                    height: 120,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding,
                }}
            >
                <StepperInput
                    value = {qty}
                    onAdd = {() => setQty(qty + 1)}
                    onMinus = {() => {
                        if (qty > 1){
                            setQty(qty - 1)
                        }
                    }}

                />
                {/* TEXT BUTTON  */}
                {/* <TextButton
                    buttonContainerStyle = {{
                        flex: 1,
                        flexDirection: "row",
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label = "Buy Now"
                    label2 = {`$ ${qty * foodItems.price} `}
                    onPress = {() => {
                        UPDATE_CART(data = {
                            'token' : userData.token,
                            'product_id': foodItems.id,
                            'qty': qty
                        }, action = navigation.navigate("MyCart"))
                        // navigation.navigate("MyCart")
                    }}
                /> */}

                <TextButton
                    buttonContainerStyle = {{
                        flex: 1,
                        flexDirection: "row",
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label = "Add To Cart"
                    labelStyle={{
                        marginLeft: 35
                    }}
                    onPress = {() =>{ 
                        // action = navigation.navigate("MyCart")
                            ADDCART(data = {
                                'token': userData?.token,
                                'product_id': foodItems?.id,
                                'no': qty
                            }, setLoading(true))
                        }
                        // navigation.navigate("MyCart")
                    }
                />
            </View>
        )
    }
    if(loading) {
        return(
            <Text>Loading ....</Text>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white

            }}
        >
            {/* HEADER */}
            <View

            >
                {renderHeader()}
            </View>

            {/* BODY */}
                <ScrollView>
                    {/* FOOD DETAILS */}
                    {renderDetails()}

                    <LineDivider />

                    {/* RESTAURANTS  */}
                    {renderRestaurant()}

                </ScrollView>
            {/* FOOTER  */}
            <LineDivider />
            {renderFooter()}
        </View>
    )
}

export default FoodDetail;