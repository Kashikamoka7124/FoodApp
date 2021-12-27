import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    createDrawerNavigator, 
    DrawerContentScrollView
} from "@react-navigation/drawer";

import { connect, useSelector } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";
import { LOGOUT, set_user_logout } from "../stores/Registration/actions";
import { PRODUCTS } from "../stores/Product/actions";
import MainLayout from "../screens/MainLayout"
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../constants";

import Animated from "react-native-reanimated";
const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return(
        <TouchableOpacity
            style = {{
                flexDirection:'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center', 
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null

            }}
            // onPress = {() =>}
            onPress = {onPress}
        >
            <Image
                source={icon}
                style = {{
                    width: 20,
                    height: 20, 
                    tintColor: COLORS.white
                }}
            />
            <Text
                    style={{
                        marginLeft:15,
                        color:COLORS.white,
                        ...FONTS.h3
                    }}
            > 
              {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({navigation, selectedTab, setSelectedTab }) => {
    return(
        <DrawerContentScrollView
        scrollEnabled = {true}
        contentContainerStyle = {{flex:1}}
    >
            <View
                style={{
                    flex:1,
                    backgroundColor:COLORS.primary,
                }}
            > 
                {/* Close */}
                    <View
                    style={{
                        alignItems:'flex-start',
                        justifyContent:'center'
                    }}
                >
                        <TouchableOpacity
                            style={{
                                alignItems:"center",
                                justifyContent:"center"
                            }}   
                            onPress = {()=>navigation.closeDrawer() }
                            
                    >
                            <Image
                                source ={icons.cross}
                                style = {{
                                    height: 35,
                                    width: 35,
                                    tintColor: COLORS.white
                                }}

                            />

                                
                        </TouchableOpacity>

                    {/* </View> */}
                        {/* Profile */}
                        <TouchableOpacity
                            style={{
                                flexDirection:"row",
                                marginTop:SIZES.radius,
                                alignItems:"center"
                            }}   
                            onPress = {()=> console.log("Profile") }
                            
                    >
                            <Image
                                source = {dummyData?.myProfile?.profile_image}
                                style = {{
                                    width: 50,
                                    height: 50,
                                    borderRadius: SIZES.radius
                                }}

                            />  
                            <View
                                style = {{
                                    marginLeft: SIZES.radius,
                                }}
                            >
                                <Text
                                    style = {{
                                        color: COLORS.white, ...FONTS.h3
                                    }}
                                >
                                    {dummyData?.myProfile?.name}</Text>
                                    <Text
                                        style = {{color: COLORS.white, ...FONTS.body4}}
                                    >
                                         View your Profile</Text>
                            </View>
                            </TouchableOpacity>
                                {/* Drawer ITems */}
                                
                                    <View
                                        style = {{
                                            flex:1,
                                            marginTop: SIZES.padding,
                                        }}

                                    >
                                        <CustomDrawerItem
                                            label={constants.screens.home}
                                            icon={icons.home}
                                            isFocused = { selectedTab == constants.screens.home}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.home)
                                                navigation.navigate("MainLayout")

                                            }}
                                        />
                                        <CustomDrawerItem
                                            label={constants.screens.wallet}
                                            icon={icons.wallet}
                                            isFocused = {selectedTab == constants.screens.wallet}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.wallet)
                                                navigation.navigate("MainLayout")

                                            }}
                                        />
                                        <CustomDrawerItem
                                            label={constants.screens.notification}
                                            icon={icons.notification}
                                            isFocused = {selectedTab == constants.screens.notification}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.notification)
                                                navigation.navigate("MainLayout")
                                            }}
                                        />
                                        <CustomDrawerItem
                                            label={constants.screens.favourite}
                                            icon={icons.favourite}
                                            isFocused = {selectedTab == constants.screens.favourite}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.favourite)
                                                navigation.navigate("MainLayout")

                                            }}
                                        />

                                        {/* Line Devider */}
                                        <View
                                            style = {{
                                                height:1,
                                                marginVertical: SIZES.radius,
                                                marginLeft: SIZES.radius,
                                                backgroundColor: COLORS.lightGray1

                                            }}
                                        >
                                        </View>
                                        <CustomDrawerItem
                                            label={constants.screens.track_order}
                                            icon={icons.location}
                                            isFocused = {selectedTab == constants.screens.track_order}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.track_order)
                                                navigation.navigate("MainLayout")
                                            }}
                                        />
                                        <CustomDrawerItem
                                            label= {constants.screens.coupon}
                                            icon={icons.coupon}
                                            isFocused = {selectedTab == constants.screens.coupon}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.coupon)
                                                navigation.navigate("MainLayout")
                                            }}
                                        />
                                        <CustomDrawerItem
                                            label= {constants.screens.setting}
                                            icon={icons.setting}
                                            isFocused = {selectedTab == constants.screens.home}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.home)
                                                navigation.navigate("MainLayout")
                                            }}
                                        />
                                        <CustomDrawerItem
                                            label= {constants.screens.invite_friend}
                                            icon={icons.profile}
                                            isFocused = {selectedTab == constants.screens.invite_friend}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.invite_friend)
                                                navigation.navigate("MainLayout")
                                            }}
                                        />
                                        <CustomDrawerItem
                                            label={constants.screens.help_center}
                                            icon={icons.help}
                                            isFocused = {selectedTab == constants.screens.help_center}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.help_center)
                                                navigation.navigate("MainLayout")
                                            }}
                                        />

                                        <View
                                            style = {{
                                                marginBottom:SIZES.padding,
                                            }}
                                        >
                                        <CustomDrawerItem
                                            label={constants.screens.logout}
                                            icon={icons.logout}
                                            isFocused = {selectedTab == constants.screens.logout}
                                            onPress = {() =>{
                                                setSelectedTab(constants.screens.logout)
                                                LOGOUT()
                                                set_user_logout()
                                            }}
                                        />

                                        </View>
                                    </View>
                    </View>

        </View>
        </DrawerContentScrollView>
    )

}

const Drawer = createDrawerNavigator()
const CustomDrawer = ({ selectedTab, setSelectedTab}) => {
    const [progress, setProgress] = React.useState(new Animated.Value(0))

    const Item = useSelector((state) => state.productReducer.Item)

    const scale = Animated.interpolateNode(progress,{
        inputRange:[0,1],
        outputRange: [1, 0.8]
    })
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 26]
    })

    const animatedStyle = { borderRadius, transform: [{ scale }] }

    return(
        <View 
            style={{
                flex: 1,
                backgroundColor: COLORS.primary,


            }}
        >
            <Drawer.Navigator
                drawerType = "slide"
                overlayColor = "transparent"
                drawerStyle = {{
                    flex:1,
                    width:'65%',
                    paddingRight:20,
                    backgroundColor:"transparent",
                }}
                sceneContainerStyle={{
                    backgroundColor:"transparent"
                }}
                initialRouteName="MainLayout"

                drawerContent = {props => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)
                        return (
                            <CustomDrawerContent
                            navigation = {props.navigation}
                            selectedTab = { selectedTab }
                            setSelectedTab = { setSelectedTab}
                            />
                        )
                    }

                }
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} drawerAnimationStyle= {animatedStyle} />}
                    {/* {props => <MainLayout {...props} />} */}
                </Drawer.Screen>
            </Drawer.Navigator>
            
        </View>
    )
}


function mapStateToProps(state){
    return {
        selectedTab: state.tabReducer.selectedTab
    } 
}

function mapDispatchToProps(dispatch){
    return {
        setSelectedTab: (selectedTab) => { 
            return dispatch(setSelectedTab(selectedTab))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)