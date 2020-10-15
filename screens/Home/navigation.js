import React, { Component } from 'react'
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


class HomeEntry extends Component {
    constructor(props) {
        super()
        this.state = {
            apiData: []
        }
    }

    componentWillMount() {
        axios
        .get('http://127.0.0.1:8080/product')
        .then((response) => {
            this.setState({ apiData: response.data })
            console.log("Response *:", response)
            console.log("State: ", this.state.apiData);
        })
        .catch((error) => {
            console.log(error)
        })
    }
   
    render() {
        const { navigation } = this.props

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: "white"}} >
                <View style={styles.container} >
                    <Header />
                    <ScrollView
                        scrollEventThrottle={20}
                    >
                        <View style={styles.mainSliders} >
                            <Text style={styles.textTop} 
                                onPress={() => this.props.navigation.navigate('Product')}
                            >
                                Des légumes et des Viandes 100% Bio...
                            </Text>
                            <View style={styles.boxSliders} >
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <TouchableOpacity
                                        style={{ flex: 1 }}
                                        onPress={() => this.props.navigation.navigate('Product', {
                                            itemId: 4,
                                        })}
                                    >
                                    <CardProduct
                                        onPress={() => this.props.navigation.navigate('Product')}
                                        imageUri={require('../../assets/product/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity
                                        style={{ flex: 1 }}
                                        onPress={() => this.props.navigation.navigate('Product')}
                                    >
                                    <CardProduct
                                        onPress={() => this.props.navigation.navigate('Product')}
                                        imageUri={require('../../assets/product/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ flex: 1 }}
                                        onPress={() => this.props.navigation.navigate('Product')}
                                    >
                                    <CardProduct
                                        onPress={() => this.props.navigation.navigate('Product')}
                                        imageUri={require('../../assets/product/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ flex: 1 }}
                                        onPress={() => this.props.navigation.navigate('Product')}
                                    >
                                    <CardProduct
                                        onPress={() => this.props.navigation.navigate('Product')}
                                        imageUri={require('../../assets/product/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    </TouchableOpacity>
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
                                        onPress={() => this.props.navigation.navigate('Product')}
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
                                        {this.state.apiData.map((product) => 
                                            <TouchableOpacity
                                                key={product._id}
                                                style={{ flex: 1 }}
                                                onPress={() => this.props.navigation.navigate('Product', {
                                                    itemId: product._id
                                                })}
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
}

export default HomeEntry

const styles = StyleSheet.create({
    container: {
        flex: 1,
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