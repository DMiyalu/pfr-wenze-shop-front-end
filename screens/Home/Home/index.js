import React, {  useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from 'react-native-paper'
import { getProduct } from '../../../Redux/Product/product.actions'
import { getProductList } from '../../../Redux/AllProduct/allProduct.actions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CardProduct from '../../../components/CardProduct'
import axios from 'axios'
import { apiUrl } from '../../../lib/api-wenzeshop'
import { styles, getViewStyle } from './style'
import { 
    Text,
    TextInput,
    View,  
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native'


const Home = ({ navigation }) => {
    const { products } = useSelector((state) => state.products)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()



    //Affiche un rendu de chargement des données(loader 1)
    const showSmallEmptyCard = () => {
        return (
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.touchableOpacityStyle}
            >
                <View style={styles.smallEmptyCard}></View>
                <View style={styles.smallEmptyCard}></View>
                <View style={styles.smallEmptyCard}></View>
                <View style={styles.smallEmptyCard}></View>
            </ScrollView>
        )
    }


    //(Loader 2)
    const showBigEmptyCard = () => {
        return (
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.touchableOpacityStyle}
            >
                <View style={styles.bigEmptyCard}></View>
                <View style={styles.bigEmptyCard}></View>
                <View style={styles.bigEmptyCard}></View>
                <View style={styles.bigEmptyCard}></View>
            </ScrollView>
        )
    }


    //Affiche les produits dans la section des promotions produits
    const showPromotionnalProducts = (categorie) => {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {(products.filter((product) => product.categorie === categorie)).map((product) => 
                    <TouchableOpacity
                        key={product._id}
                        style={styles.sectionImageBox}
                        onPress={() => {showOneProduct(product)}}
                    >
                        <Image style={styles.imageFile} source={{
                            uri: product.image,
                        }} />
                    </TouchableOpacity>
                )}
            </ScrollView>
        )
    }


    //Affiche les produits filtrés par leur catégorie
    const showAllProducts = (categorie) => {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {(products.filter((product) => product.categorie === categorie)).map((product) => 
                    <TouchableOpacity
                        key={product._id}
                        style={styles.touchableOpacityStyle}
                        onPress={() => {showOneProduct(product)}}
                    >
                        <CardProduct
                            imageUri={product.image}
                            imageDescription={product.title.slice(0, 16)}
                            imagePrice={product.price}
                            unite={product.unite.slice(0, 5)}
                        />
                    </TouchableOpacity>
                )}
            </ScrollView>
        )
    }
    

    // Affiche les détails sur un produit
    const showOneProduct = async (product) => {
        await dispatch(getProduct({
            _id: product._id,
            title: product.title,
            description: product.description,
            price: product.price,
            number: 1,
            image: product.image,
            unite: product.unite,
        }))
        navigation.navigate('Product')
    }


    //Recupère les données via l'API et les envoies vers le store
    useEffect(() => {
        axios
        .get(`${apiUrl}/product`)
        .then(async(response) => {
            console.log("UseEffect start")
            console.log(response.data)
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
                <View style={styles.header}>
                    <View style={styles.searchBox}>
                        <MaterialCommunityIcons 
                            name="magnify" 
                            color="rgba(245, 62, 82, 0.6)" 
                            size={20} 
                            style={{ marginLeft: -4, marginRight: 10 }}
                        />
                        <TextInput
                            style={styles.textSearch}
                            placeholder="Recherche..."
                            placeholderTextColor="gray"
                            underlineColorAndroid="transparent"
                            clearTextOnFocus={false}
                        />
                    </View>
                    <TouchableOpacity 
                        style={styles.accountBox}
                        onPress={() => navigation.navigate('User')}
                    >
                        <Avatar.Image size={24} source={{ uri: 'https://www.cregybad.org/wp-content/uploads/2017/10/user.png' }} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    scrollEventThrottle={20}
                >
                    <View style={styles.mainSliders} >
                        <Text style={styles.textTop} >
                            Des légumes et des Viandes 100% Bio...
                        </Text>
                        <View style={styles.boxSliders} >
                            { (products.length === 0) ? showSmallEmptyCard() : showAllProducts("Légumes")}
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitre} >
                                    La patisserie à votre main !
                            </Text>
                            <Text style={styles.sectionCategories} >
                                Sandwich et autres Gateaux
                            </Text>
                            <View>
                                { (products.length === 0) ? showBigEmptyCard() : showPromotionnalProducts("Cake")}
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
                                {(products.length === 0) ? showSmallEmptyCard() : showAllProducts("Boissons")}
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
                                {(products.length === 0) ? showSmallEmptyCard() : showAllProducts("Farine")}
                            </View>
                        </View>
                    </View> 
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default Home



