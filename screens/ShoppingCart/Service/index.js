import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native'
import { StorageKey } from '../../../lib/auth'
import styles from './style'


const Service = ({ navigation }) => {
    const [authState, setAuthState] = useState(null)
    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        (async () => {
            console.log(`userAuth-redux: ${user['token']}`)
            let cachedAuth = await AsyncStorage.getItem(StorageKey)

            if (cachedAuth && !authState) {
                await setAuthState(cachedAuth);
                    console.log(`userAuth: ${authState}`);

            }
        })();
    }, []);


    return ( 
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(245, 62, 82, 0.6)"/>
            <ScrollView scrollEventThrottle={22}>
                <View>
                    <Text style={styles.title}>Commande reçue !</Text>
                    <Text style={styles.text}>Merci {authState ? JSON.parse(authState).token : null} d'avoir passé votre commande. Vos produits vous seront livrés dans moins d'une heure, par un des nos livreurs. Merci pour votre confiance.</Text>
                    <Text style={styles.adresse}>Adresse de livraison: {authState}.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Service