import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'

const { height, width } = Dimensions.get('window')

const Policy = ({ navigation }) => {
        
        console.log(navigation)
        return (
            <View style={styles.container}>
                <View style={styles.imageBox}>
                    <Image style={styles.imageFile} source={require('../../assets/product/orange.jpg')} />
                </View>
                <Text 
                    style={styles.textPromo}
                    onPress={() => navigation.navigate('Product')}
                > 
                    Avec WenzeShop, sala wenze na tshombo !!! 
                
                </Text>
            </View>
        )
    }


export default Policy


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "rgba(245, 62, 82, 0.6)",
        width: width,
        height: height,
        paddingTop: 40,
    },
    imageBox: {
        flex: 1,
        width: 50,
        height: 50,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    textPromo: {
        flex: 1,
        marginTop: 50,
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: '700',
    }
})