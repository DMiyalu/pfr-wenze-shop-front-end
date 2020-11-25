import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/CardProduct'
import styles from './style'
import {
    ScrollView,
    TouchableOpacity,
} from 'react-native'



const SearchResults = () => {
    const { products } = useSelector((state) => state.products)

    return (
        <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {(products.filter((product) => product.categorie === "Farine")).map((product) => 
                    <TouchableOpacity
                        key={product._id}
                        style={styles.touchableOpacityStyle}
                        onPress={() => {showOneProduct(product)}}
                    >
                        <CardProduct
                            imageUri={product.image}
                            imageDescription={product.title.slice(0, 16)}
                            imagePrice={product.price}
                            unite={product.unite}
                        />
                    </TouchableOpacity>
                )}
    </ScrollView>
    )
}

export default SearchResults