import React, {  useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProduct } from '../../../Redux/Product/product.actions'
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
    TouchableOpacity
} from 'react-native'


const Home = ({ navigation }) => {
    const [apiData, setApiData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    function showProduct(product) {
        dispatch(getProduct({
            productID: product._id,
            title: product.title,
            description: product.description,
            price: product.price,
            number: 1,
        }))
        navigation.navigate('Product', {
            productID: 34,
            title: 'Orange',
            description: 'Viande de boeuf et de vache, provenant de Goma',
            price: 5,
            number: 1
        })
    }

    useEffect(() => {
        axios
        .get('http://127.0.0.1:8080/product')
        .then(async(response) => {
            await setApiData(response.data)
            console.log("Response: ", response.data)
            console.log("State: ", apiData);
            console.log(navigation);
        })
        .catch((error) => {
            console.log(error);
        })

        setIsLoading(true)
    }, [])
 

    return (
        <SafeAreaView style={styles.safeAreaViewStyle} >
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
                                {apiData.map((product) => 
                                    <TouchableOpacity
                                        key={product._id}
                                        style={styles.touchableOpacityStyle}
                                        onPress={() => {showProduct(product)}}
                                    >
                                        <CardProduct
                                            imageUri={require('../../../assets/product/viande-poulet.jpg')}
                                            imageDescription={product.description.slice(0, 16)}
                                            imagePrice={product.price}
                                        />
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitre} >
                                    Fast food with wiikko
                            </Text>
                            <Text style={styles.sectionCategories} >
                                Vivres frais & Viandes fraiches
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
                                        source={require('../../../assets/product/slide1.jpg')} 
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.section} >
                            <Text style={styles.sectionTitre} >
                                All for your lunch
                            </Text>
                            <Text style={styles.sectionCategories} >
                                Cake & Sandwich
                            </Text>
                            <View style={styles.boxSliders} >
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {apiData.map((product) => 
                                        <TouchableOpacity
                                            key={product._id}
                                            style={{ flex: 1 }}
                                            onPress={() => showProduct(product)}
                                        >
                                            <CardProduct
                                                imageUri={require('../../../assets/product/viande-poulet.jpg')}
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
                                Take delicious foods at your home
                            </Text>
                            <Text style={styles.sectionCategories} >
                                Cake & Sandwich
                            </Text>
                            <View style={styles.boxSliders} >
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {apiData.map((product) => 
                                        <TouchableOpacity
                                            key={product._id}
                                            style={{ flex: 1 }}
                                            onPress={() => showProduct(product)}
                                        >
                                            <CardProduct
                                                imageUri={require('../../../assets/product/viande_pack.jpg')}
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



