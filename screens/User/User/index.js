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
        <ImageBackground source={{ uri: 'https://www.cregybad.org/wp-content/uploads/2017/10/user.png' }} style={styles.container}>
            <Text>Connect</Text>        
        </ImageBackground>
    )
}

export default User