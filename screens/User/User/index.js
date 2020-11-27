import React from 'react'
import styles from './style'
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
} from 'react-native'


const User = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../../assets/product/back.jpg')} style={styles.container}>
            <Text>Connect</Text>            
        </ImageBackground>
    )
}

export default User