import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Product from '../../components/Product'
import Home from './Home'
import User from '../User'

const Stack = createStackNavigator();

export class HomeEntry extends Component {
    render() {
        return (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
                        <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default HomeEntry
