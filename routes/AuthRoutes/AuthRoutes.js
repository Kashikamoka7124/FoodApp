import React, { useEffect } from "react";
import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp
} from '../../screens/Auth'

import { useSelector } from 'react-redux'

const AuthRoutes = (Stack) => {
  console.log("AuthRouter")
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'SignIn'}
      >

        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />

        <Stack.Screen
          name="Otp"
          component={Otp}
        />

      </Stack.Navigator>

    </>
  )
}


export default AuthRoutes;