import React, {  useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ResultCardProduct from '../../../components/ResultCardProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../Redux/Product/product.actions'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { styles } from './style'
import { 
    Text,
    TextInput,
    View,  
    SafeAreaView,
    ScrollView,
    RefreshControl,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native'


const SearchProduct = ({ route, navigation }) => {
    const [result, setResult] = useState()
    const { products } = useSelector((state) => state.products)
    const [textSearch, setTextSearch] = useState("")
    const { text } = route.params
    const dispatch = useDispatch()


    //Recupère les données via l'API et les envoies vers le store
    useEffect( () => {
        console.log(`textsearch: ${text}`)        
        foundProduct(text)
    }, [])


    const foundProduct = async (text) =>  {
        console.log(`foundproduct...`)
        let data = await products.filter((product) => product.title.toLowerCase().includes(text.toLowerCase()))

        if (data) {
            setResult(data)
            console.log(`data: ${data.length}`)
        }
    }

    const showCircularProgressIndicator = () => {
        return (
            <AnimatedCircularProgress
                size={50}
                width={3}
                fill={100}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" 
            />
        )
    }


    const showResult = () => {
        return (
            <View>
                {result.map((product) => 
                    <TouchableOpacity
                        key={product._id}
                        onPress={() => {showOneProduct(product)}}
                    >
                        <ResultCardProduct 
                            imageUri={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    </TouchableOpacity>
                )}
            </View>
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

    return (
        <SafeAreaView style={styles.safeAreaViewStyle}>
            <View style={styles.container}>
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
                            onChangeText= {(value) => setTextSearch(value)}
                            onSubmitEditing={() => {foundProduct(textSearch)}}
                        />
                    </View>
                </View>
                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {result ? (result.length ? showResult() : <Text>Pas de resultats pour {text}.</Text>) : showCircularProgressIndicator()}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SearchProduct