import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Product from '../../components/Product'
import Liked from './Liked'
const Stack = createStackNavigator();



export class LikedEntry extends Component {
    render() {
        return (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="Liked">
                        <Stack.Screen name="Liked" component={Liked} options={{ headerShown: false }} />
                        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default LikedEntry
