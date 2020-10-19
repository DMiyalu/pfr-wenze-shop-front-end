import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import { getPanier, renderPanier } from '../../Redux/Panier/panier.actions'


const ShoppingCart = () => {
    const dispatch = useDispatch()
    const { panier, loading } = useSelector((state) => state.panier)
    const newPanier = {title: "orange", price: 5000}

    useEffect(() => {
        dispatch(getPanier(newPanier));
    }, []);

    return (
            <View>
                <Text> This is shoppingcart component where print some articles. </Text>
                <View>
                   
                        <Text> Chargement... </Text>
                    
                        <Text> Redux: {panier.price} </Text>
            
                </View>
            </View>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    container: {

    }
});