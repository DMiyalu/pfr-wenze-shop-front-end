import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPanier } from '../../../Redux/Panier/panier.actions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../Header'
import CardProduct from '../../CardProduct'
import styles from './style'
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog'
import { 
    Text, 
    View,  
    Image,
    SafeAreaView, 
    Picker, 
    ScrollView, 
    TouchableOpacity,
    Alert
} from 'react-native'
import { set } from 'react-native-reanimated'


const listValueCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
 
    const Product = ({ route, navigation }) => {
        const dispatch = useDispatch()
        const { product } = useSelector((state) => state.product)
        const { panier } = useSelector((state) => state.panier)
        const [count, setCount] = useState(1)
        const [visible, setVisible] = useState(false)
        let newProduct = {...product}

        useEffect(() => {
            setVisible(false)
            return () => {
                hideDialog()
            }
        }, [])

        const setCountProduct = (data) => {
            newProduct.number = data
            setCount(data)
        }

        const hideDialog = () => setVisible(false)

        const createAlertButton = () => {
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

        const testProductExistAlready = () => {

            for (let element of panier.listFruits) {
                if (newProduct.productID === element.productID) return true
                else continue
            }
            return false
        }

        const callValidation = async () => {
            await  
            (testProductExistAlready()) ? createAlertButton() : addToShoppingCart()
        }
 
        const addToShoppingCart = async () => {
            
            newProduct.number = count
            let newState = { ...panier }
            await newState.listFruits.push(newProduct)
            console.log('newState: ', newState)
            dispatch(getPanier(newState))
            setVisible(true)
        }

        return (
            <SafeAreaView style={styles.container}>
            <Header navigation={navigation} screen='Search'/>
            <ScrollView scrollEventThrottle={20} showsVerticalScrollIndicator={false} >
                <View style={styles.main} > 
                    <Text style={styles.topTitle}>
                        Livraison à domicile en tout point dans la ville de Kinshasa.
                    </Text>
                    <View style={styles.imageBox} >
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageFile} source={require('../../../assets/product/viande-poulet.jpg')} />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.titleProduct}>{product.title.toUpperCase()}</Text>
                            <Text style={styles.textDescription}>{product.description}</Text>
                            <Text style={styles.price}>{product.price}$ par kilos </Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.quantiteBox}>
                            <View>
                                <MaterialCommunityIcons
                                    name="checkbox-blank-circle" color="rgba(0, 0, 200, 0.6)" size={10} 
                                />
                            </View>
                            <View>
                                <Text 
                                    style={{ marginHorizontal: 5, fontSize: 14 }}
                                > 
                                    Qté:
                                </Text>
                            </View>
                            <View>
                            <Picker
                                mode={'dialog'}
                                selectedValue={count}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setCountProduct(itemValue)}
                            >           
                                {listValueCount.map((value) => 
                                    <Picker.Item 
                                        key={value}
                                        label={value}  
                                        value={value}
                                    />
                                )}              
                            </Picker>
                            </View>
                        </View>
                        <View style={styles.quantiteBox}>
                            <View>
                                <MaterialCommunityIcons
                                    name="checkbox-blank-circle" color="rgba(0, 0, 200, 0.6)" size={10}
                                />
                            </View>
                            <View>
                                <Text 
                                    style={{ marginHorizontal: 5, fontSize: 14 }}
                                > 
                                    Total:
                                </Text>
                            </View>
                            <View>
                                <Text 
                                    style={{ marginHorizontal: 5, fontSize: 14, color: "rgba(245, 62, 82, 0.6)" }}
                                > 
                                    100$
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => callValidation()}
                            style={styles.boutonAjouter}
                        >
                            <Text style={{ color: "white", fontSize: 16, fontWeight: '600' }}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
                    <Dialog
                        visible={visible}
                        onTouchOutside={() => setVisible(false)}
                        dialogAnimation={new SlideAnimation({
                            initialValue: 0,
                            slideFrom: 'bottom',
                            useNativeDriver: true,
                        })}
                        animationDuration={200}
                    >
                        <DialogContent>
                            <View style={styles.dialogBox}>
                                <Text style={styles.dialogText}>Ajouté</Text>
                            </View>
                        </DialogContent>
                    </Dialog>
                    <View style={styles.sectionSliders}>
                            <Text style={styles.textTop} >
                                Produits commandés en accompagnement                          
                            </Text>
                            <View style={styles.boxSliders} >
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <CardProduct  
                                        imageUri={require('../../../assets/product/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    <CardProduct 
                                        imageUri={require('../../../assets/product/viande_hachee.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    <CardProduct 
                                        imageUri={require('../../../assets/product/viande-poulet.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                </ScrollView>
                            </View>
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }


export default Product
