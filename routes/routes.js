import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import mainRoutes from './Main Routes/mainRoutes';
import AuthRoutes from './AuthRoutes/AuthRoutes';
import { useSelector } from 'react-redux';
import {
    Text
} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SplashScreen} from "../screens"
import { PRODUCTS } from '../stores/Product/actions';

const Stack = createStackNavigator();

const Routes = () => {
    const userData = useSelector((state) => state.registrationReducer.AuthState)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
            console.log("UserToken ====>>>> ",userData)
        },5000)
    }, [])

    if(loading){
        return <SplashScreen />
    }
    return (
        <NavigationContainer>
            { userData && userData?.LoggedIn ? mainRoutes(Stack) : AuthRoutes(Stack)}
        </NavigationContainer>
    )
}

export default Routes;