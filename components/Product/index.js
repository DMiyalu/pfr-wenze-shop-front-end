import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Product from './Product'
import User from '../../screens/User'
const Stack = createStackNavigator()


export class ProductEntry extends Component {
    render() {
        return (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="Product">
                        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
                        <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default ProductEntry
