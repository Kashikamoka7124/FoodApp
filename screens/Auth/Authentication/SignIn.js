import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native' 

import AuthLayout from "./AuthLayout"

import {
    constants,
    FONTS,
    SIZES,
    COLORS,
    icons,
    URL
} from "../../../constants"

import {
    FormInput,
    CustomSwitch,
    TextButton,
    TextIconButton
} from '../../../components/Auth'
import axios from 'axios'

import {utils} from "../../../utils"

import { Value } from 'react-native-reanimated';
import { DrawerContentScrollView } from '@react-navigation/drawer'

import {useDispatch} from "react-redux"
import { setLogIn } from "../../../stores/Registration/actions"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN} from "../../../stores/Registration/actions"
import { PRODUCTS } from '../../../stores/Product/actions'

const SignIn = ( { navigation } ) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [showPassword, setShowPassword] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)
    const dispatch = useDispatch()

    const isEnableSignIn = () => {
        return email !="" && password != "" && emailError == ""
    }


    return (
        <AuthLayout
            title = "Let's SignIn to you"        
            subtitle = "Welcome back, you've been missed"
        >
            <ScrollView>
                <View
                    style = {{
                        flex: 1,
                        marginTop: SIZES.padding * 2,
                    }}
                >
                    {/* FORM INPUT  */}
                    <FormInput
                        label = "Email"
                        keyboardType = "email-address"
                        autoCompleteType = 'email'
                        onChange = {(value) =>{
                            // // validate Email

                            utils.validateEmail(value, setEmailError)
                            setEmail(value)
                        }}
                        errorMsg = {emailError}
                        appendComponent = {
                            <View
                                style = {{
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    source = {email == "" || ( email != '' && emailError == '') ? icons.correct : icons.cancel}
                                    style = {{
                                        height: 20,
                                        width: 20,
                                        tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red,
                                    }}
                                /> 

                            </View>
                        }
                    />

                    <FormInput
                        label = "Password"
                        secureTextEntry = {!showPassword}
                        autoCompleteType = 'password'
                        containerStyle = {{
                            marginTop: SIZES.radius,

                        }}
                        onChange = {(value) => {
                            setPassword(value)
                        }}
                        appendComponent = {
                            <TouchableOpacity
                                style = {{
                                    width: 40,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center'
                                }}
                                onPress = {() => setShowPassword(!showPassword)}
                            >
                                <Image
                                    source = {showPassword ? icons.eye_close : icons.eye}
                                    style = {{
                                        height: 20,
                                        width: 20,
                                        tintColor: COLORS.gray
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    
                    />

                    {/* SAVE ME & FORGET PASSWORD */}

                        <View
                            style = {{
                                flexDirection : 'row',
                                marginTop: SIZES.radius,
                                justifyContent: 'space-between',

                            }}
                        >
                            <CustomSwitch
                                value = {saveMe}
                                onChange = {(value) => setSaveMe(value)}
                            />
                            <TextButton
                                label = "Forgot Password"
                                buttonContainerStyle = {{
                                    backgroundColor: null
                                }}
                                labelStyle = {{
                                    color: COLORS.gray,
                                    ...FONTS.body4,
                                }}
                                onPress = {() => navigation.navigate("ForgotPassword")}
                            />

                        </View>

                    {/* SIGN IN  */}
                        <TextButton
                            label = "Sign In"
                            disable = {isEnableSignIn() ? false : true}
                            buttonContainerStyle = {{
                                height: 55,
                                alignItems: 'center',
                                marginTop: SIZES.padding,
                                borderRadius: SIZES.radius,
                                backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary,
                            }}
                            onPress = {() => LOGIN(
                                data = {
                                    "email" : email,
                                    "password" : password
                                },
                                action = PRODUCTS()
                                // action = navigation.navigate("Home")
                            )}
                        />
                    {/* SIGN UP  */}

                    <View
                        style = {{
                            flexDirection: 'row',
                            marginTop: SIZES.radius,
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style = {{
                                color: COLORS.darkGray,
                                ...FONTS.body3
                            }}
                        >
                            Don't have an Account ?
                        </Text>
                        <TextButton
                            label = 'SignUp'
                            buttonContainerStyle = {{
                                marginLeft: 3,
                                backgroundColor: null
                            }}
                            labelStyle = {{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}
                            onPress = {() => navigation.navigate("SignUp")}
                        />

                    </View>
                    
                            {/* FOOTER SECTION  */}
                    <View>
                    {/* FACEBOOK ICON BUTTON  */}
                        <TextIconButton
                            containerStyle = {{
                                height: 50,
                                alignItems: 'center',
                                // marginTop: SIZES.radius * 0.5,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.blue,
                            }}
                            icon = {icons.fb}
                            iconPosition = "LEFT"
                            iconStyle = {{
                                tintColor: COLORS.white,
                            }}
                            label = "Continue With Facebook"
                            labelStyle = {{
                                marginLeft: SIZES.radius,
                                color: COLORS.white
                            }}
                            onPress = {() => console.log("Login With Facebook")}
                            />

                    {/* GOOGLE ICON BUTTON  */}
                    <TextIconButton
                            containerStyle = {{
                                height: 50,
                                alignItems: 'center',
                                marginTop: SIZES.radius * 0.5,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.lightGray2,
                            }}
                            icon = {icons.google}
                            iconPosition = "LEFT"
                            iconStyle = {{
                                tintColor: COLORS.darkGray2
                            }}
                            label = "Continue With Google"
                            labelStyle = {{
                                marginLeft: SIZES.radius,
                            }}
                            onPress = {() => console.log("Login With Google")}
                        />
                </View>
            </View>
        </ScrollView>
        </AuthLayout>
    )
}

export default SignIn;