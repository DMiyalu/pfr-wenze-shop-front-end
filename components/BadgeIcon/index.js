import React from 'react'
import { useSelector } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'
import {
    View,
    Text,
} from 'react-native'



const BadgeIcon = ({ color }) => {
    const { panier } = useSelector((state) => state.panier)
    return (
        <View>
            <MaterialCommunityIcons name="cart" color={color} size={26} />
            <Text style={styles.count} >
                {panier.listFruits.length === 0 ? 0 : panier.listFruits.length}
            </Text>
        </View>
    )
}

export default BadgeIcon