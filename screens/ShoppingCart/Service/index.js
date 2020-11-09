import * as React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native'
import styles from './style'


const Service = ({ navigation }) => {
    return ( 
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(245, 62, 82, 0.6)"/>
            <ScrollView scrollEventThrottle={22}>
                <View>
                    <Text style={styles.title}>Commande reçue !</Text>
                    <Text style={styles.text}>Merci d'avoir passé votre commande. Vos produits vous seront livrés dans moins d'une heure, par un des nos livreurs. Merci pour votre confiance.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Service