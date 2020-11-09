import * as React from 'react'
import styles from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'




const Payment = ({ navigation }) => {

    const callPaymentService = () => {
        navigation.navigate('Service')
    }

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(245, 62, 82, 0.6)"/>
            <ScrollView scrollEventThrottle={22}>
                <Text style={styles.title}>Choisissez le mode de paiement</Text>
                <View style={styles.itemsBox}> 
                    <TouchableOpacity onPress={() => callPaymentService()} style={styles.items}>
                        <View style={styles.imageBox}>
                            <Image style={styles.imageFile} source={require('../../../assets/services/airtel.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => callPaymentService()} style={styles.items}>
                        <View style={styles.imageBox}>
                            <Image style={styles.imageFile} source={require('../../../assets/services/africell.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => callPaymentService()} style={styles.items}>
                        <View style={styles.otherMode}>
                            <Text style={styles.textModePayment}>Paiement à la livraison</Text>
                            <MaterialCommunityIcons name="truck-delivery" color='rgba(245, 62, 82, 0.6)' size={26} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => callPaymentService()} style={styles.items}>
                        <View style={styles.imageBox}>
                            <Image style={styles.imageFile} source={require('../../../assets/services/mpesa.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Payment