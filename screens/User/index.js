import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import User from './User'
const Stack = createStackNavigator();



export class UserEntry extends Component {
    render() {
        return (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="User">
                        <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
                        <Stack.Screen name="CreateAccount" component={User} options={{ headerShown: false }} />
                        <Stack.Screen name="ConnectedAccount" component={User} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default UserEntry
