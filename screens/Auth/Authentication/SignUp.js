import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView

} from 'react-native';

import AuthLayout from './AuthLayout';

import {
    FONTS,
    SIZES,
    COLORS,
    icons,
    constants,
    URL
} from "../../../constants"

import {
    FormInput,
    TextButton,
    TextIconButton
} from '../../../components/Auth';

import { connect } from "react-redux";
import {
    utils
} from "../../../utils"
import {
    REGISTER
} from "../../../stores/Registration/actions"
import axios from 'axios';

const SignUp = ({ navigation }) => {

                    // VARIABLES 
    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPassword, setShowPassword] = React.useState(false)

                    // ERRORS 
    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [moveNext, setMoveNext] = React.useState(false)

    const isEnableSignUp = () => {
        return email != "" && username != "" && password != "" && emailError == "" && usernameError == "" && passwordError == ""
    }

    React.useEffect(() =>{
        setMoveNext(false)
    })

    return (
        <AuthLayout
            title = "Getting Started"
            subtitle = "Create an Account to Continue"
            titleContainerStyle = {{
                marginTop: SIZES.radius,
            }}

        >
            {/* FORM INPUT AND SIGN UP  */}
            <ScrollView>
                <View
                    style = {{
                        flex : 1,
                        marginTop: SIZES.padding,
                        
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
                        {/* USERNAME FORM  */}
                        <FormInput
                            label = "Username"
                            containerStyle = {{
                                marginTop : SIZES.radius,
                            }}
                            onChange = {(value) => setUsername(value)}
                            errorMsg = {usernameError}
                            appendComponent = {
                                <View
                                    style = {{
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Image
                                        source = { username == "" || (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                                        style = {{
                                            height: 20,
                                            width: 20,
                                            tintColor: username == "" ? COLORS.gray : (username !="" && usernameError == "") ? COLORS.green : COLORS.red 
                                        }}
                                    />
                                </View>
                            }
                        />

                        {/* PASSWORD  */}

                        <FormInput
                        label = "Password"
                        secureTextEntry = {!showPassword}
                        autoCompleteType = 'password'
                        containerStyle = {{
                            marginTop: SIZES.radius,

                        }}
                        onChange = {(value) => {
                            utils.validatePassword(value, setPasswordError)
                            setPassword(value)
                        }}
                        errorMsg = {passwordError}
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

                        {/* SIGN UP & SIGN IN  */}
                        <TextButton
                            label = "Sign Up"
                            disable = {isEnableSignUp() ? false: true}
                            buttonContainerStyle = {{
                                height: 50,
                                alignItems: 'center',
                                marginTop: SIZES.padding,
                                borderRadius: SIZES.radius,
                                backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary
                            }}
                            onPress = {() => REGISTER(
                                data = {
                                    "email" : email,
                                    "name" : username,
                                    "password" : password
                                },
                                action = navigation.goBack() 
                            )}

                        /> 

                        <View
                            style = {{
                                flexDirection : 'row',
                                marginTop: SIZES.radius,
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style = {{
                                    color: COLORS.darkGray, ...FONTS.body3
                                }}
                            >
                                Already have an account ?
                            </Text>

                            <TextButton
                                label = "Sign In"
                                buttonContainerStyle = {{
                                    backgroundColor: null,
                                    marginLeft: 5,
                                }}
                                labelStyle = {{
                                    color: COLORS.primary,
                                    ...FONTS.h3
                                }}
                                onPress = {() => navigation.goBack()}
                            >

                            </TextButton>
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

export default SignUp