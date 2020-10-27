import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPanier } from '../../../Redux/Panier/panier.actions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../Header'
import CardProduct from '../../CardProduct'
import styles from './style'
import { 
    Text, 
    View,  
    Image,
    SafeAreaView, 
    Picker, 
    ScrollView, 
    TouchableOpacity
} from 'react-native'


const listValueCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
 

    const Product = ({ route, navigation }) => {
        const dispatch = useDispatch()
        const { product } = useSelector((state) => state.product)
        const { panier } = useSelector((state) => state.panier)
        const [count, setCount] = useState(1)
        let newProduct = {...product}

        const setCountProduct = (data) => {
            newProduct.number = data
            setCount(data)
        }



        const addToShoppingCart = async () => {
            let newState = { ...panier }
            await newState.listFruits.push(newProduct)
            dispatch(getPanier(newState))
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
                            onPress={() => addToShoppingCart()}
                            style={styles.boutonAjouter}
                        >
                            <Text style={{ color: "white", fontSize: 16, fontWeight: '600' }}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
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
