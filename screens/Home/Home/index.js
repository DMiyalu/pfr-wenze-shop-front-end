import React, {  useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../Redux/Product/product.actions'
import { getProductList } from '../../../Redux/AllProduct/allProduct.actions'
import CardProduct from '../../../components/CardProduct'
import axios from 'axios'
import Header from '../../../components/Header'
import styles from './style'
import { 
    Text, 
    View,  
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native'


const Home = ({ navigation }) => {
    const [apiData, setApiData] = useState([])
    const { products } = useSelector((state) => state.products)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    function showProduct(product) {
        dispatch(getProduct({
            productID: product.productID,
            title: product.title,
            description: product.description,
            price: product.price,
            number: product.number,
        }))
        navigation.navigate('Product')
    }

    useEffect(() => {
        axios
        .get('http://192.168.43.52:8080/product')
        .then(async(response) => {
            await dispatch(getProductList(response.data))
        })
        .catch((error) => {
            console.log("Erreur à l'appel de l'api: ", error);
        })

        setIsLoading(true)
    }, [])
 

    return (
        <SafeAreaView style={styles.safeAreaViewStyle} >
        <StatusBar barStyle="light-content" backgroundColor="rgba(245, 62, 82, 0.6)" />
            <View style={styles.container} >
                <Header navigation={navigation} screen='Search'/>
                <ScrollView
                    scrollEventThrottle={20}
                >
                    <View style={styles.mainSliders} >
                        <Text style={styles.textTop} 
                            onPress={() => navigation.navigate('Product')}
                        >
                            Des légumes et des Viandes 100% Bio...
                        </Text>
                        <View style={styles.boxSliders} >
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {products['legumes'].map((product) => 
                                    <TouchableOpacity
                                        key={product.productID}
                                        style={styles.touchableOpacityStyle}
                                        onPress={() => {showProduct(product)}}
                                    >
                                        <CardProduct
                                            imageUri={product.image}
                                            imageDescription={product.description.slice(0, 16)}
                                            imagePrice={product.price}
                                        />
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitre} >
                                    Fast food à votre gout !
                            </Text>
                            <Text style={styles.sectionCategories} >
                                Sandwich et Cake
                            </Text>
                            <View style={styles.sectionImageBox} >
                                <TouchableOpacity style={styles.bigElementUI} onPress={() => {showProduct({
                                    productID: 34,
                                    title: 'Orange',
                                    description: 'Viande de boeuf et de vache, provenant de Goma',
                                    price: 5,
                                    number: 1
                                })}}>
                                    <Image
                                        style={styles.sectionImage} 
                                        source={require('../../../assets/product/sandwich.jpg')} 
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.section} >
                            <Text style={styles.sectionTitre} >
                                Des boissons et des Jus 
                            </Text>
                            <Text style={styles.sectionCategories} >
                                Jus à base des fruits naturels
                            </Text>
                            <View style={styles.boxSliders} >
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {products['boissons'].map((product) => 
                                        <TouchableOpacity
                                            key={product.productID}
                                            style={{ flex: 1 }}
                                            onPress={() => showProduct(product)}
                                        >
                                            <CardProduct
                                                imageUri={product.image}
                                                imageDescription={product.description.slice(0, 16)}
                                                imagePrice={product.price}
                                            />
                                        </TouchableOpacity>
                                    )}
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.section} >
                            <Text style={styles.sectionTitre} >
                                Farine et Céréales
                            </Text>
                            <Text style={styles.sectionCategories} >
                                Céréales recoltés en bonne saison
                            </Text>
                            <View style={styles.boxSliders} >
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {products['farine'].map((product) => 
                                        <TouchableOpacity
                                            key={product.productID}
                                            style={{ flex: 1 }}
                                            onPress={() => showProduct(product)}
                                        >
                                            <CardProduct
                                                imageUri={product.image}
                                                imageDescription={product.description.slice(0, 16)}
                                                imagePrice={product.price}
                                            />
                                        </TouchableOpacity>
                                    )}
                                </ScrollView>
                            </View>
                        </View>
                    </View> 
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default Home



