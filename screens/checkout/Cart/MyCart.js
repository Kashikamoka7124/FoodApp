import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {
    FONTS,
    SIZES,
    COLORS,
    icons,
    dummyData,
} from "../../../constants"

import {
    SwipeListView
} from "react-native-swipe-list-view"

import {
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput,
    FooterTotal
} from "../../../components/checkout"
import {
    addQty,
    minusQty,
    ADDQTY,
    Minus,
    MINUSQTY,
    removeCart,
    REMOVE_ITEM_CART,
} from "../../../stores/cart/actions"
import {useSelector, useDispatch} from "react-redux"
import { getImage } from '../../../constants/urls';
const MyCart = ({ navigation }) => {
    const dispatch = useDispatch()
    const cartList = useSelector(state => state.cartReducer.Item)
    const userData = useSelector(state => state.registrationReducer.AuthState)
    const subTotal = () => {
        var total = 0
        cartList.map((item, index) => {
            console.log(`Price ${item.price} Quantity ${item.quantity}`)
            total += parseInt(item.price) *parseInt(item.quantity)
        })
        return Number(total)
    }
    React.useEffect(() => {
    }, [])


    function updateQuantityHandler(newQty, id) {
        const newMyCartList = cartList.map(cl => (
            cl.id === id ? {...cl, qty: newQty} : cl
        ))
        setCartList(newMyCartList)
    }
    function removeCartHandler(id){
        const newMyCartList = [...cartList]
        const index = newMyCartList.findIndex( cart => cart.id ===id )
        
        newMyCartList.splice(index, 1)
        setCartList(newMyCartList)
    }
    const renderHeader = () => {
        return(
            <Header
                title = "My Cart"
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
                    <CartQuantityButton
                        quantity = {cartList.length}

                    />
                }
            />
        )
    }
const renderCartList = () => {
    return (
        <SwipeListView
            data={cartList}
            keyExtractor = {item => `${item.product_id}`}
            contentContainerStyle = {{
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                paddinBottom: SIZES.padding * 2,
            }}
            disableRightSwipe = {true}
            rightOpenValue = {-75}
            renderItem = {(data, rowMap) => (
                <View
                    style = {{
                        height: 100,
                        backgroundColor: COLORS.lightGray2,
                        ...styles.cartItemContainer
                    }}
                >

                    {/* FOOD IMAGE  */}
                    <View
                        style = {{
                            width: 90,
                            height: 100,
                            marginLeft: -10
                        }}
                    >
                        <Image
                            source={{uri : getImage(data.item.image)}}
                            resizeMode = "contain"
                            style = {{
                                width: "100%",
                                height: "100%",
                                position: 'absolute',
                                top: 10,
                            }}
                         />
                    </View>
                    <View
                        style = {{
                            flex: 1,
                        }}
                    >
                        <Text
                            style = {{
                                ...FONTS.body3
                            }}
                        >{data.item.title}</Text>
                        <Text
                            style = {{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}
                        >${ data.item.price * data.item.quantity}</Text>
                    </View>

                    <StepperInput
                        containerStyle = {{
                            height: 40,
                            width: 110,
                            backgroundColor: COLORS.white,
                            position: "absolute",
                            right: 3,
                            bottom: 3,
                        }}
                        textStyle = {{
                            ...FONTS.h5,

                        }}
                        value = {data.item.quantity}
                        // onAdd = {() => updateQuantityHandler(data.item.quantity + 1, data.item.id)}
                        onAdd = {() => {
                                dispatch(addQty(data.item)),
                                ADDQTY(data = {
                                    'token': userData.token,
                                    'product_id': data.item.product_id
                                })
                            }
                        }
                        onMinus={() => {
                                dispatch(minusQty(data.item),
                                MINUSQTY(data = {
                                    'token': userData.token,
                                    'product_id': data.item.product_id
                                })
                            )}
                    
                    }
                    />

                </View>
            )}
            renderHiddenItem = {(data, rowMap) => (
                <IconButton
                    containerStyle = {{
                        flex: 1,
                        justifyContent: 'flex-end',
                        backgroundColor: COLORS.primary,
                        ...styles.cartItemContainer
                    }}
                    icon = {icons.delete_icon}
                    iconStyle = {{
                        marginRight: 10,
                    }}
                    onPress = {() => {
                            dispatch(removeCart(data.item)),
                            REMOVE_ITEM_CART(data = {
                                'token': userData.token,
                                'product_id': data.item.product_id
                            })
                        }
                    
                    }
                />
            )}
            ListFooterComponent = {() => (
                <>
                    <View
                        style = {{
                            height: 30,
                        }}
                    />
                        
                </>
            )}
        />
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

            {/* CART LIST  */}
            {renderCartList()}
            {/* FOOTER  */}
            <FooterTotal 
                subTotal = {subTotal()}
                shippingFee = {0.00}
                total = {subTotal()}
                onPress = {() => navigation.navigate("MyCard")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})

export default MyCart;