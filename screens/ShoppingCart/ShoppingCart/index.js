import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPanier } from '../../../Redux/Panier/panier.actions'
import { 
    Text, 
    View, 
    SafeAreaView,
    Image, 
    Picker, 
    ScrollView, 
    TouchableOpacity,
    StatusBar   
} from 'react-native'
import Header from '../../../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'


const listValueCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const ShoppingCart = ({ navigation }) => {
    const [number, setNumber] = useState(0)
    const dispatch = useDispatch()
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
                <View style={styles.uiSectionBox} key={fruit.productID}>
                    <View style={styles.article}>
                        <View style={styles.imageBox}>
                            <Image style={styles.imageFile} source={require('../../../assets/product/viande-poulet.jpg')} />
                        </View>
                        <View style={styles.details}>
                            <View>
                                <Text style={styles.titleProduct}>{fruit.title.toUpperCase().slice(0, 16)}</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'column'}}>
                                <View>
                                    <Picker
                                        selectedValue={fruit.number}
                                        style={styles.pickerStyle}
                                        onValueChange={(numberEntry) => setNumber(parseInt(numberEntry))}
                                    >                              
                                        {listValueCount.map((value) => 
                                            <Picker.Item label={value} value={value} key={value} />
                                        )}          
                                    </Picker>
                                </View>
                                <Text 
                                    style={styles.uiTextPrice}
                                >
                                    {fruit.price} $
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => deleteProduct(fruit.productID)} style={styles.uiQte}>
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


    function getProduct() {
        return (
            <View>
                {( panier.listFruits.length === 0) ? showEmptyScreen() : showShoppingCart() }
            </View>
        )
    }


    return (
            <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(245, 62, 82, 0.6)" />
                <Header navigation={navigation} screen='Search'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.main}>
                        <View style={styles.titleTop}>
                            <Text style={styles.titleTopText}>Livraison à domicile en tout point dans la ville de Kinshasa.</Text>
                        </View>
                        <View style={styles.productSection}>
                            {getProduct()}
                        </View>
                        <View style={styles.resume}>
                            <Text>Total: {panier.total} $</Text>
                            <Text>TVA: 0.00 $</Text>
                            <Text>Net à payer:  {panier.total} $</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.uiButton}
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

