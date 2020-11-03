import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    View,
    Text,
    StatusBar,
} from 'react-native'


const Pay = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="rgba(245, 62, 82, 0.6)" />
            <View style={styles.container}>
                <Text>Paiement electronique</Text>
            </View>
        </SafeAreaView>
    )
}

export default Pay