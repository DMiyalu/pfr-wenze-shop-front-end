import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPanier } from '../../../Redux/Panier/panier.actions'
import { 
    Text, 
    View, 
    SafeAreaView,
    Image, 
    ScrollView, 
    TouchableOpacity,
    StatusBar   
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles, getViewStyle } from './style'


const listValueCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const ShoppingCart = ({ navigation }) => {
    const [number, setNumber] = useState(0)
    const dispatch = useDispatch()
    const [shoppingCartEmpty, setShoppingCartEmpty] = useState(false)
    const { panier } = useSelector((state) => state.panier)

    const showEmptyScreen = () => {
        return (
            <View style={styles.emptyBox}>
                <Text style={styles.emptyText}>Votre panier est vide.</Text>
            </View>
        )
    }

    const deleteProduct = async (id) => {
        let newState = { ...panier  }
        newState = newState.listFruits.filter((product) => {
            return product.productID !== id 
        })
        console.log("Product deleted")
        getPanier(newState)
    }

    const showShoppingCart = () => {
        return (
            <View>
            <View style={styles.titleTop}>
                <Text style={styles.titleTopText}>VOUS AVEZ {panier.listFruits.length} PRODUITS DANS VOTRE PANIER</Text>
            </View>
            {panier.listFruits.map((fruit) =>
                <View style={getViewStyle()}>
                    <View key={fruit._id} style={styles.uiSectionBox} >
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.imageFile}
                                source={fruit.image}
                            />
                        </View>
                        <View style={styles.details}>
                            <View style={styles.title}>
                                <Text style={styles.titleProduct}>{fruit.title}</Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.cost}>{fruit.number} x {fruit.price} Fc</Text>
                                <Text style={styles.total}>{fruit.number * fruit.price} Fc</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
            </View>
        )
    }


    const payOrder = () => {
        navigation.navigate('Payment')
    }


    return (
            <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(245, 62, 82, 0.6)" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.main}>
                        <View style={styles.productSection}>
                            {( panier.listFruits.length === 0) ? showEmptyScreen() : showShoppingCart() }
                        </View>
                        <View style={styles.resume}>
                            <View style={styles.resumeSousTotal}>
                                <Text style={styles.resumeTextLeft}>Sous-total:</Text>
                                <Text style={styles.resumeTextRight}>{panier.total} Fc</Text>
                            </View>
                            <View style={styles.resumeSousTotal}>
                                <Text style={styles.resumeTextLeft}>Livraison:</Text>
                                <Text style={styles.resumeTextRight}>{panier.deliveryCost} Fc</Text>
                            </View>
                            <View style={styles.resumeTotal}>
                                <Text style={styles.resumeTotalLeft}>Net à payer:</Text>
                                <Text style={styles.resumeTotalRight}>{panier.netToPay} Fc</Text>
                            </View>
                        </View>
                        <TouchableOpacity 
                            style={styles.uiButton}
                            onPress={() => payOrder()}
                        >
                            <View style={styles.boutonBox}>
                                <Text style={styles.uiButtonText}>Commander</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
}

export default ShoppingCart

