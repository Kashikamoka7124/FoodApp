import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import AuthLayout from "./AuthLayout";

import {
    FONTS,SIZES,COLORS,icons
} from "../../../constants"

import { FormInput, TextButton } from '../../../components/Auth';

import { utils } from '../../../utils';

const ForgotPassword = ( {navigation} ) => {
    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const isEnableSendEmail = () => {
        return email != "" && emailError == ""
    }

    return (
        <AuthLayout
            title = "Password Recovery"
            subtitle = "Please Enter your email address to recover your password"
            titleContainerStyle = {{
                marginTop : SIZES.padding *2,

            }}
        >
            {/* FORM INPUT  */}

            <View
                style = {{
                    flex: 1,
                    marginTop: SIZES.padding *2,
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

            </View>
                    <TextButton
                        label = "Send Email"
                        disabled = {isEnableSendEmail() ? false: true}
                        buttonContainerStyle = {{
                            height: 55,
                            alignItems: "center",
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius,
                            backgroundColor: isEnableSendEmail() ? COLORS.primary: COLORS.transparentPrimary
                        }}
                        onPress = {() => navigation.goBack()}
                    />
            {/* BUTTON  */}
        </AuthLayout>
    )
}

export default ForgotPassword;