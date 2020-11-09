import * as React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native'


const Service = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="rgba(245, 62, 82, 0.6)"/>
            <ScrollView scrollEventThrottle={22}>
                <View><Text>Service</Text></View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Service