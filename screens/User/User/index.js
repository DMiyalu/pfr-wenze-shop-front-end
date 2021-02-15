import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style'
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
} from 'react-native'


const User = ({ navigation }) => {
    const { user } = useSelector((state) => state.user)

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>Infos compte</Text>
                </View>
                <View style={styles.desciption}>
                    <Text>Nom </Text>
                    <Text>Prenom </Text>
                    <Text>Telephone </Text>
                    <Text>Email </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default User