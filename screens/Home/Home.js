import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
    HorizontalFoodCard,
    VerticalFoodCard
} from '../../components';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';
import FilterModal from './FilterModal';
import {useSelector} from "react-redux"
import { FoodDetail } from '../checkout';
import { useNavigation } from '@react-navigation/native';
import { SET_DETAIL_PRODUCT } from '../../stores/DetailProduct/actions';
import { CART } from '../../stores/cart/actions';
import { getImage } from '../../constants/urls';
 


const Section = ({title, onPress, children}) => {
    return(

        <View>
            {/* HEADER */}
            <View
                style ={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20, 

                }}
            >
                <Text
                    style ={{
                        flex: 1,
                        ...FONTS.h3
                    }}
                >
                    {title}
                </Text>
                <TouchableOpacity
                    onPress = {onPress}
                > 
                    <Text 
                        style = {{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                    >
                        Show All
                    </Text>


                </TouchableOpacity>

            </View>

            {/* CONTENT */}
            {children}
        </View>
    )
}


const Home = () => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [popular, setPopular] = React.useState([])
    const [recommends, setRecommends] = React.useState([])
    const [menuList, setMenuList] = React.useState(1)
    const [showFilterModal, setShowFilterModal] = React.useState(false)
    
    //          CART ITEM

    const [loading, setloading] = React.useState(true)

    const navigation = useNavigation()

    const userData = useSelector(state => state.registrationReducer.AuthState)
    const products = useSelector(state => state.productReducer.Item)
    const categories = products?.category
    const menus = products?.menus

    React.useEffect(() => {
        handleChangeCategory( selectedCategoryId, selectedMenuType)
        CART(data = {
            'token': userData?.token
        },
            Loading = setloading
        )

    }, [products, menus])
    const handleChangeCategory = (categoryId, menuTypeId) => {
        // Retrieve The Popular Items
        // let selectedPopular = dummyData.menu.find(a => a.name=='Popular')
        let selectedPopular = menus?.find(a => a.title == "Popular")


        console.log(" Cartegory_id ====>>> ",categoryId)
        console.log(" MenuTypeId ====>>> ", menuTypeId)
        
      
        // Retrieve the Recommended Menus
        // let selectedRecommend = dummyData.menu.find(a => a.name == 'Recommended')
        let selectedRecommend = menus?.find(a => a.title == "Recommended")
        
        
        // Find the menu based on the menuTypeId 
        // let selectedMenu = dummyData?.menu.find(a => a.id == menuTypeId)
        let selectedMenu = menus?.find(a => a.id == menuTypeId)
         
        // Set the Menu based on the categoryId
        // setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
        setPopular(selectedPopular?.products?.filter(a => a.categories.find(a => a.id == categoryId)))

        // setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))
        setRecommends(selectedRecommend?.products?.filter(a => a.categories.find(a => a.id == categoryId)))

        // setMenuList(selectedMenu?.list?.filter(a => a.categories.includes(categoryId)))
        setMenuList(selectedMenu?.products?.filter(a => a.categories.find(a => a.id == categoryId)))


    }
    const renderSearch = () => {
        return (
            <View
                style = {{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                }}
            >
                {/* Icons */}
                <Image 
                    source = {icons.search}
                    style = {{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black,
                    }}
                />
                {/* TEXT  */}

                <TextInput 
                    style = {{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder = "Search Food ..."
                />
                {/* FILTER */}

                <TouchableOpacity

                    onPress = {() => setShowFilterModal(true)}


                >
                    <Image 
                        source = {icons.filter}
                        style = {{
                            height: 20,
                            width : 20,
                            tintColor : COLORS.black
                        }}
                    />
                    
                </TouchableOpacity>

            </View>            
        )
    }
    const renderMenuTypes = () => {
        return (
            <FlatList
                horizontal
                data = { dummyData.menu}
                keyExtractor = {item => `${item.id}`}
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle = {{
                    marginTop:15,
                    marginBottom: 20,

                }}
                renderItem = {({item, index}) => (
                    <TouchableOpacity
                        style = {{
                            marginLeft: SIZES.padding,
                            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
                        }}
                        onPress = {() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory(selectedCategoryId, item.id)
                        }}
                    >
                        <Text
                            style = {{
                                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                                ...FONTS.h3
                            }}
                        >{item.name}</Text>
                        
                    </TouchableOpacity>

                )}
            />
        )
    }

const renderRecommendedSection = () =>{
    return (
        <Section
            title = "Recommended"
            onPress = {()=> console.log('Recommended Section')}
        >
            <FlatList 
                data = {recommends}
                keyExtractor = {item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item, index})=> (
                    <HorizontalFoodCard
                        containerStyle = {{
                            height : 180,
                            width: SIZES.width * 0.85,
                            marginLeft: index == 0 ? SIZES.padding : 18,
                            marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                            paddingRight: SIZES.radius,
                            alignItems: 'center'
                        }}
                        imageStyle = {{
                            marginTop: 35,
                            height: 150,
                            width: 150
                        }}
                        item = {item}
                        onPress = {() => {
                            navigation.navigate("FoodDetail")
                            SET_DETAIL_PRODUCT(item)
                        }                            
                    }
                    />
                )}
            />
        </Section>
    )
}

    const renderPopularSection = () =>{
        return (
            <Section
                title = "Popular Near You"
                onPress = {() => console.log("Popular Near You Items")}
            >
                <FlatList
                    data = {popular}
                    keyExtractor = {item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item, index}) => (
                        <VerticalFoodCard
                            containerStyle = {{
                                marginLeft : index == 0 ? SIZES.padding : 18,
                                marginRight : index == popular.lengthw - 1 ? SIZES.padding: 0,

                            }}
                            item = {item}
                            onPress = {() => {
                                navigation.navigate("FoodDetail")
                                SET_DETAIL_PRODUCT(item)
                            }                            
                        }
                        // cartAdded = {checkCart(cart = cartItem, foodItem = item)}
                        // cartAdded = {true}

                        />
                    )}
                />


            </Section>
        )
    }

    const renderFoodCategories = () => {
        return (
            <FlatList
                // data = {dummyData.categories}
                data = {categories}
                keyExtractor = {item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item, index}) => (
                    <TouchableOpacity
                        style = {{
                            flexDirection : 'row',
                            height: 55, 
                            marginTop: SIZES.radius,
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.categories.length -1 ? SIZES.padding : 0,
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,
                            backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                        }}
                        onPress = {() => {
                            setSelectedCategoryId(item.id)
                            handleChangeCategory(item.id, selectedMenuType)
                        }}
                    >
                        <Image
                            // source = {item.icon}
                            source = {{uri : getImage(item.image)}}

                            style = {{
                                marginTop: 5,
                                height: 50,
                                width : 50,
                            }}
                        />
                        <Text 
                            style = {{
                                alignSelf: 'center',
                                marginRight: SIZES.base,
                                color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                                ...FONTS.h3
                            }}
                        > {item.title}</Text>
                         </TouchableOpacity>
                )}
            />
        )
    }
    const renderDeliveryTo = () => {
        return(
            <View
                style = {{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            >
                <Text
                    style = {{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                >
                    DELIVERY TO
                </Text>

                <TouchableOpacity
                    style = {{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        alignItems: 'center',
                    }}
                > 
                    <Text
                        style = {{
                            ...FONTS.h3 
                        }}  
                    >
                        {dummyData.myProfile?.address}
                    </Text>

                    <Image 
                        source = {icons.down_arrow}
                        style = {{
                            marginLeft: SIZES.base,
                            height: 20,
                            width: 20,
                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }
    // const FilterModal = () => {
    //     return (

    //     )
    // }
    if(loading){
        return(
            <Text>Loading ...</Text>
        )
    }
    return (
        <View
            style={{
                flex: 1,

            }}
        >
            {/* SEARCH */}

            {renderSearch()}

            {/* FILTER MODAL */}

            {showFilterModal &&

            <FilterModal
                isVisible = {showFilterModal}
                isClose = {() => setShowFilterModal(false)}
            />
            } 


            {/* LIST */}

            <FlatList 
                data = {menuList}
                keyExtractor = {(item) => `${item.id}`}
                showsVerticalScrollIndicator = {false}
                ListHeaderComponent = {
                    <View>
                            {/* DELIEVERY TO */}
                            {renderDeliveryTo()}

                            {/* FOOD CATEGORIES  */}
                            {renderFoodCategories()}

                            {/* POPULAR */}
                            {renderPopularSection()}

                            {/* RECOMMENDED SECTION */}
                            {renderRecommendedSection()}

                            {/* Menu Types */}
                            {renderMenuTypes()}
                    </View>
                }
                renderItem = {({item, index}) => {
                    return(
                        <HorizontalFoodCard
                            containerStyle = {{
                                height : 130,
                                alignItems : 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom : SIZES.radius
                            }}

                            imageStyle = {{
                                marginTop : 20,
                                height: 110, 
                                width: 110,
                            }}

                            item = {item}
                            onPress = {() => {
                                navigation.navigate("FoodDetail")
                                SET_DETAIL_PRODUCT(item)
                            }                            
                        }
                        />
                    )
                }}

                ListFooterComponent = {
                    <View 
                        style = {{
                            height: 200,
                        }}
                    >

                    </View>
                }
            />
            <Text>Home</Text>
        </View>
    )
}

export default Home;
