import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import { getPanier, renderPanier } from '../../Redux/Panier/panier.actions'


const ShoppingCart = () => {
    const dispatch = useDispatch()
    const { panier } = useSelector((state) => state.panier)
    const newPanier = {
        listFruits: ['orange', 'mango'],
        total: 13000
    }

    useEffect(async() => {
        await dispatch(getPanier({
            listFruits: ['tomato', 'fraise', 'orange', 'cacao', 'chocolate'],
            total: 14500
        }));

        console.log('State: ', panier);
    }, []);

    return (
            <View>
                <Text> This is shoppingcart component where print some articles. </Text>
                <View>
                    
                    <View>
                        <Text>List of fruits: </Text>
                        <Text> {panier.total} </Text>
                        {panier.listFruits.map((fruit) => <View style={{ marginVertical: 5, paddingVertical: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: "#dedede" }}>
                            <Text style={{ fontSize: 20, color: "rgba(0, 0, 0, 0.7)" }}> - {fruit} </Text>
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