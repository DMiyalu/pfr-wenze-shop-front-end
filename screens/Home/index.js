import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Product from '../../components/Product'
import HomeEntry from './navigation'
const Stack = createStackNavigator();



export class Home extends Component {
    render() {
        return (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="HomeEntry">
                        <Stack.Screen name="HomeEntry" component={HomeEntry} options={{ headerShown: false }} />
                        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default Home
