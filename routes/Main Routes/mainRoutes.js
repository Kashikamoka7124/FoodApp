import React from "react";
import CustomDrawer from "../../navigation/CustomDrawer";
import { Home, OrderDelivery, Restaurant } from '../../screens/';

import {
    MyCard,
    MyCart,
    Success,
    Map,
    DeliveryStatus,
    Checkout,
    AddCard,
    FoodDetail
} from '../../screens/checkout'
console.log("Main Router")
const mainRoutes = (Stack) => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >

                <Stack.Screen
                    name='Home'
                    component={CustomDrawer}
                />

                <Stack.Screen
                    name="FoodDetail"
                    component={FoodDetail}
                />

                <Stack.Screen
                    name="Checkout"
                    component={Checkout}
                />

                <Stack.Screen
                    name="MyCart"
                    component={MyCart}
                />

                <Stack.Screen
                    name="Success"
                    component={Success}
                    options={{ gestureEnabled: false }}
                />

                <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                />

                <Stack.Screen
                    name="MyCard"
                    component={MyCard}
                />

                <Stack.Screen
                    name="DeliveryStatus"
                    component={DeliveryStatus}
                    options={{ gestureEnabled: false }}

                />

                <Stack.Screen
                    name="Map"
                    component={Map}
                />

            </Stack.Navigator>

        </>
    )
}

export default mainRoutes;