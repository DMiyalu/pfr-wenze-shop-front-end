import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import { getPanier, renderPanier } from '../../Redux/Panier/panier.actions'


const ShoppingCart = () => {
    const dispatch = useDispatch()
    const { panier, loading } = useSelector((state) => state.panier)
    const newPanier = [
        {title: 'orange', number: 3},
        {title: 'mango', number: 5},
        {title: 'fraise', number: 9}
    ]

    useEffect(() => {
        dispatch(getPanier(newPanier));
    }, []);

    return (
            <View>
                <Text> This is shoppingcart component where print some articles. </Text>
                <View>
                    <Text> Redux: {panier.total} </Text>
                    <View>
                        <Text>List of fruits: </Text>
                        {panier.map(number => <View>
                            Fruit: {number.title} * Quantité: {number.number}
                        </View>)}
                    </View>
                </View>
            </View>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    container: {

    }
});