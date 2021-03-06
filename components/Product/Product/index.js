import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPanier } from '../../../Redux/Panier/panier.actions'
import styles from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import { 
    Text, 
    View,  
    Image,
    SafeAreaView, 
    TextInput,
    ScrollView, 
    TouchableOpacity,
    Alert
} from 'react-native'


 
    const product = ({ navigation }) => {
        const dispatch = useDispatch()
        const { product } = useSelector((state) => state.product)
        const { panier } = useSelector((state) => state.panier)
        const [indexProduct, setIndexProduct] = useState(0)
        const [count, setCount] = useState("1")


   

        //displays an alert
        const displayalertButton = () => {
            Alert.alert(
                'Ajout article',
                'Cet article est déjà dans le panier !',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Action annulée !'),
                        style: 'cancel'
                    }
                ],
                {cancelable: false}
            )
        }


        // Check if the product is already in the cart
        const testProductIsAlready = () => {
            for (let element of panier.listFruits) {
                if (product._id === element._id) return true
            }
            return false
        }

        // The product is already: Check if the number has changed
        const checkNumberSelected = () => {
            console.log('check')
            setIndexProduct(panier.listFruits.findIndex((element) => element._id === product._id))
            if (panier.listFruits[indexProduct].number === parseInt(count)) {displayalertButton()}
            else {updateNumber(indexProduct, parseInt(count))}
        }


        // Update number product 
        const updateNumber = (indexProduct, countValue) => {
            console.log('update', indexProduct, countValue)
            //update from the store
        }


        // Validate the add action
        const callValidation = () => {
            (testProductIsAlready()) ? checkNumberSelected() : addToShoppingCart()
        }
 
        // Add the product to the store
        const addToShoppingCart = async () => {
            console.log("add product")
            let postproduct = {...product}
            postproduct.number = parseInt(count)

            let postPanier = {...panier}
            postPanier.total += (postproduct.number * postproduct.price)
            postPanier.netToPay += postPanier.total + postPanier.deliveryCost
            postPanier.listFruits.push(postproduct)

            dispatch(getPanier(postPanier))
        }

        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.header}> 
                <View style={styles.returnIcon}>
                    <MaterialCommunityIcons 
                        name="arrow-left" 
                        color="white"
                        size={25}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <Text style={styles.titleDetails}>Détails produit</Text>
                <TouchableOpacity 
                    style={styles.accountBox}
                    onPress={() => navigation.navigate('User')}
                >
                    <Avatar.Image style={styles.accountIcon} size={24} source={{ uri: 'https://www.cregybad.org/wp-content/uploads/2017/10/user.png' }} />
                </TouchableOpacity>
            </View>
            <ScrollView scrollEventThrottle={20} showsVerticalScrollIndicator={false} >
                <View style={styles.main} >
                    <View style={styles.imageBox} >
                        <Image style={styles.imageFile} source={{ uri: product.image,}} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.topTitle}>{product.title}</Text>
                        <Text style={styles.description}>{product.description}</Text>
                        <Text style={styles.price}>Prix: {product.price} Fc/ {product.unite}</Text>
                        <Text style={styles.price}>TVA: 0.0 Fc</Text>
                        <View style={styles.totalEtQuantite}>
                            <View style={styles.totalBox}>
                                <Text style={styles.totalTitle}>Total:</Text>
                                <Text style={styles.totalValue}>{product.price * count} Fc</Text>
                            </View>
                            <View style={styles.quantiteBox}>
                                <Text style={styles.totalTitle}>Quantite:</Text>
                                <View style={styles.setCount}>
                                    <TouchableOpacity
                                        style={styles.sign}
                                        onPress={() => {
                                            if (parseInt(count) > 1) setCount((parseInt(count) - 1).toString())
                                        }}
                                    >
                                        <Text style={styles.signUI}>-</Text>
                                    </TouchableOpacity>
                                    <TextInput 
                                        style={styles.input}
                                        selectionColor="blue"
                                        maxLength={3}
                                        keyboardType='numeric'
                                        onChangeText={(value) => setCount(value)}
                                        value={count}
                                    />
                                    <TouchableOpacity
                                        style={styles.sign}
                                        onPress={() => {setCount((parseInt(count) + 1).toString())}}
                                    >
                                        <Text style={styles.signUI}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity
                            onPress={() => {callValidation()}}
                            style={styles.boutonAjouter}
                        >
                            <Text style={{ color: "white", fontSize: 16, fontWeight: '600' }}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }


export default product
