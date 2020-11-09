import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ShoppingCart from './ShoppingCart'
import Search from '../../components/Search'
import Payment from './Payment'
import Service from './Service'
const Stack = createStackNavigator();


export class ShoppingCartEntry extends Component {
    render() {
        return (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="ShoppingCart">
                        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }} />
                        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                        <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
                        <Stack.Screen name="Service" component={Service} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default ShoppingCartEntry
