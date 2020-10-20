import React, { Component } from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    Dimensions, 
    SafeAreaView, 
    Image,
    ScrollView
} from 'react-native'

const { height, width } = Dimensions.get('window')

const Policy = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>WenzeShop, avec vous, partout.</Text>
                </View>
                <View style={styles.imageBox}>
                    <Image 
                        style={styles.imageFile}
                        source={{
                            uri: 'https://cdn.searchenginejournal.com/wp-content/uploads/2020/04/how-ecommerce-companies-can-care-for-their-customers-5eb56dfe6c64e-1520x800.png'
                        }}
                    />
                </View>
                <View style={styles.description}>
                    <Text style= {styles.textDetails}>WenzeShop, avec vous, partout. <Text style={{color: 'rgba(245, 62, 82, 0.6)'}}>Commandez via votre smartphone</Text> et faites-vous livrer à votre domicile.</Text>
                </View>
                <View style={styles.description}>
                    <Text style= {styles.textDetails}>WenzeShop, avec vous, partout. <Text style={{color: 'rgba(245, 62, 82, 0.6)'}}>Commandez via votre smartphone</Text> et faites-vous livrer à votre domicile.</Text>
                </View>
                <View style={styles.description}>
                    <Text style= {styles.textDetails}>WenzeShop, avec vous, partout. <Text style={{color: 'rgba(245, 62, 82, 0.6)'}}>Commandez via votre smartphone</Text> et faites-vous livrer à votre domicile.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Policy


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#fff",
        width: width,
        height: height,
        paddingBottom: 60,
    },
    header: {
        height: 120,
        width: width,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: 'rgba(245, 62, 82, 0.6)',
        paddingHorizontal: 40,
        paddingTop: 50,
    },
    textHeader: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center',
    },
    imageBox: {
        width: width - 30,
        height: 200,
        display: 'flex',
        marginTop: 5,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    description: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    textDetails: {
        textAlign: 'left',
        fontSize: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})