import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Policy from './Policy'
const Stack = createStackNavigator();
const { height, width } = Dimensions.get('window')


const ScreenA = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text> This is the Screen A  </Text>
            <Button
                title="See more"
                onPress={() => navigation.navigate('Product')}
            />
        </View>
    )
}

const ScreenB = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text> This is the Screen B  </Text>
        </View>
    )
}



export class About extends Component {
    render() {
        return (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="ScreenA">
                        <Stack.Screen name="Policy" component={Policy} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(245, 62, 82, 0.6)",
        height: height,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textTop: {
        color: "white",
        fontSize: 24,
        fontWeight: "700"
    },
    textMiddle: {
        color: "white",
        fontSize: 18,
        fontWeight: '300',
    }
});