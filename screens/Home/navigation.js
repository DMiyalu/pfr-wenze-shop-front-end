import React, {  useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProduct } from '../../Redux/Product/product.actions'
import { 
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import CardProduct from '../../components/CardProduct'
import axios from 'axios'
import Header from '../../components/Header'
const { height, width } = Dimensions.get('window')

   
    const HomeEntry = ({ navigation }) => {
        const [apiData, setApiData] = useState([])
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
        }, [])
  

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: "white"}} >
                <View style={styles.container} >
                    <Header />
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
                                                style={{ flex: 1 }}
                                                onPress={() => showProduct(product)}
                                            >
                                                <CardProduct
                                                    imageUri={require('../../assets/product/viande_pack.jpg')}
                                                    imageDescription={product.description}
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
                                    <TouchableOpacity style={{ flex: 1, height: 100, width: width - 40 }} onPress={() => navigation.navigate("Product")}>
                                    <Image
                                        onPress={() => navigation.navigate('Product')}
                                        style={styles.sectionImage} 
                                        source={require('../../assets/product/slide1.jpg')} 
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
                                        <CardProduct 
                                            imageUri={require('../../assets/product/fruit1.jpg')}
                                            imageDescription="VIANDE HACHEE"
                                            imagePrice="5$ par kilos"
                                        />
                                        <CardProduct 
                                            imageUri={require('../../assets/product/fruit2.jpg')}
                                            imageDescription="VIANDE HACHEE"
                                            imagePrice="5$ par kilos"
                                        />
                                        <CardProduct 
                                            imageUri={require('../../assets/product/fruit3.jpg')}
                                            imageDescription="VIANDE HACHEE"
                                            imagePrice="5$ par kilos"
                                        />
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
                                                    imageUri={require('../../assets/product/viande_pack.jpg')}
                                                    imageDescription={product.description}
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

export default HomeEntry

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
    },
    textTop: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20,
        color: "rgba(0, 0, 0, 0.8)",
    },
    mainSliders: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 10,
    },
    boxSliders: {
        height: 130,
        marginTop: 20,
    },
    sliderItem: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: "#dddddd",
    },
    imageBox: {
        flex: 2,
    },
    imageTextDescription: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    imageDescription: {
        fontWeight: '700',
        color: "rgba(0, 0, 0, 0.8) ",
    },
    imagePrice: {
        fontWeight: '300',
        color: "rgba(0, 0, 0, 0.4) ",
    },
    section: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    sectionCategories: {
        fontSize: 16,
        fontWeight: '100',
    },
    sectionTitre: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 10,
    },
    sectionImageBox: {
        width: width - 40,
        height: 200,
        marginTop: 20,
        
    },
    sectionImage: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: "cover",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#dddddd",
    },
});