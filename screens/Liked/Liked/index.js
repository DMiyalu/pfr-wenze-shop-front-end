import React from 'react'
import styles from './style'
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native'


const Liked = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Liste des articles favoris.</Text>
        </SafeAreaView>
    )
}

export default Liked