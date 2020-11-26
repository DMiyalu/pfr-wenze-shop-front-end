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
import styles from './style'


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
            {panier.listFruits.map((fruit) =>
                <View key={fruit._id} style={styles.uiSectionBox} >
                    <View style={styles.article} key={fruit._id}>
                        <View style={styles.imageBox}>
                            <Image style={styles.imageFile} source={fruit.image} />
                        </View>
                        <View style={styles.details}>
                            <View>
                                <Text style={styles.titleProduct}>{fruit.title.toUpperCase().slice(0, 16)}</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'column'}}>
                                <View>
                                    
                                </View>
                                <Text 
                                    style={styles.uiTextPrice}
                                >
                                    {fruit.price} $
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => deleteProduct(fruit._id)} style={styles.uiQte}>
                        <View style={styles.uiQteIcon}>
                            <MaterialCommunityIcons 
                                name="close"
                                color="rgba(250, 250, 250, 1.0)" 
                                size={18}
                            />
                        </View>             
                    </TouchableOpacity>
                </View>)}
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
                        <View style={styles.titleTop}>
                            <Text style={styles.titleTopText}>Livraison à domicile en tout point dans la ville de Kinshasa.</Text>
                        </View>
                        <View style={styles.productSection}>
                            {( panier.listFruits.length === 0) ? showEmptyScreen() : showShoppingCart() }
                        </View>
                        <View style={styles.resume}>
                            <Text>Total: {panier.total} Fc</Text>
                            <Text>Livraison: {panier.deliveryCost} Fc</Text>
                            <Text>Net à payer:  {panier.netToPay} Fc</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.uiButton}
                            onPress={() => payOrder()}
                        >
                            <View style={styles.boutonBox}>
                                <Text style={styles.uiButtonText}>Commandez</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
}

export default ShoppingCart

